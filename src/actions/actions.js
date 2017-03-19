export const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
export const UPDATE_PARTICIPANT = 'UPDATE_PARTICIPANT';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';
export const SORT_BY = 'SORT_BY';

export function addParticipant(participant) {
  return { type: ADD_PARTICIPANT,  participant};
}

export function removeParticipant(id) {
  return { type: REMOVE_PARTICIPANT, id };
}

export function updateParticipant(participant) {
  return { type: UPDATE_PARTICIPANT, participant };
}

export function editParticipant(id) {
  return { type: TOGGLE_EDIT, id };
}

export function sortBy(field) {
  return { type: SORT_BY, field };
}
