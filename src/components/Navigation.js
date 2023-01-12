import { Component } from "react";

import classes from "./Navigation.module.css";

import { Navbar, Nav, Form, Container } from "react-bootstrap";
import logo from "../img/logo.png";
import cart from "../img/cart-icon.png";
import search from "../img/search-icon.png";

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container className={classes["nav-container"]}>
          <Navbar.Brand href="/">
            <img src={logo} alt="grover logo" />
          </Navbar.Brand>
          <Navbar.Collapse className={classes.navbar} id="navbarScroll">
            <Nav className="my-2 my-lg-0" id="nav-links">
              <Nav.Link className={classes.active} href="/">
                Home
              </Nav.Link>
              <Nav.Link className={classes.link} href="/">
                Menu
              </Nav.Link>
              <Nav.Link className={classes.link} href="/">
                Service
              </Nav.Link>
              <Nav.Link className={classes.link} href="/">
                Shop
              </Nav.Link>
            </Nav>
            <Form className="form-relative d-flex border border-0 bg-white rounded p-2 pt-1 pb-1 shadow z-index-1">
              <img src={search} alt="search icon" />
              <Form.Control
                type="search"
                placeholder="Search"
                className="border border-0"
                aria-label="Search"
              />
              <div className={classes.box}>
                <img src={cart} alt="cart icon" />
              </div>
              <p className="element-absolute">2</p>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
