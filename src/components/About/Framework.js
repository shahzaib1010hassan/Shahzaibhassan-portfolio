import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiNodejs, DiJqueryLogo } from "react-icons/di";
import { SiBootstrap, SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
        <p className="techstackdesc">React</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
        <p className="techstackdesc">Node Js</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiBootstrap />
        <p className="techstackdesc">BootStrap</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiTailwindcss />
        <p className="techstackdesc">Tailwindcss</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <DiJqueryLogo />
        <p className="techstackdesc">Jquary</p>
      </Col>
    </Row>
  );
}

export default Techstack;
