import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, getDocs, where, query, collection } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ReactLoading from 'react-loading';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "items")
      : query(
        collection(db, "items"), where("categoryId", "==", id)
      )

    getDocs(refCollection).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
      )
    })
      .finally(() => setLoading(false))
  }, [id]);


  if (loading) {
    return (
        <Container className="spinner">
            <ReactLoading type="spin" color="#000" />
        </Container>
    );
}

  if (items.length === 0) {
    return <Container className="text-center mt-4">There arent any products yet...</Container>;
  }

  return (
    <Container className="mt-4">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.imageId}
                className="card-img"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <Link to={`/item/${item.id}`} className="btn btn-primary">
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
