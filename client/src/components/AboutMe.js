import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoIosPaper, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Resume from "../assets/images/UpdatedResume.pdf";


function About() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="">HI, I'M RICHELLE!</h1>
                    <div class="divider"><span></span></div>
                    <p className="pt-2">
                        I'm a web designer and developer based in Houston, TX 🤘
                    </p>

                    <p>
                        I enjoy taking complex problems and building simple, user-focused applications. When I'm not coding, you can find me baking, gaming, and chasing my pup.

                    </p>
                </Col>
            </Row>
            <Row className="pt-3" >
                <Col md="auto" className="pb-2">
                    <a target="_blank" rel="noopener noreferrer" href={Resume} className="pr-1">
                        <Button variant="secondary">VIEW MY RESUME <IoIosPaper /></Button>
                    </a>
                </Col>
                <Col md="auto" className="pb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/richellebillones/">
                        <Button variant="secondary">VISIT MY LINKEDIN <IoLogoLinkedin /></Button>
                    </a>
                </Col>

                <Col md="auto" className="pb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rchlblns" className="pr-1">
                        <Button variant="secondary">VISIT MY GITHUB <IoLogoGithub /></Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;