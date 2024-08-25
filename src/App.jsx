import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/Navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { ItemDetailContainer } from "./views/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from "./contexts/ItemsContext.jsx";
import { Thanks } from './views/Thanks';
import NotFound from "./views/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:key" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
