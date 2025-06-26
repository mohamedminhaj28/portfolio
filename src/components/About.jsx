import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import handImg from '../assets/images/hand.png';
import vector1Img from '../assets/images/Vector 1.png';
import vector3Img from '../assets/images/Vector 3.png';
import vector4Img from '../assets/images/Vector 4.png';
import vector5Img from '../assets/images/Vector 5.png';

const About = () => {
  return (
    <>
      {/* Vector 1 background for hand image */}
      <div className="vector1-wrapper">
        <img src={vector1Img} alt="Hand background" className="vector1-img" />
      </div>
      
      {/* Left hand image - positioned outside any containers */}
      <div className="hand-container">
        <img src={handImg} alt="Pointing hand" className="hand-img" />
      </div>
      
      {/* Vector 3 yellow shape image (top right) */}
      <div className="vector3-wrapper">
        <img src={vector3Img} alt="Yellow vector shape" className="vector3-img" />
      </div>
      
      {/* Vector 4 image (bottom left) */}
      <div className="vector4-wrapper">
        <img src={vector4Img} alt="Bottom left shape" className="vector4-img" />
      </div>
      
      {/* Vector 5 image (bottom right) */}
      <div className="vector5-wrapper">
        <img src={vector5Img} alt="Bottom right shape" className="vector5-img" />
      </div>
      
      <section id="about" className="about-section">
      
      {/* Main content */}
      <Container>
        <Row>
          <Col md={12} lg={8} className="about-content">
            <div className="title-with-line">
              <h2 className="section-title">This is it. ;)</h2>
              <div className="horizontal-line"></div>
            </div>
            <p className="intro-paragraph">
              Anish K. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences. Typically, he's Driven & permanently Curious. He's obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
            </p>
            <p>
              He holds a <strong>bachelor degree in Computer Applications</strong>. During his graduation, he has been actively involved in the web design community for the last 3 years, he has designed websites for small businesses, events, nonprofits and more. Currently he's based in Bihar, <strong>India</strong>. Where he's working as an independent creative.
            </p>
            <p>
              His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <strong>3D floor plan</strong>.
            </p>
            <p>
              When he's not designing, he's probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
            </p>
            <div className="divider"></div>
          </Col>
          <Col lg={5} className="d-none d-lg-block"></Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default About;
