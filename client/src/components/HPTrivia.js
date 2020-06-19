import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";

function TriviaGame() {
    return (
        <Container>
            <Row>
                <Col><h1>Trivia Game</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Image src={require("../assets/images/triviagame.gif")} fluid />
                </Col>
                <Col className="my-auto">
                    <Row>
                        <Col>
                            <p>A 10 question, timed Harry Potter trivia game. Players have 30 seconds to chose an answer and following questions are displayed without user input. If the player chooses to replay the game, only the questions are reloaded and not the whole page.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: HTML5, CSS3, Twitter Bootstrap, ES5, jQuery, Google Fonts</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://rchlblns.github.io/TriviaGame/" className="pr-2">
                                <LiveButton />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rchlblns/TriviaGame">
                                <GithubButton />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default TriviaGame;