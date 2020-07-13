import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>SAY HELLO</h1>
                    <div class="divider"><span></span></div>
                </Col>
            </Row>
            <Row className="pt-2">
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;