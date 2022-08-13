import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { programmerIntro } from "../../components/Assets";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function IntroMobile() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description pt-5">
            <h1 style={{ fontSize: "2.5em" }}>
              <b>
                Let <span className="purple"> me </span> Introduce
              </b>
            </h1>
            <p className="home-about-body">
              I'm a software developer with a passion for programming. I like to
              analyze and solve problems efficiently and always work effectively
              with my team.
              <br />
              <br />I love <b>bugs</b> because it gives me a new experience
              every time.
              <span className="purple">
                &nbsp;App Attribution &amp; Analytics, Internet of things,
                e-commerce and Social Community
              </span>{" "}
              are my field of Interest's.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with Modern Programming Library and Frameworks like&nbsp;
              <i className="purple">
                React JS, Next JS, CodeIgniter and Tailwind CSS
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={programmerIntro} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Get In Touch</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shahzaib1010hassan"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/siyalhassan98"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="https://www.linkedin.com/in/shahzaib-hassan-929207180"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                 href="https://www.facebook.com/people/Shahzaib-Hassan/100011656321744/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
