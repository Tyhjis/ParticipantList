
var nextId = 0;

// Reducers for participants. State is the list which keeps the participants.
export function add(state = [], participant) {
  let tempParticipant = participant;
  tempParticipant.id = ++nextId;
  return [
    ...state,
    tempParticipant
  ];
}

export function sortParticipants(state = [], field) {
  let nextState = [...state.sort((participantA, participantB) => {
    return participantA[field] < participantB[field] ? -1 : 1;
  })];
  return nextState;
}

export function deleteParticipant(state = [], id) {
  return state.filter((participant) => {
    return participant.id !== id;
  });
}

export function saveChanges(state = [], participant) {
  return state.map((item) => {
    if(item.id === participant.id) {
      return participant;
    }
    return item;
  });
}

export function toggleEditing(state = [], id) {
  return state.map((participant) => {
    if(participant.id === id) {
      let tempParticipant = participant;
      if(!tempParticipant.editing === undefined) {
        tempParticipant.editing = true;
      } else {
        tempParticipant.editing = !tempParticipant.editing;
      }
      return tempParticipant;
    }
    return participant;
  });
}
