import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, getDocs, query, collection, where } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from 'react-loading';
import NotFound from "../views/NotFound";
import { Container, Row, Col } from 'react-bootstrap';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { key } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const itemsQuery = key
        ? query(itemsCollection, where("categoryId", "==", key))
        : itemsCollection;

      const snapshot = await getDocs(itemsQuery);
      const itemsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setItems(itemsList);
      setLoading(false);
    };

    fetchItems();
  }, [key]);

  if (loading) {
    return (
      <div className="spinner">
        <ReactLoading type="spin" color="#000" />
      </div>
    );
  }

  if (items.length === 0) {
    return <NotFound />;
  }

  return (
    <Container className="mt-4">
      <Row className="g-4">
        {items.map(item => (
          <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <div className="card h-100 text-center">
              <img src={item.imageId} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <hr className="my-3" />
                <Link to={`/item/${item.id}`} className="btn btn-primary">
                  See more
                </Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
