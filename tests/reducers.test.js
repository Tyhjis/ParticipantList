import { expect } from 'chai';
import participantApp from '../src/reducers/reducers';
import { ADD_PARTICIPANT, UPDATE_PARTICIPANT, REMOVE_PARTICIPANT, TOGGLE_EDIT, SORT_BY } from '../src/actions/actions';

describe('Adding a participant', () => {
  it('adds a participant', () => {
    let state = {};
    let expectedState = {participants: [{id: 1, name: 'John Doe', email: 'john.doe@doeland.com', phone: '123'}], sortedBy:'none'};
    state = participantApp(state, {type: ADD_PARTICIPANT, participant: {name: 'John Doe', email: 'john.doe@doeland.com', phone: '123'} });
    expect(state).to.deep.equal(expectedState);
  });
});

describe('Updating a participant', () => {
  it('updates the participant', () => {
    let state = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@doeland.com',
        phone: '123'
      },
      {
        id: 2,
        name: 'Another John',
        email: 'another.j@yeah.com',
        phone: '124'
      }
    ],
  sortedBy:'none'};
    let expectedState = {participants: [
      {
        id: 1,
        name: 'John Wick',
        email: 'john.doe@doeland.com',
        phone: '123'
      },
      {
        id: 2,
        name: 'Another John',
        email: 'another.j@yeah.com',
        phone: '124'
      }
    ],
  sortedBy:'none'}
    state = participantApp(state, {type: UPDATE_PARTICIPANT, participant: {id: 1, name: 'John Wick', email: 'john.doe@doeland.com', phone: '123'} });
    expect(state).to.deep.equal(expectedState);
  });
});

describe('Removing a participant', () => {
  it('should remove the selected participant', () => {
    let state = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '123'
      }
    ],sortedBy:'none'};
    let expectedState = {participants: [],sortedBy:'none'};
    state = participantApp(state, {type: REMOVE_PARTICIPANT, id: 1});
    expect(state).to.deep.equal(expectedState);
  });
});

describe('Toggling editing', () => {
  it('should create field "editing" to the participant in question', () => {
    let state = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '12345'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.d@d.com',
        phone: '12346'
      }
    ],sortedBy:'none'};
    let expectedState = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '12345',
        editing: true
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.d@d.com',
        phone: '12346'
      }
    ],sortedBy:'none'};
    state = participantApp(state, {type: TOGGLE_EDIT, id: 1});
    expect(state).to.deep.equal(expectedState);
  });

  it('Should toggle editing true to editing false', () => {
    let state = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '12345',
        editing: true
      }
    ],sortedBy:'none'};
    let expectedState = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '12345',
        editing: false
      }
    ],sortedBy:'none'};
    state = participantApp(state, {type: TOGGLE_EDIT, id: 1});
    expect(state).to.deep.equal(expectedState);
  });

  it('Should toggle editing false to editing true', () => {
    let state = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '12345',
        editing: false
      }
    ],sortedBy:'none'};
    let expectedState = {participants: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.d@d.com',
        phone: '12345',
        editing: true
      }
    ],sortedBy:'none'};
    state = participantApp(state, {type: TOGGLE_EDIT, id: 1});
    expect(state).to.deep.equal(expectedState);
  });
});

describe('Sorting by', () => {
  it('name should sort participants by name', () => {
    let state = {
      participants: [
        {
          id: 1,
          name: 'Cecilia B',
          email: 'funny@cecialia.com',
          phone: '050555'
        },
        {
          id: 2,
          name: 'Abel Z',
          email: 'abel.z@zzz.com',
          phone: '06600'
        },
        {
          id: 3,
          name: 'I. P. Freely',
          email: 'xyz@xyz.com',
          phone: '888000'
        }
      ],
      sortedBy:'none'
    };
    let expectedState = {
      participants: [
        {
          id: 2,
          name: 'Abel Z',
          email: 'abel.z@zzz.com',
          phone: '06600'
        },
        {
          id: 1,
          name: 'Cecilia B',
          email: 'funny@cecialia.com',
          phone: '050555'
        },
        {
          id: 3,
          name: 'I. P. Freely',
          email: 'xyz@xyz.com',
          phone: '888000'
        }
      ],
      sortedBy:'name'
    };
    state = participantApp(state, {type: SORT_BY, field: 'name'});
    expect(state).to.deep.equal(expectedState);
  });

  it('email should sort participants by email', () => {
    let state = {
      participants: [
        {
          id: 1,
          name: 'Cecilia B',
          email: 'funny@cecialia.com',
          phone: '050555'
        },
        {
          id: 2,
          name: 'Abel Z',
          email: 'abel.z@zzz.com',
          phone: '06600'
        },
        {
          id: 3,
          name: 'I. P. Freely',
          email: 'aaaxyz@xyz.com',
          phone: '888000'
        }
      ],sortedBy:'none'
    };
    let expectedState = {
      participants: [
        {
          id: 3,
          name: 'I. P. Freely',
          email: 'aaaxyz@xyz.com',
          phone: '888000'
        },
        {
          id: 2,
          name: 'Abel Z',
          email: 'abel.z@zzz.com',
          phone: '06600'
        },
        {
          id: 1,
          name: 'Cecilia B',
          email: 'funny@cecialia.com',
          phone: '050555'
        }
      ],sortedBy:'email'
    };
    state = participantApp(state, {type: SORT_BY, field: 'email'});
    expect(state).to.deep.equal(expectedState);
  });

  it('phone number should sort participants by phone number', () => {
    let state = {
      participants: [
        {
          id: 1,
          name: 'Cecilia B',
          email: 'funny@cecialia.com',
          phone: '050555'
        },
        {
          id: 2,
          name: 'Abel Z',
          email: 'abel.z@zzz.com',
          phone: '06600'
        },
        {
          id: 3,
          name: 'I. P. Freely',
          email: 'aaaxyz@xyz.com',
          phone: '888000'
        }
      ], sortedBy:'none'
    };
    let expectedState = {
      participants: [
        {
          id: 1,
          name: 'Cecilia B',
          email: 'funny@cecialia.com',
          phone: '050555'
        },
        {
          id: 2,
          name: 'Abel Z',
          email: 'abel.z@zzz.com',
          phone: '06600'
        },
        {
          id: 3,
          name: 'I. P. Freely',
          email: 'aaaxyz@xyz.com',
          phone: '888000'
        }
      ],sortedBy:'phone'
    };
    state = participantApp(state, { type: SORT_BY, field: 'phone' });
    expect(state).to.deep.equal(expectedState);
  });
});
