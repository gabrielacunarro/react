import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Essence Selecto
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/1">
              Perfumes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/2">
              Maquillajes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/3">
              Cremas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/4">
              Spray Corporales
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <CartWidget />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

