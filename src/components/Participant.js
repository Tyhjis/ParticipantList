import React, { Component, PropTypes } from 'react';
import EditRow from './EditRow';
import DisplayRow from './DisplayRow';

export default class Participant extends Component {
  render() {
    return this.props.editing ?
    <EditRow name={this.props.name}
      email={this.props.email}
      phone={this.props.phone}
      id={this.props.id}
      saveEdit={this.props.saveEdit}
      onDelete={this.props.onDelete} />
    : <DisplayRow
      name={this.props.name}
      email={this.props.email}
      phone={this.props.phone}
      toggleEdit={this.props.toggleEdit}
      onDelete={this.props.onDelete} />
  }
}

Participant.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
