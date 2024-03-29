import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import resumePdf from "../../Assets/pdf/Shahzaib Hassan - CV.pdf";

function ResumeNew() {
  const [thisYear, setThisYear] = useState(2022);
  useEffect(() => {
    setThisYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Col xs={12} md={12} className="text-center">
            <div className="resume-title">DIGITAL RESUME</div>
            <div className="resume-desc">
              {thisYear - 2021}
              <span style={{ verticalAlign: "super" }}>+</span> years experience
            </div>
            <div className="resume-exptime">2021 - {thisYear}</div>
            <Button
              className="resume-btn text-white rounded-pill pl-5 pr-5"
              variant="primary"
              href={resumePdf}
              target="_blank"
            >
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
