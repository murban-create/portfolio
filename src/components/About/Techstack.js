import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiDart,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiMysql,
  DiBootstrap,

} from "react-icons/di";
import {
  SiPostgresql,
  SiFlask,
  SiFlutter,
  SiThreedotjs,
  SiD3Dotjs,
  SiLeaflet,
  SiMapbox,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiTerraform,
  SiXcode,
  SiLatex
} from "react-icons/si";

function SkillBar({ level }) {
  const skills = Array.from({ length: 5 }, (_, i) => i < level);
  return (
    <div className="d-flex justify-content-center gap-2">
      {skills.map((filled, index) => (
        <div
          key={index}
          style={{
            width: 10,
            height: 10,
            backgroundColor: filled ? '#c770f0' : '#ddd', // Adjusted to the purple shade used previously
          }}
        />
      ))}
    </div>
  );
}

function getSkillLabel(level) {
  switch (level) {
    case 1: return "Beginner";
    case 2: return "Average";
    case 3: return "Specialist";
    case 4: return "Skilled";
    case 5: return "Expert";
    default: return "Unrated"; // Handle unexpected cases
  }
}

function TechItem({ tech }) {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <Col xs={4} md={2} className="tech-icons text-center"
         onMouseEnter={() => setShowSkill(true)}>
      <div style={{ fontSize: '1.1rem', marginBottom: 0 }}>{tech.name}</div>
      {React.cloneElement(tech.icon, { size: '40px' })}
      {showSkill && <SkillBar level={tech.level} />}
      {showSkill && (
        <div style={{ fontSize: '0.6rem', marginTop: 5, opacity: 0.5 }}>
          Skill Level: {getSkillLabel(tech.level)}
        </div>
      )}
    </Col>
  );
}

function Techstack() {
  const technologies = [
    { icon: <CgCPlusPlus />, name: "C++", level: 3 },
    { icon: <DiJavascript1 />, name: "JavaScript", level: 4 },
    { icon: <DiNodejs />, name: "Node.js", level: 3 },
    { icon: <DiReact />, name: "React", level: 3 },
    { icon: <DiMongodb />, name: "MongoDB", level: 2 },
    { icon: <SiPostgresql />, name: "PostgreSQL", level: 3 },
    { icon: <DiPython />, name: "Python", level: 5 },
    { icon: <DiJava />, name: "Java", level: 2 },
    { icon: <DiMysql />, name: "MySQL", level: 3 },
    { icon: <DiHtml5 />, name: "HTML", level: 4 },
    { icon: <DiCss3 />, name: "CSS", level: 4 },
    { icon: <SiFlask />, name: "Flask", level: 3 },
    { icon: <SiFlutter />, name: "Flutter", level: 2 },
    { icon: <DiDart />, name: "Dart", level: 2 },
    { icon: <SiThreedotjs />, name: "Three.js", level: 4 },
    { icon: <SiD3Dotjs />, name: "D3.js", level: 4 },
    { icon: <DiBootstrap />, name: "Bootstrap", level: 4 },
    { icon: <SiLeaflet />, name: "Leaflet", level: 4 },
    { icon: <SiMapbox />, name: "Mapbox", level: 3 },
    { icon: <SiTensorflow />, name: "Tensorflow", level: 1 },
    { icon: <SiNumpy />, name: "NumPy", level: 4 },
    { icon: <SiPandas />, name: "Pandas", level: 4 },
    { icon: <SiTerraform />, name: "Terraform", level: 1 },
    { icon: <SiXcode />, name: "Xcode", level: 2 },
    { icon: <SiLatex />, name: "LaTeX", level: 3 },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <TechItem key={index} tech={tech} />
      ))}
    </Row>
  );
}

export default Techstack;
