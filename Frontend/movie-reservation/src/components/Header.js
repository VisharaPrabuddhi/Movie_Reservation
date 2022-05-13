import React from "react";
import "../asset/css/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../asset/img/icon.png';
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

function Header(prop) {
  let navigate = useNavigate(); 
  const routeChange = (props) =>{ 
    console.log(props);
    navigate(props);
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" style={{ padding:'10px' }}>
      <Container fluid>
        <Navbar.Brand>
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand style={{ fontWeight:"bold", fontSize:'2rem', color:"#8eaccb	" }}>{prop.tab}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => routeChange('/')} >Home</Nav.Link>
            <Nav.Link href="#movie-list">Trending Movies</Nav.Link>
            <Nav.Link >Halls</Nav.Link>
            {/* disabled */}
            <Nav.Link  onClick={() => routeChange('cart')}> 
              My Cart
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
          <Button variant="danger" style={{ marginLeft:'2rem'}}  onClick={() => routeChange('login')}>Login/Signup</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
