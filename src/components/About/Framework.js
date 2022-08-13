import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJquery,
  SiWordpress,
  SiBootstrap,
  SiTailwindcss,
  SiWoocommerce,
  SiBlogger,
  SiNextdotjs,
} from "react-icons/si";
import { DiJqueryUiLogo, DiReact, DiCodeigniter } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
        <p className="techstackdesc">React</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiBootstrap />
        <p className="techstackdesc">BootStrap</p>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiTailwindcss />
        <p className="techstackdesc">Tailwindcss</p>
      </Col>
    </Row>
  );
}

export default Techstack;
