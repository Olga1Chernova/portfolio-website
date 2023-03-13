import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img from 'shared/img/logo.png';

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
    <Navbar expand="lg" className={scroll ? 'scroll' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Img} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active-nav-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active-nav-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active-nav-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <div className="navbar-info">
            <div className="social-icon">
              <a href="#">
                <img src={''} alt="" />
              </a>
              <a href="#">
                <img src={''} alt="" />
              </a>
              <a href="#">
                <img src={''} alt="" />
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
