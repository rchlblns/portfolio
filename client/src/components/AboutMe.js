import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="my-4">About Me</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}