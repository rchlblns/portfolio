import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="my-4">SAY HEY
                        {/* <small>Connect with me here</small> */}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <h5>Send an email</h5> */}
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;