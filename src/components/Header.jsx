import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../assets/css/Header.css';
import { FaMoon, FaSun } from 'react-icons/fa';
import snowflakeIcon from '../assets/images/snowflake-icon.svg';

const Header = ({ onSectionChange, activeSection }) => {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setExpanded(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Navbar expand="lg" className="fixed-top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={snowflakeIcon} alt="Snowflake Icon" className="logo-icon" />
          <span className="logo-text">ANISH KUMAR SINHA</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => handleNavClick('home')}
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick('about')}
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={toggleDarkMode}
              className="nav-link theme-toggle"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
