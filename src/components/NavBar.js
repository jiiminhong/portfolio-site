import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand
            href="/"
            className="hover:text-[#1A8754] transition duration-500 hover:duration-500"
          >
            HongJimin portfolio-site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/tech"
                className="hover:text-[#1A8754] transition duration-500 hover:duration-500"
              >
                기술스택
              </Nav.Link>
              <Nav.Link
                href="/project"
                className="hover:text-[#1A8754] transition duration-500 hover:duration-500"
              >
                프로젝트
              </Nav.Link>
              <Nav.Link
                href="/education"
                className="hover:text-[#1A8754] transition duration-500 hover:duration-500"
              >
                교육
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
