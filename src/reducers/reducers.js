import { combineReducers } from 'redux';
import { add, deleteParticipant, toggleEditing, saveChanges, sortParticipants } from './reducerFunctions';
import { ADD_PARTICIPANT, REMOVE_PARTICIPANT, UPDATE_PARTICIPANT, TOGGLE_EDIT, SORT_BY } from '../actions/actions';

const SETTINGS = 'none';

function participants(state = [], action) {
  switch(action.type) {
    case ADD_PARTICIPANT:
      return add(state, action.participant);
    case REMOVE_PARTICIPANT:
      return deleteParticipant(state, action.id);
    case UPDATE_PARTICIPANT:
      return saveChanges(state, action.participant);
    case TOGGLE_EDIT:
      return toggleEditing(state, action.id);
    case SORT_BY:
      return sortParticipants(state, action.field);
    default:
      return state;
  }
}

function sortedBy(state = SETTINGS, action) {
  switch(action.type) {
    case SORT_BY:
      return action.field;
    default:
      return state;
  }
}

const participantApp = combineReducers({
  participants,
  sortedBy
});

export default participantApp;
