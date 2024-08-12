import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo.png'
import logo3 from '../assets/logo3.png'

const TestimonialSlider = () => {
  return (
    <section className="testimonial-slider py-5">
      <Container>
      <Carousel controls={false} indicators={true} interval={3000}>
          <Carousel.Item>
            <Row className="align-items-center">
              <Col md={8}>
                <blockquote className="blockquote text-left">
                  <p className="mb-0">This is the best logo creator I've ever used! Highly recommended.</p><br />
                  <footer className="blockquote-footer">Alexa Marvin</footer>
                </blockquote>
              </Col>
              <Col md={4}>
                <img
                  className="float-right"
                  src={logo1}
                  alt="Customer 1"
                  style={{ width: '500px', height: '500px' }}
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="align-items-center">
              <Col md={8}>
                <blockquote className="blockquote text-left">
                  <p className="mb-0">Amazing tool with incredible results. Love it!</p><br />
                  <footer className="blockquote-footer">Nikan</footer>
                </blockquote>
              </Col>
              <Col md={4}>
                <img
                  className="float-right"
                  src={logo2}
                  alt="Customer 2"
                  style={{ width: '500px', height: '500px' }}
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="align-items-center">
              <Col md={8}>
                <blockquote className="blockquote text-left">
                  <p className="mb-0">A game-changer for my business branding.</p><br />
                  <footer className="blockquote-footer">Leather CEO</footer>
                </blockquote>
              </Col>
              <Col md={4}>
                <img
                  className="float-right"
                  src={logo3}
                  alt="Customer 3"
                  style={{ width: '500px', height: '500px' }}
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
