import React, { Component } from 'react'
import { Row, Col, ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mandem from '../../assets/img/mandem.png';

export class Contacts extends Component {
  render() {
    return (
      <div className='contacts-container'>
        <div className='contacts-grid'>
          <Row>
            <Col>
              <h2>Stephen Araka</h2>
              <img src={mandem} alt='myself' className='contact-pic' />
              <p style={{textAlign: 'left'}}>Creative and people-oriented Computer Scientist with extensive project management experience. Advanced knowledge and experience in fulfilling roles at both technical and operational level.</p>
            </Col>
            <Col>
              <h2>Contact Me</h2>
              <hr />
              <ListGroup>
                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <FontAwesomeIcon className='icon' icon='phone-square' /> (+256) 0752908457
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <FontAwesomeIcon className='icon' icon='fax' /> (+256) 0783853027
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <FontAwesomeIcon className='icon' icon='envelope' /> &#115;&#116;&#101;&#118;&#101;&#110;&#097;&#114;&#097;&#107;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <i className='icon fab fa-skype' aria-hidden='true' /> StephenAraka
                </ListGroupItemText>
                </ListGroupItem>

              </ListGroup>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Contacts
