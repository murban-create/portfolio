import React, { useState, useMemo } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player/lazy";

function ProjectCards({
  imgPath,        // Bild ODER lokale MP4 (bestehend)
  videoUrl,       // NEU: YouTube/Vimeo/Remote-MP4
  title,
  description,
  buttons = []
}) {
  const [modalShow, setModalShow] = useState(false);

  const isLocalMp4 =
    typeof imgPath === "string" && imgPath.toLowerCase().endsWith(".mp4");

  const hasVideo = !!videoUrl || isLocalMp4;
  const smallPlayerUrl = videoUrl || imgPath;

  // Für YouTube: hübschere Defaults
  const ytVars = useMemo(
    () => ({
      modestbranding: 1,
      rel: 0,
      controls: 0,
      // autoplay/mute/playsinline werden durch Props unten erzwungen
      playsinline: 1
    }),
    []
  );

  function VideoModal({ show, onHide }) {
    return (
      <Modal show={show} onHide={onHide} size="lg" centered>
        <Modal.Body style={{ position: "relative", paddingTop: "56.25%" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <ReactPlayer
              url={smallPlayerUrl}
              width="100%"
              height="100%"
              controls          // im Modal: mit Controls
              playing           // spielt direkt los
              muted={false}     // mit Ton (User-Interaktion -> OK)
              loop
              config={{ youtube: { playerVars: ytVars } }}
            />
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  const createMarkup = (htmlContent) => ({ __html: htmlContent });

  return (
    <Card className="project-card-view">
      {/* Media: immer Video, wenn vorhanden – autoplay, muted, loop, ohne Poster */}
      {hasVideo ? (
        <div
          style={{ position: "relative", paddingTop: "56.25%", cursor: "pointer" }}
          onClick={() => setModalShow(true)}
          aria-label="Open video"
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <ReactPlayer
              url={smallPlayerUrl}
              width="100%"
              height="100%"
              playing        // Autoplay
              muted          // nötig für Autoplay in Browsern
              loop
              controls={false}
              playsinline
              // KEIN "light": dadurch kein Poster/Thumbnail, direkt Video
              config={{ youtube: { playerVars: ytVars } }}
            />
          </div>
        </div>
      ) : (
        <Card.Img variant="top" src={imgPath} alt="card-img" />
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

      {hasVideo && (
        <VideoModal show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </Card>
  );
}

export default ProjectCards;
