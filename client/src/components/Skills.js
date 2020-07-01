import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    DiHtml5,
    DiReact,
    DiCss3,
    DiJavascript1,
    DiJqueryLogo,
    DiNodejsSmall,
    DiMysql,
    DiMaterializecss,
    DiBootstrap,
    DiPhotoshop,
    DiIllustrator,
    DiGit
} from "react-icons/di";
import "../assets/styles/Skills.css";
import { IconContext } from "react-icons/lib";


export default class Skills extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="my-4">SKILLS
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiHtml5 size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>

                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>

                            <DiCss3 size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiJavascript1 size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiJqueryLogo size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiNodejsSmall size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiMysql size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiBootstrap size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiMaterializecss size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiPhotoshop size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiIllustrator size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiGit size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                    <Col xs="auto" id="skill-icon">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiReact size={"6.0em"} />
                        </IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        );
    }
}