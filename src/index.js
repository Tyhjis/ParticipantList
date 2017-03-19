import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import participantApp from './reducers/reducers';
import './styles/index.css';
import './styles/font-awesome/css/font-awesome.min.css';

let store = createStore(participantApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
