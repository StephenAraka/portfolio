import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import mandem from '../../assets/img/mandem.png';


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
                <Link to='https://www.linkedin.com/in/stephen-araka-9a2571177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDRRFgLG3TSyl6f3kU9VXpA%3D%3D' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-linkedin' aria-hidden='true' />
                </Link>

                {/* Github */}
                <Link to='https://github.com/StephenAraka' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-github-square' aria-hidden='true' />
                </Link>

                {/* Twitter */}
                <Link to='https://twitter.com/StivoAraka' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-twitter-square' aria-hidden='true' />
                </Link>

                {/* CodePen */}
                <Link to='https://codepen.io/stevenaraka/' rel='noopener noreferrer' target='_blank'>
                  <i className='fab fa-codepen' aria-hidden='true' />
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
