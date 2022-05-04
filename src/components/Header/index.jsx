import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    // <!--==================== HEADER ====================-->
    <header className="header" id="header">
      <nav className="container nav">
        <Link to="#" className="nav__logo">Stephen</Link>

        <div className={`nav__menu ${(showMenu ? 'show-menu' : '')}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <Link to="#home" className="nav__link">
                <i className="uil uil-estate"></i> Home
              </Link>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <Link to="#about" className="nav__link">
                <i className="uil uil-user"></i> About
              </Link>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <Link to="#skills" className="nav__link">
                <i className="uil uil-file-alt"></i> Skills
              </Link>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <Link to="#services" className="nav__link">
                <i className="uil uil-briefcase-alt"></i> Services
              </Link>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <Link to="#portfolio" className="nav__link">
                <i className="uil uil-scenery"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item" onClick={() => setShowMenu(false)}>
              <Link to="#contact" className="nav__link">
                <i className="uil uil-message"></i> Contact Me
              </Link>
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
