import React, { Component } from 'react';
import Participant from './Participant';
import TableHeading from './TableHeading';
import '../styles/ParticipantList.css';

export default class ParticipantList extends Component {
  render() {
    return (
      <div className="participant-list">
        <table>
          <thead>
            <tr>
              <TableHeading
                onClick={this.props.sortTable('name')}
                text="Name"
                selected={this.props.sortedBy === 'name'}/>
              <TableHeading
                onClick={this.props.sortTable('email')}
                text="E-mail address"
                selected={this.props.sortedBy === 'email'} />
              <TableHeading
                onClick={this.props.sortTable('phone')}
                text="Phone number"
                selected={this.props.sortedBy === 'phone'} />
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.participants.map((participant) => {
              return (
                <Participant key={participant.id}
                  id={participant.id}
                  name={participant.name}
                  email={participant.email}
                  phone={participant.phone}
                  editing={participant.editing}
                  onDelete={this.props.onDelete(participant.id)}
                  saveEdit={this.props.saveEdit}
                  toggleEdit={this.props.toggleEdit(participant.id)}/>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
