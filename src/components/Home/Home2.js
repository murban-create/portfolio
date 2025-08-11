import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/27-03.png";
import Tilt from "react-parallax-tilt";
import Toolstack from "../About/Toolstack";
import Techstack from "../About/Techstack";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

              My field of Interest's are &nbsp;
              <i>
                <b className="purple">Telling Stories through Data (Analysis & Visualization) </b> and
                also in areas related to{" "}  building new &nbsp;
                <b className="purple">
                  Web Technologies and Products.
                </b>
              </i>
              <br />
              <br />
              Here are some of my hobbies:
              <ul>
                <li><b className="purple">Crafting:</b> such as crocheting Amigurumi, soft soldering jewelry, millinery, and creating Tiffany stained glass art.</li>
                <li><b className="purple">Reading:</b> primarily in the Fantasy and Romantic Fantasy genres.</li>
                <li><b className="purple">Performing Arts:</b> I love visiting musicals and ballet performances.</li>
                <li><b className="purple">Cat Shenanigans:</b> My cat and I have mastered the art of leisurely strolls and professional cuddling. We also engage in high-stakes toy hunts around the house—it’s a purr-fect way to spend the day!</li>

              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Time</strong>line
        </h1>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2024"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Promotionsstudentin</h3>
            <h4 className="vertical-timeline-element-subtitle">HS Mittweida</h4>
            <p>
              Schwerpunkt: Data Science, KI, Visualisierung <br />

              Thema: „Mapping History: Leveraging AI and World Maps for Multidimensional Insights - Erforschung der Einsatzmöglichkeiten von Weltkarten und Künstlicher Intelligenz für die Visualisierung und Analyse historischer Phänomene”
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2024"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. in Medieninformatik & Interaktives Entertainment</h3>
            <h4 className="vertical-timeline-element-subtitle">HS Mittweida, Abschlussnote 1,1</h4>
            <p>
              Schwerpunkt: Data Science, KI, Visualisierung <br />

              Abschlussarbeit: Semi-automatisierte Erstellung und Validierung von historischen Ereignis-Datenbanken mithilfe von Prompt Engineering und interaktiver kartographischer Informationsdarstellung an ausgewählten Beispielen | Note: 1,0
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">HiWi und Praxismodul bei „BirdNET“</h3>
            <h4 className="vertical-timeline-element-subtitle">Professur Medieninformatik, TU Chemnitz</h4>
            <p>
              KI, Web Development, Data Science, UI/UX Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Wissenschaftliche Hilfskraft</h3>
            <h4 className="vertical-timeline-element-subtitle">Fakultät Medieninformatik, HS Mittweida</h4>
            <p>
              Web Development, Data Science, UI/UX Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Wissenschaftliche Hilfskraft</h3>
            <h4 className="vertical-timeline-element-subtitle">Hochschulkommunikation, HS Mittweida</h4>
            <p>
              Web Development, Backend App Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2022"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. in Medieninformatik & Interaktives Entertainment</h3>
            <h4 className="vertical-timeline-element-subtitle">HS Mittweida, ABschlussnote 1,2</h4>
            <p>
              Schwerpunkt: Game Development, Data Science, Web und Mobile Development <br />

              Abschlussarbeit: Kooperation mit TU Chemnitz und Cornell, USA Thema: Entwurf und Implementierung einer echtzeitgesteuerten Cluster-Visualisierung von BirdNET-Embeddings | Note: 1,0
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Orientierungsstudium MINT</h3>
            <h4 className="vertical-timeline-element-subtitle">TU Berlin</h4>
            <p>
              Entschluss gefasst, Informatik zu studieren.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Container>
    </Container>
  );
}
export default Home2;
