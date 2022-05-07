import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/' >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto text-center">
            <Nav.Link>Inventory</Nav.Link>
            <Nav.Link >About Us</Nav.Link>
            <Nav.Link >Contact Us</Nav.Link>
            </Nav>
            <Nav>
              {
                user && <>
                <Nav.Link>Manage Items</Nav.Link>
            <Nav.Link>Add Items</Nav.Link>
            <Nav.Link>My Items</Nav.Link>
                </>
              }

              {
                user?
                <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Sign out</button>
                :
                <Nav.Link as={Link} to='/signin' >Sign In</Nav.Link>
                }
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
