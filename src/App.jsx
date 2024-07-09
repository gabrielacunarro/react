import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hi!" />
    </div>
  );
}
export default App;
