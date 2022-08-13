import React from "react";
import Container from "react-bootstrap/Container";
import ProjectSummery from "./ProjectSummery";
import Employers from "./Employers";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <ProjectSummery />
        <Employers />
      </Container>
    </Container>
  );
}

export default Projects;
