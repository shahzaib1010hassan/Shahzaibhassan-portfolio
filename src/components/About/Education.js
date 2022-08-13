import React from "react";
import { Col, Row } from "react-bootstrap";
import { mspup, ccs, uptu } from "./../Assets";

export default function Education() {
  const isMobile = window.innerWidth <= 500;
  return (
    <>
      <h1 className="project-heading">
        Education <strong className="purple">Qualification</strong>
      </h1>
      <Row
        className="mt-5"
        style={{ justifyContent: "center", paddingBottom: "50px" }}
      >
        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple" style={{ fontSize: "22px" }}>
                  Bachelor of Science in Software Engineering
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    COMSATs Univeristy Islamabad, Islamabad
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">
                  COMSATs Univeristy Islamabad
                </footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={uptu}
                className="img-thumbnail mb-3"
                alt="COMSATs Univeristy Islamabad"
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple" style={{ fontSize: "36px" }}>
                  Intermediate
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    Punjab Group of Collage, Multan
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">Multan Board</footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={ccs}
                className="img-thumbnail mb-3"
                alt="madhyamik shiksha parishad uttar pradesh"
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        >
          <div className="d-flex justify-content-end">
            <div>
              <blockquote className="blockquote">
                <h4 className="purple" style={{ fontSize: "36px" }}>
                  Matriculation
                </h4>
                {!isMobile ? (
                  <p className="text-right" style={{ fontSize: "12px" }}>
                    Nishat Boys High School, Multan
                  </p>
                ) : (
                  ""
                )}
                <footer className="blockquote-footer">Multan Board</footer>
              </blockquote>
            </div>
            <div className="ml-5">
              <img
                style={{ maxHeight: "150px", maxWidth: "100px" }}
                src={mspup}
                className="img-thumbnail mb-3"
                alt="madhyamik shiksha parishad uttar pradesh"
              />
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className={`${isMobile ? "tech-icons border-0 shadow-none" : ""}`}
        ></Col>
      </Row>
    </>
  );
}
