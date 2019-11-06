import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='header' expand="sm">
        <NavbarBrand href="/portfolio" className='name-logo'>Stephen Araka</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="links ml-auto" navbar>
            {/* <NavItem>
              <NavLink><Link className='link' to='/portfolio/about-me'>About Me</Link></NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink><Link className='link' to='/portfolio/resume'>Resume</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className='link' to='/portfolio/projects'>Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link className='link' to='/portfolio/contact'>Contact</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;