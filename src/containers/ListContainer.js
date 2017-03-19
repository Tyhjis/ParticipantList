import { connect } from 'react-redux';
import ParticipantList from '../components/ParticipantList';
import { removeParticipant, editParticipant, updateParticipant, sortBy } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    participants: state.participants,
    sortedBy: state.sortedBy
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      return () => {dispatch(removeParticipant(id))};
    },
    toggleEdit: (id) => {
      return () => {dispatch(editParticipant(id))};
    },
    saveEdit: (participant) => {
      dispatch(updateParticipant(participant));
    },
    sortTable: (field) => {
      return () => {
        dispatch(sortBy(field));
      }
    }
  }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ParticipantList);

export default ListContainer;
