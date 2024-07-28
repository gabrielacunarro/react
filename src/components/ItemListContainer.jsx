import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(products);
    }, 1000);
  }, []);

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
                <Link to={`/products/${item.id}`} className="btn btn-primary">
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
