import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../Images/Logo/logo-98x88.png";
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="w-50" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-center">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link href="home#inventories">Inventory</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <>
                <Nav.Link as={Link} to="/manageitems">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="/additems/:inventoryId">
                  Add Items
                </Nav.Link>
                <Nav.Link as={Link} to="/myitems">
                  My Items
                </Nav.Link>
              </>
            )}

            {user ? (
              <button
                className="btn btn-link text-white text-decoration-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
