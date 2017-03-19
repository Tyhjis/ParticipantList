import React, { Component } from 'react';

export default class DisplayRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.phone}</td>
        <td><button onClick={this.props.toggleEdit}>Edit</button></td>
        <td><button onClick={this.props.onDelete}>Delete</button></td>
      </tr>
    );
  }
}
