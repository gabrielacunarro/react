import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";

export const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching product with ID:", id);
    const product = products.find((product) => product.id === Number(id));
    console.log("Found product:", product);
    setSelectedProduct(product);
  }, [id]);

  if (!selectedProduct) return <div>Loading...</div>;

  return (
    <main style={{ padding: "20px" }}>
      <img width={300} src={selectedProduct.image} alt={selectedProduct.title} />
      <h1>{selectedProduct.title}</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem
        inventore a ducimus itaque quia! Sunt nobis, laborum dolorum accusamus
        odit, dignissimos praesentium totam quam consectetur nesciunt, libero
        vitae adipisci.
      </h2>
      <p>{selectedProduct.detail}</p>
    </main>
  );
};


