import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";

function AdventureTime() {
    return (
        <Container>
            <Row>
                <Col><h1>Adventure Time Clicky Game</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Image src={require("../assets/images/clickygame.gif")} fluid />
                </Col>
                <Col className="my-auto">
                    <Row>
                        <Col>
                            <p>A memory game where players gain points by NOT clicking on the same picture twice</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: Create React App, HTML5, CSS3, ES6, Bootstrap, Google Fonts</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://polar-journey-52548.herokuapp.com/" className="pr-2">
                                <LiveButton />
                            </a> 
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rchlblns/clicky-game">
                                <GithubButton />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default AdventureTime;