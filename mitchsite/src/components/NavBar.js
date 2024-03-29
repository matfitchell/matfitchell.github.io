import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { useRef } from 'react';

import {useState, useEffect} from "react";
import logo from '../assets/img/diving-goggles-svgrepo-com.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';




export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])



  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'Footer' });
    }
  };

  return (
    <Navbar expand="lg" className= {scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src ={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
           <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            {/* <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/mitchell-mercer-972a5220b/'><img src = {navIcon1} alt = "" /> </a>
              <a href='https://github.com/matfitchell'><img src = {navIcon2} alt = "" /> </a>
              
            </div>
              <a href="https://linktr.ee/matfitchell" className="vvd">
                <button onClick={() => console.log('connect')}>
                  <span>Let's Connect</span>
                </button>
            </a>
            {/* <a href="../mm_resume_updated.pdf" target="_blank" className="resume-button">
              <button>
                <span>Resume</span>
              </button>
            </a> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
