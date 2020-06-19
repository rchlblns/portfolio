import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { DiHtml5, DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMaterializecss} from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { DiGit } from "react-icons/di";
import "../assets/styles/Skills.css";


export default class Skills extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="my-4">SKILLS
                        {/* <small>Languages and Tools</small> */}
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <DiHtml5 size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiCss3 size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiJavascript1 size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiJqueryLogo size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiNodejsSmall size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiMysql size={100}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <DiBootstrap size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiMaterializecss size={100} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiPhotoshop size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiIllustrator size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiGit size={100}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <DiReact size={100}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        );
    }
}