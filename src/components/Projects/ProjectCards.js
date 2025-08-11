import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player"; // ohne /lazy

function ProjectCards({
  imgPath,        // Bild ODER lokale MP4 (endet auf .mp4)
  videoUrl,       // YouTube/Vimeo/Remote-URL (optional)
  title,
  description,
  buttons = []
}) {
  const [modalShow, setModalShow] = useState(false);

  const isString = (v) => typeof v === "string";
  const isLocalMp4 = isString(imgPath) && imgPath.toLowerCase().endsWith(".mp4");
  const isGif = isString(imgPath) && imgPath.toLowerCase().endsWith(".gif");
  const hasExternalVideo = !!videoUrl;
  const hasAnyVideo = hasExternalVideo || isLocalMp4;

  const createMarkup = (htmlContent) => ({ __html: htmlContent });

  function VideoModal({ show, onHide }) {
    return (
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Body style={{ position: "relative", paddingTop: "56.25%" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            {hasExternalVideo ? (
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
                playing
                muted={false}
                loop
                playsinline
              />
            ) : (
              <video
                src={imgPath}
                style={{ width: "100%", height: "100%" }}
                controls
                autoPlay
                loop
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  // Einfache 16:9-Box, damit nichts „unsichtbar“ wirkt
  const frameStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9", // moderner, simpler als paddingTop; fallback unten
    cursor: hasAnyVideo ? "pointer" : "default",
    background: "#000"
  };
  const fallbackFrameStyle = {
    position: "relative",
    width: "100%",
    paddingTop: "56.25%", // Fallback falls aspect-ratio nicht greift
    cursor: hasAnyVideo ? "pointer" : "default",
    background: "#000"
  };
  const innerAbs = { position: "absolute", inset: 0 };

  return (
    <Card className="project-card-view">
      {/* Media */}
      {hasExternalVideo ? (
        <div
          style={frameStyle}
          onClick={() => setModalShow(true)}
          role="button"
          aria-label="Open video"
        >
          <div style={innerAbs}>
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing       // autoplay
              muted         // für Autoplay nötig
              loop
              controls={false}
              playsinline
            />
          </div>
        </div>
      ) : isLocalMp4 ? (
        <div style={fallbackFrameStyle} onClick={() => setModalShow(true)} role="button">
          <video
            src={imgPath}
            style={{ ...innerAbs, width: "100%", height: "100%", objectFit: "cover" }}
            muted
            autoPlay
            loop
            playsInline
          />
        </div>
      ) : (
        // Bild/GIF – GIFs animieren automatisch im <img>
        <Card.Img
          variant="top"
          src={imgPath}
          alt="card-img"
          loading="eager"   // GIFs starten schneller
          style={isGif ? { imageRendering: "auto" } : undefined}
        />
      )}

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }} dangerouslySetInnerHTML={createMarkup(description)} />
        {buttons.map((b, i) => (
          <Button
            key={i}
            variant="primary"
            href={b.link}
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: i > 0 ? 10 : 0 }}
          >
            {b.text}
          </Button>
        ))}
      </Card.Body>

      {hasAnyVideo && <VideoModal show={modalShow} onHide={() => setModalShow(false)} />}
    </Card>
  );
}

export default ProjectCards;
