import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/products.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Obtener el categoryId de los parámetros de la ruta

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    }).then((res) => {
      console.log({ res });
      const filteredProducts = id ? res.filter(product => product.categoryId === Number(id)) : res;
      setItems(filteredProducts);
    }).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Container className="mt-4">Loading...</Container>;

  if (items.length === 0)
    return <Container className="mt-4">There aren't any products yet...</Container>;

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
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
    </div>
  );
};
