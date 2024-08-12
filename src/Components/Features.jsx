import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Features = () => {
  return (
    <section id="features" className="py-5">
      <Container>
        <Row>
          <Col md={2}>
            <h3>Taxi</h3>
          </Col>
          <Col md={2}>
            <h3>ShowBook</h3>
          </Col>
          <Col md={2}>
            <h3>TeaDay</h3>
          </Col>
          <Col md={2}>
            <h3>Vision</h3>
          </Col>
          <Col md={2}>
            <h3>Explore</h3>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};


export default Features;
