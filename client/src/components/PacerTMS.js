import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LiveButton from "./LiveButton";
import GithubButton from "./GithubButton";

function PacerTMS() {
    return (
        <Container>
            <Row>
                <Col><h1>Pacer TMS</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Image src={require("../assets/images/pacertms.gif")} fluid />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <p>Pacer Transportation Management System is an application that manages complex inventory systems. It's capabilities range from tracking simple prodcut movement to detailed inventory control, with unique identifiers for each product. This version of the application was created from the perspective of a pipe manufacturer, however the application can be customized to fit any type of TMS need.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Built with: HTML5, CSS3, ES6, Bootstrap, BCrypt, Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Passport.js</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://hidden-savannah-49813.herokuapp.com/" >
                                <LiveButton />
                            </a>
                        </Col>
                        <Col>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nyramirez/Project2" >
                                <GithubButton />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default PacerTMS;