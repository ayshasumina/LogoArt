import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import WeatherWidget from './WeatherWidget';
import TestimonialSlider from './Testimonials';


const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">Logo <span>Art</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#tools">Tools</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#support">Support</Nav.Link>
              <Button variant="primary" href="#login">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <WeatherWidget />
      <div className="hero-section">
        <Container>
          <h1>Welcome to Logo Art</h1>
          <p>Create your Logo in seconds!</p>
          <Button>Try It Now</Button>
        </Container>      
        <TestimonialSlider />
      </div>
    </header>
  );
};

export default Header;
