import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
       <Row className="justify-content-center">
    <Col md="4" className="footer-copywright">
      <h3>Copyright © {year} Mona Urban</h3>
    </Col>
  </Row>
    </Container>
  );
}

export default Footer;
