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
                        <h1>SKILLS AND TOOLS</h1>
                        <div class="divider"><span></span></div>
                    </Col>
                </Row>
                <Row className="pt-2">
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiHtml5 size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">HTML</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiCss3 size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">CSS</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiJavascript1 size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Javascript</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiJqueryLogo size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">jQuery</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiNodejsSmall size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Node.js</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiMysql size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">MySQL</p>
                    </Col>
                    <div class="w-100 d-none d-xl-block"></div>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiBootstrap size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Bootstrap</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiMaterializecss size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Materialize</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiPhotoshop size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Photoshop</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiIllustrator size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Illustrator</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiGit size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">Git</p>
                    </Col>
                    <Col xs="auto">
                        <IconContext.Provider value={{ className: "react-icons" }}>
                            <DiReact size={"6.0em"} />
                        </IconContext.Provider>
                        <p className="text-center">React.js</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}