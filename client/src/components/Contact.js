import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="my-4">SAY HEY</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;