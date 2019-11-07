import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Languages from './Languages';

import mandem from '../../assets/img/mandem.png';

export class Resume extends Component {
  render() {
    return (
      <div className='landin;g-container'>
        <div className='resume-container'>
          <div className='resume-grid'>
            <Row>
              <Col xs='12' sm='12' md='6' lg='4' className='resume-left'>
                <div className='mt-4'>
                  <img src={mandem} alt='myself' className='contact-pic' />
                </div>

                <h2>Stephen Araka</h2>
                <h4>Programmer</h4>
                <hr />

                <p>Creative and people-oriented Computer Scientist with extensive project management experience.
Advanced knowledge and experience in fulfilling roles at both technical and operational level. <br /><br />
                  Enjoys the challenge of bringing about efficiencies for tasks through collaborating with teams to
meet desired goals and personal objectives.</p>

                <hr />

                <h5>Career Objective</h5>
                <p>To obtain a professional position in the field of Computer Science by utilizing my relevant
experience, technical expertise and problem solving skills.</p>

                <hr />

                <h5><FontAwesomeIcon className='mt-2 mr-2' icon='home' />Address</h5>
                <p>Software Systems Center <br />2nd floor, Block B - CIT building <br /> Makerere University</p>

                <h5><FontAwesomeIcon className='mt-2 mr-2' icon='phone-alt' />Phone</h5>
                <p>+256752908457</p>

                <h5><FontAwesomeIcon className='mt-2 mr-2' icon='envelope' />Email</h5>
                <p>&#115;&#116;&#101;&#118;&#101;&#110;&#097;&#114;&#097;&#107;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</p>

                <h5><FontAwesomeIcon className='mt-2 mr-2' icon='globe' />Web</h5>
                <p><Link to='/portfolio'>Portfolio Website Home</Link></p>
                <hr />
              </Col>

              <Col xs='12' sm='12' md='6' lg='8' className='resume-right'>

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

                <h2>Education </h2>

                <Education
                  startYear={2016}
                  endYear={2019}
                  schoolName='Makerere University'
                  schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <Education
                  startYear={2013}
                  endYear={2014}
                  schoolName='St. Kizito S.S. Bugolobi'
                  schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <Education
                  startYear={2009}
                  endYear={2012}
                  schoolName='St. Maria Goretti S.S. Katende'
                  schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <Education
                  startYear={2004}
                  endYear={2008}
                  schoolName='Mugwanya Preparatory School Kabojja'
                  schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

                <h2>Experience </h2>

                <Experience
                  startYear='4th June 2018'
                  endYear='10th August 2018'
                  jobName='Developer Consultant (Intern)'
                  jobDescription='Developer Consultant Intern for Flock of Birds, Uganda'
                />

                <Experience
                  startYear='7th January 2019'
                  endYear='4th March 2019'
                  jobName='Software Developer'
                  jobDescription='Software Developer for Line23, Uganda. Assisted in building mobile applications using ReactNative.'
                />

                <Experience
                  startYear='1st April 2019'
                  endYear='Current'
                  jobName='Student Engineer at Crane Cloud'
                  jobDescription='Student Engineer at Crane Cloud, Uganda. Building a managed Kubernetes platform on premise and mulitple public clouds.'
                />

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

                <h2>Skills </h2>

                <Skills
                  skill='JavaScript'
                  icon='fab fa-js'
                  iconColor='orange'
                  progress={75}
                  color='default'
                />

                <Skills
                  skill='React'
                  icon='fab fa-react'
                  iconColor='blue'
                  progress={75}
                  color='default'
                />

                <Skills
                  skill='ExpressJS'
                  iconColor='green'
                  icon='fab fa-node-js'
                  progress={75}
                  color='default'
                />

                <Skills
                  skill='HTML/CSS'
                  icon='fab fa-html5'
                  iconColor='red'
                  progress={70}
                  color='warning'
                />

                <Skills
                  skill='PHP'
                  icon='fab fa-php'
                  iconColor='#b108b1'
                  progress={25}
                  color='danger'
                />

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

                <h2>Languages </h2>

                <Languages />

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
