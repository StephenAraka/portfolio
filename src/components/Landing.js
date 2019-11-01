import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import mandem from '../assets/img/mandem.png';


export class Landing extends Component {
  render() {
    return (
      <div className='landing-container' style={{ width: '100%', margin: 'auto' }}>
        <Row>
          <Col>
            <img src={mandem} alt='avatar' className='avatar-img' />

            <div className='banner-text'>
              <h1 className='pt-2'>Frontend Web Developer</h1>

              <hr />

              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

              <div className='social-links'>
                {/* LinkedIn */}
                <Link to='http://google.co.ke' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </Link>

                {/* Github */}
                <Link to='http://google.co.ke' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-github-square' aria-hidden='true' />
                </Link>

                {/* Twitter */}
                <Link to='http://google.co.ke' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-twitter-square' aria-hidden='true' />
                </Link>

                {/* CodePen */}
                <Link to='http://google.co.ke' rel='noopener noreferrer' target='_blank'>
                  <i className='fa fa-codepen' aria-hidden='true' />
                </Link>
              </div>

            </div>

          </Col>
        </Row>
      </div>
    )
  }
}

export default Landing
