import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export default class Projects extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>MY WORK</h1>
                        <div class="divider"><span></span></div>
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col>
                        <CardColumns >
                            <Card border="light" className="shadow-sm project-card">
                                <LinkContainer to="/projects/lumikha">
                                    <Card.Img src={require("../assets/images/lumikha.jpg")} alt="Lumikha" className="project-pic"/>
                                </LinkContainer>
                            </Card>
                            <Card border="light" className="shadow-sm project-card mt-2">
                                <LinkContainer to="/projects/clicky-game">
                                    <Card.Img src={require("../assets/images/clicky_game.jpg")} alt="Clicky Game"className="project-pic"/>
                                </LinkContainer>
                            </Card>
                            <Card border="light" className="shadow-sm project-card">
                                <LinkContainer to="/projects/social-animals">
                                    <Card.Img src={require("../assets/images/social-animals.jpg")} alt="Social Animals"className="project-pic"/>
                                </LinkContainer>
                            </Card>
                            <Card border="light" className="shadow-sm project-card mt-2">
                                <LinkContainer to="/projects/train-scheduler">
                                    <Card.Img src={require("../assets/images/trainscheduler.jpg")} alt="Train Scheduler" className="project-pic" />
                                </LinkContainer>
                            </Card>
                            <Card border="light" className="shadow-sm project-card">
                                <LinkContainer to="/projects/pacer-tms">
                                    <Card.Img src={require("../assets/images/pacertms.jpg")} alt="Pacer TMS" className="project-pic" />
                                </LinkContainer>
                            </Card>
                            <Card border="light" className="shadow-sm project-card mt-2">
                                <LinkContainer to="/projects/trivia-game">
                                    <Card.Img src={require("../assets/images/hptriviagame.jpg")} alt="Harry Potter Trivia Game" className="project-pic" />
                                </LinkContainer>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        );
    }
}

