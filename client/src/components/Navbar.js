import React from "react";
import Image from "react-bootstrap/Image";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../assets/styles/Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (

      <Nav className="bg-light text-center flex-column" id="sidebar"
        activeKey="/home">
        <div className="sidebar-sticky"></div>
        
        <Image src={require("../assets/images/photo.jpg")} className="d-block mx-auto img-fluid" id="myPic" width={180} roundedCircle />
        
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>ABOUT</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/skills">
            <Nav.Link>SKILLS</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/projects">
            <Nav.Link>PROJECTS</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link>CONTACT</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    );
  }
}



