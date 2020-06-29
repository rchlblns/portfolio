import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";

function Lumikha() {
    return (
        <Container>
            <Row>
                <Col><h1>Lumikha Arts Showcase</h1></Col>
            </Row>
            <Row>
                <Col className="my-auto" xl={6}>
                    <Image className="project-pic" src={require("../assets/images/lumikha.gif")} fluid />
                </Col>
                <Col className="my-auto" xl={6}>
                    <Row>
                        <Col>
                            <p>This application was built to showcase information about Unipro Texas' 2nd annual Lumikhâ Arts Showcase. I was commissioned to build a digital pamphlet to aid Unipro in their efforts to decrease paper waste and lessen the environmental impact of the event. Event attendees were able to utilize QR codes throughout the venue to access information about the event, including artists, performers, and the schedule.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: HTML5, CSS3, ES6, Materialize CSS</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.lumikhaartsshowcase.com/" className="pr-2">
                                <LiveButton />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/rchlblns/lumikha-info">
                                <GithubButton />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Lumikha;
