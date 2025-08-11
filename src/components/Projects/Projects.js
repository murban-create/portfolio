import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import suicide from "../../Assets/Projects/cluster.png";
import mihubx from "../../Assets/Projects/Mihubx.jpg";
import epochen from "../../Assets/Projects/epochen.gif";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Art Epoch Modeling PhD Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={epochen}
              isBlog={false}
              title="Current PhD Work – Modeling Art Epochs"
              description={`
                <p>During my PhD, I am developing models to visualize the spatiotemporal spread of art epochs across visual arts, architecture, music, and literature. I curated and harmonized large-scale metadata from multiple sources, enriched missing fields, and applied geospatial analysis to create dynamic epoch maps.</p>

                <h5>Responsibilities:</h5>
                <ul>
                  <li><strong>Data Sourcing &amp; Integration</strong>: Collected heterogeneous metadata from repositories covering artworks, buildings, musical compositions, and literary works (like Wikidata, WikiArt, IMSLP, Open Opus, Archinform, Structurae, as well as collections of major art museums (e.g. the Metropolitan Museum of Art, Tate, MoMA)); gathered creator metadata on artists, architects, musicians, and writers.</li>
                  <li><strong>Data Enrichment</strong>: Filled gaps in location, creation date, and epoch fields through web scraping and Wikidata SPARQL queries.</li>
                  <li><strong>Geolocation</strong>: Geocoded each item by adding latitude/longitude coordinates, resulting in datasets of ~80,000–1,000,000 records per category.</li>
                  <li><strong>Mathematical Modeling</strong>: Developed algorithms to model the annual spatial diffusion, generating vector shapes for each epoch.</li>
                  <li><strong>GeoJSON Export</strong>: Converted modeled shapes into GeoJSON for integration into interactive visualizations.</li>
                </ul>

                <h5>Achievements:</h5>
                <p>Built comprehensive, geolocated databases for four cultural domains and implemented a novel framework to model and visualize art epoch diffusion over time, enabling advanced spatiotemporal analysis and mapping.</p>

                <h5>Technologies Used:</h5>
                <ul>
                  <li>Python (Pandas, GeoPandas, Shapely)</li>
                  <li>SPARQL / Wikidata</li>
                  <li>Requests, BeautifulSoup</li>
                  <li>PostGIS</li>
                  <li>GeoJSON</li>
                  <li>QGIS</li>
                  <li>JavaScript (Leaflet, D3.js)</li>
                </ul>
              `}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl="https://youtu.be/x7RQFetVSw8"
              isBlog={false}
              title="Master Thesis"
              description="<p>This project aimed to semi-automatically create and validate historical event databases using prompt engineering techniques and interactive cartographic information displays, focusing on the conquest of Mexico by Hernan Cortes. The objective was to extract data about 100 significant events related to this historical period using chatbots and compare the outputs from different AI models.</p>

    <h5>Research Questions:</h5>
    <ul>
        <li>Data Extraction: Used prompt engineering with chatbots including ChatGPT, Gemini, and Perplexity.ai to extract and compile historical data.</li>
        <li>Topic Modeling: Applied Bertopic and Scipy embedding vectors to condense event data into thematic groups for better analysis and presentation.</li>
        <li>Interactive Visualization: Created a 3D prototype that allowed users to explore historical events through a dynamic time slider, enhancing the educational experience.</li>
        <li>Evaluation Design: Developed and conducted an evaluation design to compare the engagement and motivation effects of three different media in self-study environments.</li>
    </ul>

    <h5>Achievements:</h5>
    <p>Successfully developed a sophisticated tool that enhances the learning and understanding of historical events through interactive visualizations. The project not only demonstrated the potential of AI in historical research but also improved user engagement and educational outcomes.</p>

    <h5>Technologies Used:</h5>
    <ul>
        <li>ChatGPT, Gemini, Perplexity.ai for chatbot interactions</li>
        <li>Python, BERTopic, Scipy for data analysis</li>
        <li>Unity, C# for 3D modeling and visualization.</li>
    </ul>"
    buttons={[
      { text: "View Thesis", link: "https://drive.google.com/drive/folders/1Rj9NZzPF7HyhxDU1cPrHGvjV4cWPRXfG?usp=sharing" }
    ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mihubx}
              isBlog={false}
              title="MiHUBx: ein digitales Ökosystem für Forschung, Diagnostik und Therapie“ | Usecase 1"
              description="<p>MiHUBx is a joint project funded by the BMBF, involving the Technical University of Dresden, the Technical University of Chemnitz, the Municipal Hospital of Chemnitz, and Mittweida University of Applied Sciences as research partners. Within this consortium, the subproject of our Chair of Media Informatics addresses the use case of diabetic eye diseases.</p>

    <h5>My Role:</h5>
    <ul>
        <li>Data Research: Responsible for collecting and analyzing extensive datasets related to diabetology and ophthalmology.</li>
        <li>Data Synthesis: Integrated diverse data sources to create comprehensive data models that support advanced analytical processes.</li>
        <li>Data Visualization: Developed visualizations that effectively communicate complex data insights to non-technical stakeholders, including ophthalmologists and diabetologists.</li>
    </ul>

    <h5>Responsibilities:</h5>
    <ul>
        <li>Data Collection and Analysis: Gathered and analyzed data to understand patterns and trends that impact diabetic eye diseases.</li>
        <li>Model Development: Worked on developing AI-based models that can predict disease progression and treatment outcomes.</li>
        <li>Visualization and Reporting: Created interactive dashboards and reports that provide real-time insights into the patient population and disease progression.</li>
    </ul>
    <h5>Technologies Used:</h5>
    <ul>
        <li>Python</li>
        <li>TensorFlow, scikit-learn </li>
    </ul>"
              buttons={[
                { text: "Project Website", link: "https://www.gesundheitsforschung-bmbf.de/de/mihubx-ein-digitales-okosystem-fur-forschung-diagnostik-und-therapie-13054.php" }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl="https://youtu.be/bT1n7QWPJBk"
              isBlog={false}
              title="Website CSMRT HSMW"
              description="
    <p>In collaboration with two other research assistants, I took on the challenge of designing and developing a website for the Computer Science and Media in Research and Transfer program at Mittweida University. This project was executed using WordPress, leveraging its versatile platform to create a robust and informative site tailored to the needs of academic and research communities.</p>

    <h5>Responsibilities:</h5>
    <ul>
        <li><strong>Conceptualization</strong>: Worked closely with the project team to outline the primary goals and structure of the website, ensuring it met the specific requirements of the department.</li>
        <li><strong>Design</strong>: Utilized WordPress themes and custom CSS to design a visually appealing and user-friendly interface that aligns with the academic integrity and aesthetic of Mittweida University.</li>
        <li><strong>Development</strong>: Implemented and customized WordPress functionalities to enhance user experience and facilitate content management. This included setting up necessary plugins, creating custom post types, and ensuring responsive design across various devices.</li>
        <li><strong>Collaboration</strong>: Coordinated with other research assistants to divide tasks efficiently, ensuring a cohesive development process and timely completion of the project.</li>
    </ul>

    <h5>Achievements:</h5>
    <p>Successfully launched a fully functional and comprehensive website that serves as a vital resource for students, faculty, and external visitors interested in the research and transfer activities of the Computer Science and Media department. Developed a scalable website architecture that allows for easy updates and additions, accommodating the dynamic nature of academic research and collaborations.</p>

    <h5>Technologies Used:</h5>
    <ul>
        <li>WordPress</li>
        <li>Custom CSS</li>
        <li>Responsive Design Techniques</li>
        <li>Various WordPress Plugins</li>
    </ul>"
    buttons={[
      { text: "Go to Website", link: "https://https://csmrt.hs-mittweida.de/" }
    ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl="https://youtu.be/Djs9J_0DbuI"
              isBlog={false}
              title="StudiSQ App"
              description="<p>The universities in Saxony have joined forces to provide the ultimate learning experience. Here, you can find quizzes that have been created by your professors, lecturers, etc., which you can play alone or against your fellow students. The app offers various features to support your learning in a playful manner. These include:</p>
    <ul>
        <li>An intuitive search for all the quizzes created in the app</li>
        <li>A catalog of the quizzes you have completed along with detailed statistics</li>
        <li>Review modes and explanations for incorrectly answered questions</li>
        <li>A customizable profile with a personal avatar</li>
    </ul>
    
    
              <h5>Responsibilities:</h5>
    <ul>
        <li>Requirements analysis: Analyzing user needs and project requirements.</li>
        <li>Concept development: Designing the overall concept of the application.</li>
        <li>Execution and evaluation of user evaluations: Conducting and analyzing feedback from users to refine the application.</li>
        <li>UI/UX Design: Creating user interfaces and user experience designs to enhance engagement and usability.</li>
        <li>Gamification research and concept derivation: Researching gamification strategies and integrating them into the app design to enhance learning motivation.</li>
    </ul>

    <h5>Achievements:</h5>
    <p>As a result of these efforts, users experienced more enjoyment and increased motivation in their learning activities, leading to an enhanced educational experience.</p>

    <h5>Technologies Used:</h5>
    <ul>
        <li>Dart</li>
        <li>Flutter</li>
        <li>Figma</li>
    </ul>

    "
    buttons={[
      { text: "View in Play Store", link: "https://play.google.com/store/apps/details?id=de.hsmw.quizduell&hl=de" }
    ]}
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl="https://youtu.be/D2JnMDm2zcI"
              isBlog={false}
              title="Bachelor Thesis"
              description="<p>This project focuses on the semi-automated creation and validation of a real-time cluster visualization system for BirdNET embedding vectors. BirdNET is a research platform used to predict bird species from audio recordings through vocalizations. The aim was to enhance the interpretability of these complex data sets through innovative visualization techniques.</p>

              In the real‑time visualization (as seen in the livestream), each cluster shows how similar different audio recordings are—essentially, each cluster corresponds roughly to one bird species. The white sphere that moves through the plot represents the system’s classification of the most recent three‑second audio snippet: its position along one axis reflects which species it thinks it most likely is, and along the other axis how closely the snippet’s spectrogram (audio profile) matches the existing recordings. On the left, you can also pick any individual bird (species) you’re interested in to highlight just that cluster.
    <h5>Research Questions:</h5>
    <ul>
        <li>Data Analysis: Conducted extensive data analysis to understand the clustering and classification of bird species based on their vocalizations using UMAP.</li>
        <li>Real-Time Data Processing: Integrated live audio data streams with a maximum delay of 2 seconds into the visualization framework.</li>
        <li>Visualization Design and Implementation: Created a dynamic 3D and 2D visualization prototype with a time slider to explore the data across temporal dimensions.</li>
        <li>Evaluation Design: Conceived and executed an evaluation to assess the effectiveness of the visualization in enhancing user engagement and learning.</li>
    </ul>

    <h5>Achievements:</h5>
    <p>Successfully developed a visualization tool that not only aids in the academic exploration of bioacoustics data but also serves as a step towards explainable AI in the field of environmental science. The tool has been instrumental in providing clearer insights into the clustering and classification of bird species based on their vocalizations.</p>

    <h5>Technologies Used:</h5>
    <ul>
        <li>Python, numpy, pandas etc.</li>
        <li>UMAP</li>
        <li>Three.js</li>
        <li>Web Audio API</li>
        <li> Flask </li>
        <li> Django </li>
    </ul>"
    buttons={[
      { text: "View Thesis", link: "https://drive.google.com/drive/folders/1eziZBBlaqIfwCEwJGOUzGLvv7wWQWCfu?usp=sharing" }
    ]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Live Appe Usage Visualization for BirdNET"
              description="<p>Over the course of one year, I served as Lead Coder in a five-member team to develop a real-time app usage visualization for BirdNET. This system tracks and displays user interaction data from the BirdNET mobile application, enabling researchers to gain insights into usage patterns.</p>

<h5>Responsibilities:</h5>
<ul>
  <li><strong>System Architecture &amp; Tool Selection</strong>: Defined and managed the overall system design, selected technologies, and ensured integration across components.</li>
  <li><strong>Backend Development</strong>: Built the data storage layer using MongoDB and implemented RESTful APIs to ingest and serve usage data.</li>
  <li><strong>Geospatial Visualization Integration</strong>: Integrated Leaflet and Mapbox to plot user events on interactive maps for spatial analysis.</li>
  <li><strong>Visualization Conception &amp; UI/UX</strong>: Designed the dashboard interfaces and user experience for real-time data exploration.</li>
  <li><strong>AWS Migration Concept &amp; Hosting</strong>: Created the migration strategy to host both the website and core BirdNET backend on AWS, specifying required services and their interactions.</li>
  <li><strong>Infrastructure as Code</strong>: Developed Terraform scripts to provision AWS resources (EC2, ECS, Lambda, RDS, S3, VPC, etc.) and configure networking for seamless connectivity.</li>
  <li><strong>Auto‑Scaling Design</strong>: Implemented auto‑scaling policies to automatically adjust server capacity based on user traffic and system load.</li>
</ul>

<h5>Achievements:</h5>
<p>Through optimizations and advanced visualization techniques such as clustering—which I proposed and implemented—the new system is significantly more performant than the previous solution, enabling smooth interaction even with large datasets. Additionally, I led the successful migration to AWS using Terraform, resulting in a highly available, scalable infrastructure with automated provisioning and load handling.</p>

<h5>Technologies Used:</h5>
<ul>
  <li>MongoDB</li>
  <li>Leaflet</li>
  <li>Mapbox</li>
  <li>D3.js</li>
  <li>Angular</li>
  <li>Node.js</li>
  <li>Amazon Web Services (AWS)</li>
  <li>Docker</li>
  <li>Terraform</li>
</ul>
"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              videoUrl="https://www.youtube.com/watch?v=dXGORsLqPp4"
              isBlog={false}
              title="Ampguard"
              description="<p>Fifty students from the Media Informatics and Interactive Entertainment program at the University of Applied Sciences Mittweida developed their own game over the course of 11 months. The game, named Ampguard, is an action-packed rogue-like single player experience with an adaptable combat system and strategic gameplay elements.</p>

    <h5>My Role:</h5>
    <ul>
        <li>Part of the coding team: Involved in developing core gameplay mechanics and integrating various game functionalities.</li>
        <li>UI/UX Expert: Took a special role in implementing user interfaces and user experience strategies to ensure a seamless interaction for players.</li>
    </ul>

    <h5>Responsibilities:</h5>
    <ul>
        <li>Gameplay Programming: Contributed to the coding of gameplay mechanics and features, working within a team environment.</li>
        <li>UI/UX Design: Solely responsible for the  implementation of all user interface elements. This included conceptualizing the layout, enhancing user interactions, and iterating designs based on user feedback and usability testing.</li>
        <li>Problem Solving: Regularly engaged in troubleshooting and solving complex UI issues that impacted gameplay and user experience.</li>
    </ul>
    <h5>Technologies Used:</h5>
    <ul>
        <li>Unity</li>
        <li>C#</li>
        <li>Trello</li>
    </ul>"
    buttons={[
      { text: "View in Steam", link: "https://store.steampowered.com/app/1852660/Ampguard/" }
    ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Webshop HSMW"
              description=" <p>As part of a strategic initiative to enhance the services provided by the University Communications department at Hochschule Mittweida, I led the development of an online shop and a comprehensive rental tool. This platform was designed to facilitate the efficient management and booking of university resources by staff and students alike.</p>

    <h5>My Role:</h5>
    <ul>
        <li>Lead Developer and Designer: Spearheaded both the backend and frontend development, ensuring a seamless and user-friendly experience.</li>
        <li>Project Manager: Coordinated between various stakeholders, including university staff and other developers, to ensure all requirements were met and the project stayed on track.</li>
    </ul>

    <h5>Responsibilities:</h5>
    <ul>
        <li>System Architecture Design: Structured the overall framework for the online shop and rental tool, ensuring scalability and security.</li>
        <li>UI/UX Design: Developed intuitive interfaces that simplify the processes of purchasing and renting, enhancing user engagement and satisfaction.</li>
        <li>Backend Development: Implemented complex backend functionalities including inventory management, booking systems, and user authentication.</li>
        <li>Testing and Deployment: Led the testing phase to troubleshoot and fix issues before full-scale deployment.</li>
    </ul>

    <h5>Achievements:</h5>
    <p>Successfully launched a fully functional online shop and rental tool that improved the efficiency of resource management at the university. The platform has significantly reduced administrative overhead and improved the availability and accessibility of university resources for all users.</p>

    <h5>Technologies Used:</h5>
    <ul>
         <li>WordPress</li>
        <li>Custom CSS</li>
        <li>Responsive Design Techniques</li>
        <li>Various WordPress Plugins</li>
    </ul>"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
