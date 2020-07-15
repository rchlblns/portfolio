import React from "react";
import Image from "react-bootstrap/Image";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import "../assets/styles/Navbar.css";

export default class SideNavbar extends React.Component {
  render() {
    return (
      <Navbar variant="dark" id="sidebar">
          <Nav className="flex-column text-center my-auto mx-auto" id="nav-items">
            <Image src={require("../assets/images/photo.jpg")} className="img-fluid mx-auto mb-2 shadow" id="my-pic" width={"180em"} roundedCircle />
            <IndexLinkContainer to="/">
              <Nav.Link>ABOUT</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link>SKILLS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>WORK</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>CONTACT</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>
    );
  }
}



