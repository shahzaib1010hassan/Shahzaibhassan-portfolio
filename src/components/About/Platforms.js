import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiApache, SiPhpmyadmin, SiWindows, SiXampp } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiWindows />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiApache />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiXampp />
      </Col>

      <Col xs={4} md={3} className="tech-icons border-0 shadow-none m-0">
        <SiPhpmyadmin />
      </Col>
    </Row>
  );
}

export default Toolstack;
