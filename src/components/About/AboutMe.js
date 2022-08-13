import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { AboutMeCard } from "./../Assets";
export default function AboutMe() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote">
              <p style={{ textAlign: "justify" }}>
                Web is fun, I really enjoy creating things that live on the
                internet. My interest in web development started back in 2020
                when I decided to try make website. While making a website taught
                me a lot about HTML, CSS & Javascript !
              </p>
              <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
                “The only way to learn a new programming language is by writing
                programs in it.”
              </p>
              <footer className="blockquote-footer">Dennis Ritchie</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
      <Col
        md={5}
        style={{ paddingTop: "10px", paddingBottom: "50px" }}
        className="about-img"
      >
        <img src={AboutMeCard} alt="about" className="img-fluid" />
      </Col>
    </Row>
  );
}
