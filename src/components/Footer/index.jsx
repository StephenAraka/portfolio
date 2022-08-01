import React from 'react';
import './Footer.css';

const Footer = () => (
  //  <!--==================== FOOTER ====================--> 
  <footer className="footer" id="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">Steve</h1>
          <span className="footer__subtitle">Software Developer</span>
        </div>

        <ul className="footer__links">
          <li><a href="#services" className="footer__link">Services</a></li>
          <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
          <li><a href="#contact" className="footer__link">Contact Me</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/stephen-araka" target="_blank" rel="noopener noreferrer" className="footer__social">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/StephenAraka" target="_blank" rel="noopener noreferrer" className="footer__social">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://twitter.com/StivoAraka" target="_blank" rel="noopener noreferrer" className="footer__social">
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>
      </div>

      <p className="footer__copy">&#169; StephenAraka. All rights reserved</p>
    </div>
  </footer >
);

export default Footer;
