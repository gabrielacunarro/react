import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { getFirestore, getDocs, collection } from "firebase/firestore";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const db = getFirestore();
      const categoryCollection = collection(db, "categories");
      const snapshot = await getDocs(categoryCollection);
      const categoryList = snapshot.docs.map(doc => doc.data());
      setCategories(categoryList);
    };

    fetchCategories();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Essence Selecto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {categories.map(category => (
              <Nav.Link key={category.key} as={Link} to={`/category/${category.key}`}>
                {category.description}
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
