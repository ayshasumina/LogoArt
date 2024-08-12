import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer py-4 bg-dark text-white">
  <Container>
    <Row>
      <Col md={4}>
        <h5>Create Your Logo</h5>
        <ul className="footer-links">
          <li><a href="#design">Design a Logo</a></li>
          <li><a href="#templates">Logo Templates</a></li>
          <li><a href="#customize">Customize Your Logo</a></li>
        </ul>
      </Col>
      <Col md={4}>
        <h5>Support</h5>
        <ul className="footer-links">
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#help">Help Center</a></li>
        </ul>
      </Col>
      <Col md={4}>
        <h5>Tools</h5>
        <ul className="footer-links">
          <li><a href="#logo-generator">Logo Generator</a></li>
          <li><a href="#brand-kit">Brand Kit</a></li>
          <li><a href="#social-media">Social Media Tools</a></li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
        <p>&copy; {new Date().getFullYear()} Logo Art. All Rights Reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>

  );
};

export default Footer;
