import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isDark, changeTheme, activeColor, themeColors, changeColor }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const hexToNameCol = (hexCol) => {
    let nameCol;

    switch (hexCol) {
      case '#576ee0':
        nameCol = 'blue';
        break;

      case '#6e57e0':
        nameCol = 'purple';
        break;

      case '#e05785':
        nameCol = 'pink';
        break;

      default:
        nameCol = 'green'
        break;
    }

    return nameCol;
  }

  return (
    // <!--==================== HEADER ====================-->
    <header className="header scroll-header" id="header">
      <nav className="containerx nav">
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
            <i onClick={changeTheme} className={`uil ${isDark ? 'uil-moon' : 'uil-sun'} change-theme`} id="theme-button"></i>

            <div
              className="nav__toggle change-color"
              onClick={() => setShowColors(!showColors)}
            >
              {showColors && (
                <div className="color-buttons">
                  {themeColors.filter(color => color !== activeColor).map(inactiveColor => (
                    <div
                      key={Math.random()}
                      onClick={() => changeColor(inactiveColor)}
                      className={`change-color-btn ${hexToNameCol(inactiveColor)}`}
                    />
                  ))}
                </div>
              )}
            </div>

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
