import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Education extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs='4'>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Col>
          <Col xs='8'>
            <h4 mt='0'>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Education
