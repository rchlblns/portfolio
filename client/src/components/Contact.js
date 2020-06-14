import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="my-4">Say Hey
                        <br></br>
                        <small>Connect with me here</small>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        {/* <ListGroup.Item>
                                <IoIosMail size={35} /> 
                                rbillones921@gmail.com
                            </ListGroup.Item> */}
                        <ListGroup.Item>
                            <IoLogoGithub size={35} />
                                github.com/rchlblns
                            </ListGroup.Item>
                        <ListGroup.Item>
                            <IoLogoLinkedin size={35} />
                                in/richellebillones
                            </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <h5>Contact Form</h5>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;