import React, { Component } from 'react';
import { isValid } from '../helpers/validators';

export default class EditRow extends Component {
  render() {
    return (
      <tr>
        <td><input type="text" defaultValue={this.props.name} ref="name" /></td>
        <td><input type="text" defaultValue={this.props.email} ref="email" /></td>
        <td><input type="text" defaultValue={this.props.phone} ref="phone" /></td>
        <td><button onClick={() => {
          if(isValid(this.refs.name.value, this.refs.email.value, this.refs.phone.value)) {
            this.props.saveEdit({
              name: this.refs.name.value,
              email: this.refs.email.value,
              phone: this.refs.phone.value,
              id: this.props.id
            });
          }
        }}>Save</button></td>
        <td><button onClick={this.props.onDelete}>Delete</button></td>
      </tr>
    );
  }
}
