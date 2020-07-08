import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Nav from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import "./App.css";

const App = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <Container fluid>
          <Row>
            <Col xs={3} s={2} md={1.5} lg={2} id="sidebar-wrapper">
              <div className="d-lg-none">
                <MobileNav />
              </div>
              <div className="d-none d-lg-block">
                <Nav />
              </div>
            </Col>
            <Col xs={9} s={10} md={10.5} lg={10} id="page-content-wrapper">
              <TransitionGroup
                // component={null}
              >
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames={"fade"}
                >
                  <Row className="d-flex vh-100">
                    <Col className="my-auto" id="content-div">
                      <Switch location={location}>
                        <Route path="/" exact component={AboutMe} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/projects/:path" component={ProjectDetail} />
                        <Route path="/contact" component={Contact} />
                      </Switch>
                    </Col>
                  </Row>
                </CSSTransition>
              </TransitionGroup>
            </Col>
          </Row>
        </Container>
      )} />
    </Router>
  );
}

export default App;