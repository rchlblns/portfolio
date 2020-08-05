import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoIosPaper, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Resume from "../assets/images/Resume.pdf";


function About() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="">HI! I'M RICHELLE</h1>
                    <div class="divider"><span></span></div>
                    <p className="pt-2">
                        I'm a web designer and developer based in Houston, TX <span role="img" aria-label="rock">🤘</span>
                    </p>

                    <p>
                        I enjoy taking complex problems and building simple, user-focused solutions. When I'm not coding, you can find me baking, gaming, and chasing my pup.

                    </p>
                </Col>
            </Row>
            <Row className="pt-3" >
                <Col md="auto" className="pb-2">
                    <a target="_blank" rel="noopener noreferrer" href={Resume}>
                        <Button variant="secondary" className="mr-2" id="resume-btn"><IoIosPaper size={"md"}/></Button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/richellebillones/">
                        <Button variant="secondary" className="mr-2" id="linkedin-btn"><IoLogoLinkedin size={"md"}/></Button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rchlblns">
                        <Button variant="secondary" id="github-btn"><IoLogoGithub size={"md"}/></Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;