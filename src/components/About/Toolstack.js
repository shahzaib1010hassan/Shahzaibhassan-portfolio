import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNetbeans } from "react-icons/di";
import { SiGithub, SiPostman, SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiVisualstudiocode />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <DiNetbeans />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiGithub />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
