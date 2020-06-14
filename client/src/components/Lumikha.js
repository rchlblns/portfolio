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
                <Col>
                    <Image src={require("../assets/images/lumikha.gif")} fluid />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <p>This application showcases information about Unipro Texas' 2nd annual Lumikhâ Arts Showcase. I was commissioned to build a digital pamphlet to aid Unipro in their efforts to avoid paper waste and lessen the environmental impact of their event. Included in the application is the schedule, mission statement of the event, sponsor information, a map of the venue, and individual pages linking to more information for each performer and artist. Guests of the event were able to access different information by scanning various QR codes at the venue.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: HTML5, CSS3, ES6, Materialize CSS</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.lumikhaartsshowcase.com/">
                                <LiveButton />
                            </a>
                        </Col>
                        <Col>
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
