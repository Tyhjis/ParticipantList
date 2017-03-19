import React, { Component } from 'react';
//import logo from './logo.svg';
import ListContainer from './containers/ListContainer';
import AddParticipant from './containers/AddParticipant';
import './styles/App.css';

/*const testData = [
  {id: 1, name:'John Doe', email: 'j.d@d.com', phone: '12345'},
  {id: 2, name:'Niksu Kusi', email: 'N.K@NK.com', phone: '54321'}
];*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>List of participants</h2>
        <AddParticipant />
        <ListContainer />
      </div>
    );
  }
}

export default App;
