import React from 'react';
import './ScrollUp.css';

const ScrollToTop = () => (
  <a href="#" className="scrollup" onClick={scrollToTop} id="scroll-up">
    <i className="uil uil-arrow-up scrollup__icon"></i>
  </a>
);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};

export default ScrollToTop;
