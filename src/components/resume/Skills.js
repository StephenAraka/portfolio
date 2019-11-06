import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

export class Skills extends Component {
  render() {
    return (
      <div className='mt-3'>
        <Row>
          <Col xs='1'>
            {this.props.skill}
          </Col>
          <Col xs='11'>
            <Progress
              style={{ height:'10px', margin: 'auto', width: '75%' }}
              value={this.props.progress}
              color={this.props.color}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Skills;
