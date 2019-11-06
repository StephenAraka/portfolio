import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Education from './Education';
import mandem from '../../assets/img/mandem.png';

export class Resume extends Component {
  render() {
    return (
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
                schoolName='Bojjas'
                schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
              />

              <Education
                startYear={2002}
                endYear={2008}
                schoolName='Bojjas'
                schoolDescription='Primo savageryLorem Ipsum. Expected corresponding JSX closing tag for pLorem Ipsum. Expected corresponding JSX closing tag for p Lorem Ipsum. Expected corresponding JSX closing tag for'
              />

              <hr style={{width: '80%', borderTop: '3px solid orange'}}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Resume
