import React from "react";
import Image from "react-bootstrap/Image";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../assets/styles/Navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (

      <Nav className="col-md-12 d-none d-md-block bg-light sidebar text-center"
        activeKey="/home">
        <div className="sidebar-sticky"></div>
        
        <Image src="https://via.placeholder.com/150" id="myPic" roundedCircle />
        
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/skills">
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    );
  }
}



