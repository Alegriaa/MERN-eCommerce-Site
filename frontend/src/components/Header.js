import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

// testing

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Desenme</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/cart">
                {" "}
                <MdAddShoppingCart />
              </Nav.Link>
              {/* <div className="py-1 pl-1">
                <IoPersonSharp/>
                 </div> */}

              <Nav.Link href="/login" className="px-1">
                {" "}
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
