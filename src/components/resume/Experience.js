import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Experience extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs='4'>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Col>
          <Col xs='8'>
            <h4 mt='0'>{this.props.jobName}</h4>
            <p>{this.props.jobDescription}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Experience;
