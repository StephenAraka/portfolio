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
              <p>Lorem Ipsum. Expected corresponding JSX closing tag for 'p'Lorem Ipsum. Expected corresponding JSX closing tag for 'p' Lorem Ipsum. Expected corresponding JSX closing tag for 'p'</p>
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
                    <FontAwesomeIcon className='icon' icon='envelope' /> stevenaraka@gmail.com
                </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem className='list-item'>
                  <ListGroupItemText>
                    <i className='icon fa fa-skype' aria-hidden='true' /> StephenAraka
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
