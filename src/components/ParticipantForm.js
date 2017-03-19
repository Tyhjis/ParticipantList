import React, { Component, PropTypes } from 'react';
import { isValid } from '../helpers/validators';

export default class ParticipantForm extends Component {
  createParticipant(name, email, phone) {
    return {name: name, email: email, phone: phone};
  }
  render() {
    return (
      <div className="participant-form">
        <form onSubmit={(e) => {
          e.preventDefault();
          if(isValid(this.refs.name.value, this.refs.email.value, this.refs.phone.value)) {
            let participant = this.createParticipant(this.refs.name.value, this.refs.email.value, this.refs.phone.value);
            this.props.submitForm(participant);
            this.refs.name.value = "";
            this.refs.email.value = "";
            this.refs.phone.value = "";
          }
        }}>
          <input type="text" placeholder="Full name" ref="name" />
          <input type="text" placeholder="E-mail address" ref="email" />
          <input type="text" placeholder="Phone number" ref="phone" />
          <input type="submit" value="Add new" />
        </form>
      </div>
    );
  }
}

ParticipantForm.propTypes = {
  submitForm: PropTypes.func.isRequired
};
