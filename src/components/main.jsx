import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeBlob } from '../assets/img/blob.svg';

const Main = () => (
  <main className="main">
    {/* <!--==================== HOME ====================--> */}
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__social">
          <a href="https://www.linkedin.com/in/stephen-araka" target="_blank" className="home__social-icon">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/StephenAraka" target="_blank" className="home__social-icon">
            <i className="uil uil-github-alt"></i>
          </a>
          <a href="https://twitter.com/StivoAraka" target="_blank" className="home__social-icon">
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>

        <div className="home__img">
          <HomeBlob />
        </div>

        <div className="home__data">
          <h1 className="home__title">Hi, I'm Stephen</h1>
          <h3 className="home__subtitle">Software Engineer</h3>
          <p className="home__description">
            Computer scientist with three years of extensive experience in software development. Designs, creates, and maintains software products for companies and to enhance business operations. Contributed as a front-end engineer in building a cloud-native tool to save locally based African developers over 40% in bandwidth usage for deploying applications. Seeking an opportunity to apply skills and expand expertise in Software and DevOps engineering while assisting companies to meet business goals and be future proof.
          </p>
          <a href="#contact" className="button button--flex">
            Contact Me <i class="uil uil-message button__icon"></i>
          </a>
        </div>
      </div>

      <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
          <i class="uil uil-mouse-alt home__scroll-mouse"></i>
          <span className="home__scroll-name">Scroll down</span>
          <i class="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
      </div>
    </section>

    {/* <!--==================== ABOUT ====================--> */}
    <section className="about section" id="about">

    </section>

    {/* <!--==================== SKILLS ====================--> */}
    <section className="skills section" id="skills">

    </section>

    {/* <!--==================== QUALIFICATION ====================--> */}
    <section className="qualification section">

    </section>

    {/* <!--==================== SERVICES ====================--> */}
    <section className="services section" id="services">

    </section>

    {/* <!--==================== PORTFOLIO ====================--> */}
    <section className="portfolio section" id="portfolio">

    </section>

    {/* <!--==================== PROJECT IN MIND ====================--> */}
    <section className="project section">

    </section>

    {/* <!--==================== TESTIMONIAL ====================--> */}
    <section className="testimonial section">

    </section>

    {/* <!--==================== CONTACT ME ====================--> */}
    <section className="contact section" id="contact">

    </section>
  </main>
);

export default Main;