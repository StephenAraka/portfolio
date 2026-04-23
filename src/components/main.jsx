import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as ProfilePic } from '../assets/img/profile-pic.svg';
// import { ReactComponent as ProfilePic } from '../assets/img/profile-pic.svg';
import ProfilePic from '../assets/img/profile-pic.jsx';
import aboutImg from '../assets/img/about.jpg';
import contactImg from '../assets/img/contact.png';
import ccImg from '../assets/img/cc.png';
import petsImg from '../assets/img/pets.png';
import zuriImg from '../assets/img/zuri.png';
import smartBuildImg from '../assets/img/smart-build.png';
import expoImg from '../assets/img/expo.webp';
import eventlyImg from '../assets/img/evently-app.png';
import hubproofImg from '../assets/img/hubproof.png';
import resumePdf from '../assets/pdf/StephenAraka_resume.pdf';
import mobileAppsPdf from '../assets/pdf/Mobile App Portfolio.pdf';

const Main = () => {
  const [showSkills1, setShowSkills1] = useState(true);
  const [showSkills2, setShowSkills2] = useState(true);
  const [showSkills3, setShowSkills3] = useState(true);
  const [showSkills4, setShowSkills4] = useState(true);
  const [isEducation, setIsEducation] = useState(false);
  const [showModal, setShowModal] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mkgvplyd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <section className="home section" id="home">
        <div className="home__container containerx grid">
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
            <ProfilePic />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Stephen</h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">
              I am a Software Engineer with over six years of extensive experience in software development. I design, create, and maintain software products for companies to enhance their business operations.
            </p>
            <div className="home__buttons">
              <a href="#contact" className="button button--flex">
                Contact Me <i className="uil uil-message button__icon"></i>
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="button button--flex button--ghost">
                View Resume <i className="uil uil-file-alt button__icon"></i>
              </a>
              <a href={mobileAppsPdf} target="_blank" rel="noopener noreferrer" className="button button--flex button--ghost">
                View Mobile Apps Portfolio <i className="uil uil-mobile-android button__icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </section>

      {/* <!--==================== ABOUT ====================--> */}
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle"></span>

        <div className="about__container containerx grid">
          <img src={aboutImg} alt="about" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              Contributed as a front-end engineer in building a cloud-native tool to save locally based African developers over 40% in bandwidth usage for deploying applications. Seeking an opportunity to apply skills and expand expertise in Software Engineering and DevOps while assisting companies to meet business goals and be future proof.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">06+</span>
                <span className="about__info-name">Years <br /> experience</span>
              </div>

              <div>
                <span className="about__info-title">15+</span>
                <span className="about__info-name">Completed <br /> projects</span>
              </div>

              <div>
                <span className="about__info-title">04+</span>
                <span className="about__info-name">Companies <br /> worked at</span>
              </div>
            </div>

            <div className="about__buttons">
              <a href="../assets/pdf/StephenAraka_resume.pdf" className='button button--flex' download="">
                Download Resume<i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== PROJECTS ====================--> */}
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Some recent projects I have done</span>

        <div className="portfolio__container container">
          <div className="portfolio__grid">
            {/* === PROJECT 1 - EVENTLY === */}
            <div className="portfolio__item">
              <img src={eventlyImg} className="portfolio__img" alt="Evently Mobile App" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">EVENTLY</h3>
                <p className="portfolio__description">Designed and implemented a mobile app for discovering and booking events, focusing on intuitive navigation and seamless user engagement. Built with React Native for cross-platform compatibility and optimal performance.</p>
                <div className="button button--flex button--small portfolio__button" style={{opacity: 0.6, cursor: 'not-allowed'}}>
                  Mobile App (No Demo)
                  <i className="uil uil-mobile-android button__icon"></i>
                </div>
              </div>
            </div>

            {/* === PROJECT 2 - WISDOM === */}
            <div className="portfolio__item">
              <img src={expoImg} className="portfolio__img" alt="Wisdom Mobile App" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">WISDOM</h3>
                <p className="portfolio__description">Created a mobile app delivering daily wisdom quotes through a clean, minimal interface to promote positivity and reflection. Features beautiful typography, smooth animations, and personalized quote collections.</p>
                <div className="button button--flex button--small portfolio__button" style={{opacity: 0.6, cursor: 'not-allowed'}}>
                  Mobile App (No Demo)
                  <i className="uil uil-mobile-android button__icon"></i>
                </div>
              </div>
            </div>

            {/* === PROJECT 3 - HUBPROOF === */}
            <div className="portfolio__item">
              <img src={hubproofImg} className="portfolio__img" alt="HubProof Platform" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">HUBPROOF</h3>
                <p className="portfolio__description">An online writing platform that connects clients with skilled professionals to get quality writing work done. HubProof streamlines the hiring process for content creation, copywriting, academic writing, and more — with built-in tools for project management and secure payments.</p>
                <a href="https://hubproof.com" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* === PROJECT 4 - CRANE CLOUD === */}
            <div className="portfolio__item">
              <img src={ccImg} className="portfolio__img" alt="Crane Cloud Web Client" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Crane Cloud Web Client</h3>
                <p className="portfolio__description">I designed and implemented cranecloud.io, an open source web platform used to manage Infrastructure-as-a Service on premise and multiple public clouds while working specifically as a leading front-end engineer using React and Redux.</p>
                <a href="https://cranecloud.io" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* === PROJECT 5 - ZURI GAS === */}
            <div className="portfolio__item">
              <img src={zuriImg} className="portfolio__img" alt="Zuri Gas Platform" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">ZURI GAS</h3>
                <p className="portfolio__description">Developed a secure web platform that enables users around Nairobi to verify authenticity and safely purchase cooking gas online, enhancing trust and convenience in the supply chain. Built with modern web technologies for optimal user experience.</p>
                <a href="https://www.zurigas.com/" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* === PROJECT 6 - SMART BUILD AI === */}
            <div className="portfolio__item">
              <img src={smartBuildImg} className="portfolio__img" alt="Smart Build AI Platform" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">SMART BUILD AI</h3>
                <p className="portfolio__description">Built a smart budget estimation platform that leverages AI to provide accurate construction cost forecasts for contractors, architects, and individual homeowners. Features intelligent cost analysis and project planning tools.</p>
                <a href="https://smart-buildai.com/" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* === PROJECT 7 - PETSHOP === */}
            <div className="portfolio__item">
              <img src={petsImg} className="portfolio__img" alt="Online Pet Shop" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Online Pet Shop</h3>
                <p className="portfolio__description">Online pet shop and veterinary service. Designed using Figma and implemented using React, Node.js, and MongoDB. This is a project that I developed in a team with a friend. He focused on the backend while I implemented the Frontend in React.</p>
                <a href="https://petsintown.netlify.app/" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio__download">
            <a href={mobileAppsPdf} className="button button--flex" download="Mobile App Portfolio.pdf">
              Download Mobile Apps Portfolio <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>

      </section>

      {/* <!--==================== SKILLS ====================--> */}
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container containerx grid">
          {/* === SKILLS 1 - MOBILE === */}
          <div className={`skills__content ${showSkills1 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills1(!showSkills1)}>
              <i className="uil uil-mobile-android skills__icon"></i>

              <div>
                <h1 className="skills__title">Mobile Engineer</h1>
                <span className="skills__subtitle">More than 3 years</span>
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React Native (Expo)</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React Native CLI</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">TypeScript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Redux/Zustand</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Native Modules</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">App Store Deployment</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
            </div>
          </div>

          {/* === SKILLS 2 - FRONTEND === */}
          <div className={`skills__content ${showSkills2 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills2(!showSkills2)}>
              <i className="uil uil-brackets-curly skills__icon"></i>

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 4 years</span>
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React Native</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage skills__react"></span>
              </div>
            </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

            </div>
          </div>


          {/* === SKILLS 3 - BACKEND === */}
          <div className={`skills__content ${showSkills3 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills3(!showSkills3)}>
              <i className="uil uil-server-network skills__icon"></i>

              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Node.js</h3>
                  <span className="skills__number">65%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__java"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__number">40%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>

            </div>
          </div>


          {/* === SKILLS 4 - UX DESIGN === */}
          <div className={`skills__content ${showSkills4 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills4(!showSkills4)}>
              <i className="uil uil-swatchbook skills__icon"></i>

              <div>
                <h1 className="skills__title">UX Design</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Figma</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__node"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My professional journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">

            <div
              className={`qualification__button button--flex ${isEducation ? '' : 'qualification__active'}`}
              onClick={() => setIsEducation(!isEducation)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>

            <div
              className={`qualification__button button--flex ${isEducation ? 'qualification__active' : ''}`}
              onClick={() => setIsEducation(!isEducation)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
          </div>

          <div className="qualification__sections">
            {/* === QUALIFICATION CONTENT 1 === */}
            <div className={`qualification__content ${isEducation ? 'qualification__active' : ''}`} data-content id="education">

              {/* === QUALIFICATION 1 === */}
              <div className="qualification__data">

                <div>
                  <h3 className="qualification__title">Msc. IT - Software Engineering</h3>
                  <span className="qualification__subtitle">Carnegie Mellon University - Africa</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2020 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* === QUALIFICATION 2 === */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Computer Science</h3>
                  <span className="qualification__subtitle">Makerere University - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2016 - 2019
                  </div>
                </div>
                
              </div>
            </div>

            {/* === QUALIFICATION CONTENT 2 === */}
            <div className={`qualification__content ${isEducation ? '' : 'qualification__active'}`} data-content id="work">

              {/* === QUALIFICATION 1 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Mobile Software Engineer II</h3>
                  <span className="qualification__subtitle">Jumba - Kenya</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    June 2025 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* === QUALIFICATION 2 === */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Software Developer Consultant</h3>
                  <span className="qualification__subtitle">Seargent Solutions - Nairobi, Kenya</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    January 2025 - Present · Part time
                  </div>
                </div>
              </div>

              {/* === QUALIFICATION 3 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Fullstack Software Engineer</h3>
                  <span className="qualification__subtitle">atlasGO - San Fransisco, US <br /> teroGO - Belgium</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2022 - 2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              
              {/* === QUALIFICATION 4 === */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Frontend Engineer</h3>
                  <span className="qualification__subtitle">Jumia - Kenya</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2022 - 2023
                  </div>
                </div>
              </div>
              
              {/* === QUALIFICATION 5 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Graduate Teaching Assistant</h3>
                  <span className="qualification__subtitle">Carnegie Mellon University - Rwanda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2021 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* === QUALIFICATION 6 === */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">DevOps Engineer</h3>
                  <span className="qualification__subtitle">Crane Cloud - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2021 - 2022
                  </div>
                </div>
              </div>

              {/* === QUALIFICATION 7 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">Crane Cloud - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2019 - 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* === QUALIFICATION 8 === */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Developer Consultant</h3>
                  <span className="qualification__subtitle">Flock Of Birds - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2018 - 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== SERVICES ====================--> */}
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container containerx grid">
          {/* === SERVICES 1 === */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Ui/Ux <br /> Designer</h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setShowModal('designer')}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`services__modal ${showModal === 'designer' && 'active-modal'}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Ui/Ux <br /> Designer</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setShowModal('')}></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I design the user interface
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Create ux element interactions
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I position your company brand
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === SERVICES 2 === */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Frontend <br /> Engineer</h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setShowModal('frontend')}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`services__modal ${showModal === 'frontend' && 'active-modal'}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Frontend <br /> Engineer</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setShowModal('')}></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I implement user interface designs
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Web development
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Mobile development
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === SERVICES 3 === */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Backend <br /> Engineer</h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setShowModal('backend')}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`services__modal ${showModal === 'backend' && 'active-modal'}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Backend <br /> Engineer</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setShowModal('')}></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I implement business logic
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Database design and integration
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Client integration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === SERVICES 4 === */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Mobile <br /> Engineer</h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setShowModal('mobile')}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`services__modal ${showModal === 'mobile' && 'active-modal'}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">Mobile <br /> Engineer</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setShowModal('')}></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I develop cross-platform mobile applications with a single codebase, ensuring smooth functionality on both iOS and Android.

                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I implement responsive and visually appealing user interfaces, optimizing performance and user experience.
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    I integrate APIs and backend services, handling data synchronization and real-time updates across mobile platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* === SERVICES 5 === */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">DevOps <br /> Engineer</h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => setShowModal('devops')}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`services__modal ${showModal === 'devops' && 'active-modal'}`}>
              <div className="services__modal-content">
                <h4 className="services__modal-title">DevOps <br /> Engineer</h4>
                <i className="uil uil-times services__modal-close" onClick={() => setShowModal('')}></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Aspiring Devops Engineer
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Currently learning 📖
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Soon transitioning to DevOps ⏳
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* <!--==================== PROJECT IN MIND ====================--> */}
      <section className="project section">
        <div className="project__bg">
          <div className="project__container grid container">
            <div className="project__data">
              <h2 className="project__title">Have a project we can work on?</h2>
              <p className="project__description">Contact me now and let us talk about it!</p>
              <a href="#contact" className="button button--flex button--white">
                Contact Me
                <i className="uil uil-message project__icon button__icon"></i>
              </a>
            </div>
            <img src={contactImg} alt="contact" className="project__img" />
          </div>
        </div>
      </section>

      {/* <!--==================== TESTIMONIAL ====================--> */}
      <section className="testimonial section">

      </section>

      {/* <!--==================== CONTACT ME ====================--> */}
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get In Touch</span>
        <div className="contact__container containerx grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone contact__icon"></i>
              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">+254-792-485-814</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">stevenarakaATgmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Current Location</h3>
                <span className="contact__subtitle">Nairobi - Kenya</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='contact__form grid'>
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="contact__input"
                  required
                />
              </div>
              <div className="contact__content">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="contact__input"
                  required
                />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                name="message"
                id="message"
                cols="0"
                rows="7"
                value={formData.message}
                onChange={handleInputChange}
                className="contact__input"
                required
              />
            </div>

            {submitStatus === 'success' && (
              <div className="contact__success">
                <p>✅ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="contact__error">
                <p>❌ Failed to send message. Please try again or email me directly.</p>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="button button--flex"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <i className="uil uil-message button__icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;