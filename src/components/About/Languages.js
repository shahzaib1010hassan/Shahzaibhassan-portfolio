import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { DiJavascript, DiMysql, DiHtml5, DiCss3 } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript />
        <p className="techstackdesc">Javascript</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiTypescript />
        <p className="techstackdesc">Typescript</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiMysql />
        <p className="techstackdesc">MySQL</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiHtml5 />
        <p className="techstackdesc">HTML 5</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiCss3 />
        <p className="techstackdesc">CSS 3</p>
      </Col>
    </Row>
  );
}

export default Techstack;
