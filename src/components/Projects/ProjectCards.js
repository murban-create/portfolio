import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectCards(props) {
  const [modalShow, setModalShow] = useState(false);

  // Determine if the media is a video based on file extension or a prop
  const isVideo = props.imgPath.endsWith(".mp4"); // You can adjust the condition based on your needs

  // Modal component to display the video in a larger view
  function MyModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <video width="100%" controls src={props.videoSrc} />
        </Modal.Body>
      </Modal>
    );
  }

  // Function to create HTML content safely
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <Card className="project-card-view">
      {/* Conditional rendering of image or video */}
      {isVideo ? (
        <video
          style={{ width: "100%", cursor: "pointer" }}
          src={props.imgPath}
          alt="card-video"
          muted
          autoPlay
          loop
          onClick={() => setModalShow(true)}
        />
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} dangerouslySetInnerHTML={createMarkup(props.description)} />
        {props.buttons?.map((button, index) => (
          <Button key={index} variant="primary" href={button.link} target="_blank" style={{ marginLeft: index > 0 ? "10px" : "0" }}>
            {button.text}
          </Button>
        ))}
      </Card.Body>

      {/* Modal for video enlargement */}
      <MyModal show={modalShow} onHide={() => setModalShow(false)} videoSrc={props.imgPath} />
    </Card>
  );
}

export default ProjectCards;
