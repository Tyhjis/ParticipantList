import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


export default class TableHeading extends Component {
  render() {
    return (
      <th onClick={this.props.onClick}>
        {this.props.text}
        <FontAwesome style={{
          display: this.props.selected ? 'inline' : 'none',
          position: 'absolute',
          marginLeft: '10px'
        }} name="long-arrow-down"/>
      </th>
    );
  }
}
