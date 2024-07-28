import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

export const ProductDetail = () => {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setProductId(products.find((product) => product.id === Number(id)));
  }, [id]);

  if (!productId) return <div>Loading...</div>;

  return (
    <main>
      <img width={300} src={productId.image} alt={productId.title} />
      <h1>{productId.title}</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem
        inventore a ducimus itaque quia! Sunt nobis, laborum dolorum accusamus
        odit, dignissimos praesentium totam quam consectetur nesciunt, libero
        vitae adipisci.
      </h2>
      <p>{productId.detail}</p>
    </main>
  );
};
