import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { ItemDetailContainer } from "./views/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
