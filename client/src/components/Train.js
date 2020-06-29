import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";

function TrainScheduler() {
    return (
        <Container>
            <Row>
                <Col><h1>Train Scheduler</h1></Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Image className="project-pic" src={require("../assets/images/trainscheduler.gif")} fluid />
                </Col>
                <Col className="my-auto" xl={6}>
                    <Row>
                        <Col>
                            <p>Train Scheduler provides up to date arrival and departure information for various trains. Users can add trains to the list by filling out the form underneath the table. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: HTML5, CSS3, Twitter Boostrap, ES5, jQuery, Google Fonts, Firebase, Moment,js</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://rchlblns.github.io/Train-Scheduler/" className="pr-2">
                                <LiveButton />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://rchlblns.github.io/Train-Scheduler/">
                                <GithubButton />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default TrainScheduler;