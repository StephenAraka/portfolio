import React, { Component } from 'react';
import { Row, Col, Progress } from 'reactstrap';

export class Skills extends Component {
  render() {
    return (
      <div className='mt-3'>
        <Row>
          <Col xs='2'>
            <i className={`${this.props.icon} mr-3`} style={{color: `${this.props.iconColor}`}} aria-hidden='true' />{this.props.skill}
          </Col>
          <Col xs='10'>
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
