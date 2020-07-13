import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";

function SocialAnimals() {
    return (
        <Container>
            <Row>
                <Col><h1>Social Animals</h1></Col>
                <Col xs={12}><div class="divider"><span></span></div></Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Image  className="project-pic" src={require("../assets/images/socialanimals.gif")} fluid />
                </Col>
                <Col className="my-auto" xl={6}>
                    <Row>
                        <Col>
                            <p>Social Animals is a part social networking/part search service application for animal lovers. It aims to reduce the amount of animals that are abandoned or surrendered by providing a support network of animal related information and resources.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: Create React App, Material Design for Bootstrap, MongoDB, Mongoose.js, Passport.js, Axios, Express.js, BCrypt, Node.js</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://project-3-aristocats.herokuapp.com/" className="pr-2">
                                <LiveButton />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jmichael96/Social-Animals">
                                <GithubButton />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SocialAnimals;