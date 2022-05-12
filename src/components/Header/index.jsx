import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    // <!--==================== HEADER ====================-->
    <header className="header scroll-header" id="header">
      <nav className="container nav">
        <a href="#" className="nav__logo">Stephen</a>

        <div className={`nav__menu ${(showMenu ? 'show-menu' : '')}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#home" className="nav__link">
                <i className="uil uil-estate"></i> Home
              </a>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#about" className="nav__link">
                <i className="uil uil-user"></i> About
              </a>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt"></i> Skills
              </a>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt"></i> Services
              </a>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery"></i> Portfolio
              </a>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <a href="#contact" className="nav__link">
                <i className="uil uil-message"></i> Contact Me
              </a>
            </li>
          </ul>
          {showMenu && (
            <i
              className="uil uil-times nav__close"
              id="nav-close"
              onClick={() => setShowMenu(false)}
            ></i>
          )}
        </div>

        {!showMenu && (
          <div className="nav__btns">
            <div
              className="nav__toggle"
              id="nav-toggle"
              onClick={() => setShowMenu(true)}
            >
              <i className="uil uil-apps"></i>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
