import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfilePic } from '../assets/img/profile-pic.svg';
import aboutImg from '../assets/img/about.jpg';

const Main = () => {
  const [showSkills1, setShowSkills1] = useState(true);
  const [showSkills2, setShowSkills2] = useState(false);
  const [showSkills3, setShowSkills3] = useState(false);
  const [isEducation, setIsEducation] = useState(true);

  return (
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
            <ProfilePic />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Stephen</h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">
              Computer scientist with three years of extensive experience in software development. Designs, creates, and maintains software products for companies and to enhance business operations. Contributed as a front-end engineer in building a cloud-native tool to save locally based African developers over 40% in bandwidth usage for deploying applications. Seeking an opportunity to apply skills and expand expertise in Software and DevOps engineering while assisting companies to meet business goals and be future proof.
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

        <div className="about__container container grid">
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

        <div className="skills__container container grid">
          <div>

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
        </div>
      </section>

      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
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
};

export default Main;