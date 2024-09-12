import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as ProfilePic } from '../assets/img/profile-pic.svg';
// import { ReactComponent as ProfilePic } from '../assets/img/profile-pic.svg';
import ProfilePic from '../assets/img/profile-pic.jsx';
import aboutImg from '../assets/img/about.jpg';
import contactImg from '../assets/img/contact.png';
import ccImg from '../assets/img/cc.png';
import coastImg from '../assets/img/coast.png';
import petsImg from '../assets/img/pets.png';
import covidImg from '../assets/img/covid.png';

const Main = () => {
  const [showSkills1, setShowSkills1] = useState(true);
  const [showSkills2, setShowSkills2] = useState(false);
  const [showSkills3, setShowSkills3] = useState(false);
  const [isEducation, setIsEducation] = useState(true);
  const [showModal, setShowModal] = useState('');
  const [activeCarousel, setActiveCarousel] = useState(1)

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
              I am a Software Engineer with over five years of extensive experience in software development. I design, create, and maintain software products for companies to enhance their business operations.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
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
        <span className="section__subtitle">My introduction</span>

        <div className="about__container containerx grid">
          <img src={aboutImg} alt="about" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              Contributed as a front-end engineer in building a cloud-native tool to save locally based African developers over 40% in bandwidth usage for deploying applications. Seeking an opportunity to apply skills and expand expertise in Software and DevOps engineering while assisting companies to meet business goals and be future proof.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">03+</span>
                <span className="about__info-name">Years <br /> experience</span>
              </div>

              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">Completed <br /> projects</span>
              </div>

              <div>
                <span className="about__info-title">03+</span>
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

      {/* <!--==================== SKILLS ====================--> */}
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container containerx grid">
          {/* === SKILLS 1 === */}
          <div className={`skills__content ${showSkills1 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills1(!showSkills1)}>
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

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>

            </div>
          </div>


          {/* === SKILLS 2 === */}
          <div className={`skills__content ${showSkills2 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills2(!showSkills2)}>
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


          {/* === SKILLS 2 === */}
          <div className={`skills__content ${showSkills3 ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setShowSkills3(!showSkills3)}>
              <i className="uil uil-swatchbook skills__icon"></i>

              <div>
                <h1 className="skills__title">Designer</h1>
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
              className={`qualification__button button--flex ${isEducation ? 'qualification__active' : ''}`}
              onClick={() => setIsEducation(!isEducation)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={`qualification__button button--flex ${isEducation ? '' : 'qualification__active'}`}
              onClick={() => setIsEducation(!isEducation)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>

          <div className="qualification__sections">
            {/* === QUALIFICATION CONTENT 1 === */}
            <div className={`qualification__content ${isEducation ? 'qualification__active' : ''}`} data-content id="education">

              {/* === QUALIFICATION 1 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Science</h3>
                  <span className="qualification__subtitle">Makerere University - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2016 - 2019
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
                  <h3 className="qualification__title">Msc. IT</h3>
                  <span className="qualification__subtitle">Carnegie Mellon University - Africa</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2020 - 2022
                  </div>
                </div>
              </div>
            </div>

            {/* === QUALIFICATION CONTENT 2 === */}
            <div className={`qualification__content ${isEducation ? '' : 'qualification__active'}`} data-content id="work">

              {/* === QUALIFICATION 1 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Developer Consultant</h3>
                  <span className="qualification__subtitle">Flock Of Birds - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2018 - 2019
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
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">Crane Cloud - Uganda</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2019 - 2021
                  </div>
                </div>
              </div>

              {/* === QUALIFICATION 3 === */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">DevOps Engineer</h3>
                  <span className="qualification__subtitle">Crane Cloud - Uganda</span>
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

              {/* === QUALIFICATION 2 === */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Graduate Teaching Assistant</h3>
                  <span className="qualification__subtitle">Carnegie Mellon University - Africa</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar"></i>
                    2021 - Present
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
                    Currently learning
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    Soon transitioning to DevOps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* <!--==================== PORTFOLIO ====================--> */}
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Some recent projects I have done</span>

        <div className="portfolio__container container">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className={`${activeCarousel === 1 ? 'active' : ''}`}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" className={`${activeCarousel === 2 ? 'active' : ''}`}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" className={`${activeCarousel === 3 ? 'active' : ''}`}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" className={`${activeCarousel === 4 ? 'active' : ''}`}></li>
            </ol>

            <div class="carousel-inner">
              <div class={`carousel-item ${activeCarousel === 1 ? 'active' : ''}`}>
                {/* === PROJECT 1 === */}
                <div className="portfolio__content grid">
                  <img src={ccImg} className="portfolio__img" alt="Project 1 Crane Cloud" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Crane Cloud Client</h3>
                    <p className="portfolio__description">I designed and implemented cranecloud.io, an open source web platform used to manage Infrastructure-as-a Service on premise and multiple public clouds while working specifically as a leading front-end engineer using React and Redux.</p>
                    <a href="https://cranecloud.io" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class={`carousel-item ${activeCarousel === 2 ? 'active' : ''}`}>

                {/* === PROJECT 2 === */}
                <div className="portfolio__content grid">
                  <img src={coastImg} className="portfolio__img" alt="Project 2 Coast" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Coast Website</h3>
                    <p className="portfolio__description">In this project, I was tasked to develop the website for COAST (an end-to-end AI and data systems for targeted surveillance and management of COVID-19 and future pandemics affecting Uganda).</p>
                    <a href="https://coastug.org" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class={`carousel-item ${activeCarousel === 3 ? 'active' : ''}`}>
                {/* === PROJECT 3 === */}
                <div className="portfolio__content grid">
                  <img src={petsImg} className="portfolio__img" alt="Project 3 PetsInTown" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Online Pet Shop</h3>
                    <p className="portfolio__description">Online pet shop and veterinary service.<br />Designed using Figma and implemented using React, Node.js, and MongoDB.<br />This is a project that I developed in a team with a friend.<br />He focused on the backend while I implemented the Frontend in React.</p>
                    <a href="https://petsintown.netlify.app/" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class={`carousel-item ${activeCarousel === 4 ? 'active' : ''}`}>
                {/* === PROJECT 4 === */}
                <div className="portfolio__content grid">
                  <img src={covidImg} className="portfolio__img" alt="Project 4 Covid Tracker" />

                  <div className="portfolio__data">
                    <h3 className="portfolio__title">Covid Tracker</h3>
                    <p className="portfolio__description">A simple project that I did during the lockdown to fetch data about COVID cases from an API and display it on a simple React app. <br />I implemented this project using React and the Axios fetching library.</p>
                    <a href="https://stephenaraka.github.io/covid-tracker-app/" target="_blank" rel="noopener noreferrer" className="button button--flex button--small portfolio__button">
                      Demo
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <a
              class="carousel-control-prev swiper-button-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
              onClick={() => {
                if (activeCarousel === 1) {
                  setActiveCarousel(4)
                  return
                }
                setActiveCarousel(activeCarousel - 1)
              }}
            >
              <i className="uil uil-angle-left-b portfolio__modal-icon"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next swiper-button-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
              onClick={() => {
                if (activeCarousel === 4) {
                  setActiveCarousel(1)
                  return
                }
                console.log(activeCarousel)
                setActiveCarousel(activeCarousel + 1)
              }}
            >
              <i className="uil uil-angle-right-b portfolio__modal-icon"></i>
              <span class="sr-only">Next</span>
            </a>
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

          <form action="" className='contact__form grid'>
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Name</label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">Email</label>
                <input type="email" className="contact__input" />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">Message</label>
              <textarea name="" id="" cols="0" rows="7" className="contact__input" />
            </div>

            <div>
              <a href="" className="button button--flex">
                Send Message <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;