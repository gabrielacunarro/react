import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { ProductDetail } from "./views/productDetail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = "/" element= {<ItemListContainer/>}></Route>
        <Route path = "products/:id" element= {<ProductDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
