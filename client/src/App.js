import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Nav from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
// import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <Nav />
            </Col>
            <Col xs={10} id="page-content-wrapper">
              <Switch>
                <Route path="/" exact component={AboutMe} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/projects/:path" component={ProjectDetail} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}