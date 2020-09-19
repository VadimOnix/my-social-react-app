import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Developers</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to={'/'} activeClassName={""}>Главная</NavLink>
          </Nav.Link>
          <Nav.Link >
            <NavLink to={'/galery'}>Галерея</NavLink>
          </Nav.Link>
          <Nav.Link >
            <NavLink to={'/about'}>О нас</NavLink>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
        <Form style={{marginLeft:"8px"}}>
          <NavLink to={"/login"}>
            <Button variant="outline-light">Войти</Button>
          </NavLink>
        </Form>
      </Container>
    </Navbar>
  );
}
