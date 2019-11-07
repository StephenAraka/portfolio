import React, { useState } from 'react';
import { ModalFooter, CardImgOverlay, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardImg, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import react from '../../assets/img/react.png';
import html from '../../assets/img/html.png';
import node from '../../assets/img/node.png';

const Projects = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='projects-container'>
      <h1>PROJECTS</h1>
      <Nav tabs className='ma-tabs'>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            HTML/CSS/JS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            REACT
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            EXPRESS
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent className='tab-content-wrap' activeTab={activeTab}>

        <TabPane tabId="1">
          <Row>
            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={html} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>HTML/CSS Project #1</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>

            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={html} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>HTML/CSS Project #2</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>

            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={html} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>HTML/CSS Project #3</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={react} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>React Project #1</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>

            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={react} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>React Project #2</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>

            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={react} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>React Project #3</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={node} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>Express Project #1</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>

            <Col sm="4">
              <Card inverse>
                <CardImg className='card-pic' width="100%" src={node} alt="Card image cap" />
                <CardImgOverlay className='card-pic-text'>
                  <CardTitle className='title'>Express Project #2</CardTitle>
                  <CardText className='jazz'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                  <ModalFooter>
                    <Button color='danger'><i className='fa fa-github-square' aria-hidden='true' />Github</Button>
                  </ModalFooter>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Projects;
