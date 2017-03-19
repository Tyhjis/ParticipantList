import { connect } from 'react-redux';
import { addParticipant } from '../actions/actions';
import ParticipantForm from '../components/ParticipantForm';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (participant) => {
      dispatch(addParticipant(participant));
    }
  }
}

const AddParticipant = connect(mapStateToProps,mapDispatchToProps)(ParticipantForm);

export default AddParticipant;
