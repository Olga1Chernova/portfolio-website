import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from 'shared/img/logo.svg';
import navIcon1 from 'shared/img/nav-icon-1.svg';
import navIcon2 from 'shared/img/nav-icon-2.svg';
import navIcon3 from 'shared/img/nav-icon-3.svg';

export const NavBar = () => {
  const [activeLink, setActive] = useState('home');
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      }
      setScroll(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScroll]);
    
    const onUpdateActiveLink = (value) => {
        setActive(value);
  }

    return (
    <Navbar expand="md" className={scroll ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <div className="navbar-info">
            <div className="social-icon">
              <a href="#linkedIn">
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a href="#GitHub">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="#Telegram">
                <img src={navIcon3} alt="Telegram" />
              </a>
            </div>
            <button
              className="contact-me"
              onClick={() => console.log('connect')}
            >
              <span>Let's connect!</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
