import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Resume from "../assets/images/UpdatedResume.pdf";


function About() {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="my-4">ABOUT ME</h1>
                    <p>
                        Blue mountain carajillo saucer caffeine ristretto turkish brewed roast. Flavour caramelization, roast, extraction espresso aroma beans caramelization dark. Robusta, cortado, as sweet, trifecta, con panna irish doppio galão whipped. Blue mountain lungo ut, con panna id, ristretto saucer qui beans carajillo.
                    </p>

                    <p>
                        Barista whipped sweet milk, id, half and half cup java brewed trifecta. Rich, filter milk wings breve doppio caramelization seasonal breve. Organic, filter, half and half, rich, affogato, beans cinnamon turkish grounds dripper foam. Est, cappuccino, trifecta affogato, ristretto, americano a fair trade java ristretto medium.
                    </p>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    
                    <a target="_blank" rel="noopener noreferrer" href={Resume} className="pr-4">
                        <Button variant="secondary">VIEW MY RESUME</Button>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rchlblns" className="pr-4">
                        <Button variant="secondary">VISIT MY GITHUB <IoLogoGithub /></Button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/richellebillones/">
                        <Button variant="secondary">VISIT MY LINKEDIN <IoLogoLinkedin /></Button>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default About;