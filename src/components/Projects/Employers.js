import React from "react";
import Row from "react-bootstrap/Row";
import {
  momagic,
  adGyde,
  mediatek,
  irctc,
  bailiwick,
  gonutrio,
  nmss,
  storecheq,
  switchedonkids,
  tripoffbeat,
} from "../Assets";
import EmployerItem from "./EmployerItem";

export default function Employers(props) {
  return (
    <>
      <h1 className="project-heading">
        Career <strong className="purple">Journey</strong>
      </h1>
      <h2
        className="mt-3 mb-4 h5"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        I'm proud to have collaborated with these awesome companies and worked
        on products
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}></Row>
    </>
  );
}
