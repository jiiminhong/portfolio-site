import React from "react";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Brand href="/">HongJimin portfolio-site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/tech">기술스택</Nav.Link>
              <Nav.Link href="/project">프로젝트</Nav.Link>
              <Nav.Link href="/edu">교육 및 자격증</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
