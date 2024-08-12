import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutImage from '../assets/AboutImg.jpg'; // Adjust the path according to your file structure
import AboutImg from '../assets/aboutimage.png';
import Customers from './Customers';

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <div className="card">
              <img src={AboutImage} alt="About Us" className="img-fluid" />
            </div>
          </Col>
          <Col md={6}>
            <h3>Create a stunning brand efficiently and within budget</h3>
            <p>Launch your business with ease and affordability using a vast collection of ready-made design assets.</p>
            <div className="design-items">
              <div className="item">
                <i className="fas fa-file-alt"></i>
                <span>Logo design files</span>
              </div>
              <div className="item">
                <i className="fas fa-user-circle"></i>
                <span>Social profile icons</span>
              </div>
              <div className="item">
                <i className="fas fa-id-card"></i>
                <span>Business card designs</span>
              </div>
              <div className="item">
                <i className="fas fa-play-circle"></i>
                <span>Animated designs</span>
              </div>
              <div className="item">
                <i className="fas fa-file-alt"></i>
                <span>Letterhead templates</span>
              </div>
              <div className="item">
                <i className="fas fa-share-alt"></i>
                <span>Social media designs</span>
              </div>
              <div className="item">
                <i className="fas fa-file-powerpoint"></i>
                <span>Presentation templates</span>
              </div>
              <div className="item">
                <i className="fas fa-book"></i>
                <span>Brand guide</span>
              </div>
            </div>
            <Button id="about-btn">Learn More</Button>
          </Col>
        </Row>

        <Container className="mt-5">
          <Row>
            <Col md={{ span: 6, order: 2 }}>
              <div className="card">
                <img
                  src={AboutImg}
                  alt="About Us"
                  style={{ width: '100%', height: 'auto' }} // Adjusts the image size
                />
              </div>
            </Col>
            <Col md={{ span: 6, order: 1 }}>
              <h3>Create a stunning brand efficiently and within budget</h3>
              <p>Launch your business with ease and affordability using a vast collection of ready-made design assets.</p>
            </Col>
          </Row>
        </Container>
        <Customers/>
      </Container>
    </section>
  );
};

export default About;
