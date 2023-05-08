import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  return (


      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={ Link } to="/login">Login</Nav.Link>
            <Nav.Link as={ Link }to="/favorites">Favorites</Nav.Link>
            <Nav.Link as={ Link } to="/search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  )
};

export default Menu;



/*
<nav>
<ul>
    <li>
    <Link to="/login">Login</Link>
    </li>
    <li>
    <Link to="/favorites">Favorites</Link>
    </li>
    <li>
    <Link to="/search">Search</Link>
    </li>
</ul>
</nav>
*/