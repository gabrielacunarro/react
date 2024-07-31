import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card } from "react-bootstrap";

export const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const product = products.find((product) => product.id === Number(id));
    setSelectedProduct(product);
  }, [id]);

  if (!selectedProduct) return <Container className="mt-4">Loading...</Container>;

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card style={{ width: '20rem', maxWidth: '100%' }}>
        <Card.Img variant="top" src={selectedProduct.image} alt={selectedProduct.title} />
        <Card.Body>
          <Card.Title>{selectedProduct.title}</Card.Title>
          <Card.Text>
            {selectedProduct.detail}
          </Card.Text>
          <Card.Text>
            <strong>Price: ${selectedProduct.price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

