import React, { Component } from 'react';
import { Table } from 'reactstrap';

export class Languages extends Component {
  render() {
    return (
      <div>
        <Table striped bordered dark>
      <thead>
        <tr style={{color: 'orange'}}>
          <th>LANGUAGE</th>
          <th>SPEAKING</th>
          <th>READING</th>
          <th>WRITING</th>
        </tr>
      </thead>
      <tbody style={{fontStyle: 'italic', backgroundColor: '#4d4e50'}}>
        <tr>
          <th style={{color: '#3ad8ff'}}>English</th>
          <td>Fluent</td>
          <td>Fluent</td>
          <td>Fluent</td>
        </tr>
        <tr>
          <th style={{color: '#3ad8ff'}}>Kiswahili</th>
          <td>Fluent</td>
          <td>Adequate</td>
          <td>Adequate</td>
        </tr>
        <tr>
          <th style={{color: '#3ad8ff'}}>Luganda</th>
          <td>Conversational</td>
          <td>Adequate</td>
          <td>Adequate</td>
        </tr>
      </tbody>
    </Table>
      </div>
    )
  }
}

export default Languages;
