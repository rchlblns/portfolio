import React from "react";
import Image from "react-bootstrap/Image";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import "../assets/styles/Navbar.css";

export default class SideNavbar extends React.Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" id="sidebar">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column text-center">
            <Image src={require("../assets/images/photo.jpg")} className="img-fluid" id="myPic" width={180} roundedCircle />
            <IndexLinkContainer to="/">
              <Nav.Link>ABOUT</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/skills">
              <Nav.Link>SKILLS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>PROJECT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>CONTACT</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



