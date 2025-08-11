import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiUnity,
  SiUnrealengine,
  SiNotion,
  SiTrello,
  SiLinux,
  SiWindows,
  SiIos,
  SiAdobe,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiTableau,
  SiFigma,
  SiJupyter,
  SiOverleaf,
  SiQgis,
  SiArcgis,
} from "react-icons/si";
import { TfiMicrosoftAlt } from "react-icons/tfi";

function SkillBar({ level }) {
  const skills = Array.from({ length: 5 }, (_, i) => i < level);
  return (
    <div className="d-flex justify-content-center gap-2">
      {skills.map((filled, index) => (
        <div
          key={index}
          style={{
            width: 10, // Fixed width
            height: 10, // Fixed height
            backgroundColor: filled ? '#c770f0' : '#ddd', // Adjusted purple and grey colors
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

function ToolItem({ tool }) {
  const [showSkill, setShowSkill] = useState(false);

  return (
    <Col xs={4} md={2} className="tech-icons text-center"
         onMouseEnter={() => setShowSkill(true)}>
      <div style={{ fontSize: '1.1rem', marginBottom: 0, paddingBottom: 0 }}>{tool.name}</div>
      {React.cloneElement(tool.icon, { size: '40px'})}
      {showSkill && <SkillBar level={tool.level} />}
      {showSkill && (
        <div style={{ fontSize: '0.6rem', marginTop: 5, opacity: 0.5 }}>
          Skill Level: {getSkillLabel(tool.level)}
        </div>
      )}
    </Col>
  );
}

function Toolstack() {
  const tools = [
    { icon: <SiUnity />, name: "Unity", level: 4 },
    { icon: <SiVisualstudiocode />, name: "VS Code", level: 5 },
    { icon: <SiPostman />, name: "Postman", level: 2 },
    { icon: <SiSlack />, name: "Slack", level: 1 },
    { icon: <SiNotion />, name: "Notion", level: 3 },
    { icon: <SiTrello />, name: "Trello", level: 2 },
    { icon: <SiMacos />, name: "macOS", level: 1 },
    { icon: <SiUnrealengine />, name: "Unreal Engine", level: 2 },
    { icon: <SiLinux />, name: "Linux", level: 2 },
    { icon: <SiWindows />, name: "Windows", level: 5 },
    { icon: <SiIos />, name: "iOS", level: 4 },
    { icon: <SiAdobe />, name: "Adobe Suite", level: 3 },
    { icon: <SiAmazonaws />, name: "AWS", level: 1 },
    { icon: <SiDocker />, name: "Docker", level: 2 },
    { icon: <SiGit />, name: "Git", level: 4 },
    { icon: <SiTableau />, name: "Tableau", level: 2 },
    { icon: <SiFigma />, name: "Figma", level: 3 },
    { icon: <SiJupyter />, name: "Jupyter", level: 5 },
    { icon: <SiOverleaf />, name: "Overleaf", level: 4 },
    { icon: <SiQgis />, name: "QGIS", level: 1 },
    { icon: <SiArcgis />, name: "ArcGIS", level: 1 },
    { icon: <TfiMicrosoftAlt />, name: "Microsoft Office", level: 5 },

  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <ToolItem key={index} tool={tool} />
      ))}
    </Row>
  );
}

export default Toolstack;
