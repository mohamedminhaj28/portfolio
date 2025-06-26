import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Hero.css';
import profileImg from '../assets/images/profile-img.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={6} className="hero-content">
            <div className="hero-text">
              <div className="hello-badge">Hello!</div>
              <h1>I'm <span className="highlight">Anish</span> <span className="wave">👋</span></h1>
              <p className="profession">UI/UX Designer, Front-End Developer & Thinker.<br />Based in India.</p>
              
              <div className="hero-buttons">
                <Button className="download-cv">Download CV</Button>
                <Button className="contact-btn">Get in Touch!</Button>
              </div>
            </div>
          </Col>
          
          <Col lg={5} md={6} className="hero-image">
            <div className="image-container">
              <img src={profileImg} alt="Anish" className="profile-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
