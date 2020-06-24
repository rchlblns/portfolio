import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
// import "../App.css";

export default class Projects extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="my-4">
                            PROJECTS
                            {/* <small>Click to see more information</small> */}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <CardColumns>
                            <Card>
                                <LinkContainer to="/projects/lumikha">
                                    <Card.Img src={require("../assets/images/lumikha.png")} />
                                </LinkContainer>
                            </Card>
                            <Card>
                                <LinkContainer to="/projects/clicky-game">
                                    <Card.Img src={require("../assets/images/clicky_game.png")} />
                                </LinkContainer>
                            </Card>
                            <Card>
                                <LinkContainer to="/projects/social-animals">
                                    <Card.Img src={require("../assets/images/social-animals.png")} />
                                </LinkContainer>
                            </Card>
                            <Card>
                                <LinkContainer to="/projects/train-scheduler">
                                    <Card.Img src={require("../assets/images/trainscheduler.png")} />
                                </LinkContainer>
                            </Card>
                            <Card>
                                <LinkContainer to="/projects/pacer-tms">
                                    <Card.Img src={require("../assets/images/pacertms.png")} />
                                </LinkContainer>
                            </Card>
                            <Card>
                                <LinkContainer to="/projects/trivia-game">
                                    <Card.Img src={require("../assets/images/hptriviagame.png")} />
                                </LinkContainer>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        );
    }
}

