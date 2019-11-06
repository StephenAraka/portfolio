import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

import mandem from '../../assets/img/mandem.png';

export class Resume extends Component {
  render() {
    return (
      <div className='landin;g-container'>
        <div className='resume-container'>
          <div className='resume-grid'>
            <Row>
              <Col xs='4' className='resume-left'>
                <div>
                  <img src={mandem} alt='myself' className='contact-pic' />
                </div>

                <h2>Stephen Araka</h2>
                <h4>Programmer</h4>
                <hr />

                <p>Lorem Ipsum. Expected corresponding JSX closing tag for 'p'Lorem Ipsum. Expected corresponding JSX closing tag for 'p' Lorem Ipsum. Expected corresponding JSX closing tag for 'p'</p>
                <hr />

                <h5>Address</h5>
                <p>Nakulabye, Opp Chez Johnson.. haha</p>

                <h5>Phone</h5>
                <p>07512345678</p>

                <h5>Email</h5>
                <p>stevenaraka@gmail.com</p>

                <h5>Web</h5>
                <p>stephenaraka.github.io/portfolio</p>
                <hr />
              </Col>

              <Col xs='8' className='resume-right'>
                <h2>Education </h2>

                <Education
                  startYear={2002}
                  endYear={2008}
                  schoolName='First School'
                  schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <Education
                  startYear={2002}
                  endYear={2008}
                  schoolName='Second School'
                  schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

                <h2>Experience </h2>

                <Experience
                  startYear={2002}
                  endYear={2008}
                  jobName='First Job'
                  jobDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <Experience
                  startYear={2002}
                  endYear={2008}
                  jobName='Second Job'
                  jobDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
                />

                <hr style={{ width: '100%', borderTop: '3px solid orange' }} />

                <h2>Skills </h2>

                <Skills
                  skill='JavaScript'
                  progress={75}
                  color='default'
                />

                <Skills
                  skill='React'
                  progress={75}
                  color='default'
                />

                <Skills
                  skill='ExpressJS'
                  progress={75}
                  color='default'
                />

                <Skills
                  skill='HTML/CSS'
                  progress={70}
                  color='warning'
                />

                <Skills
                  skill='PHP'
                  progress={25}
                  color='danger'
                />

              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
