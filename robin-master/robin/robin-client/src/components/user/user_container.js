import {
  connect
} from "react-redux";
import {
  fetchChirps
} from "../../actions/chirp_actions";
import User from "./user";

const mapStateToProps = state => {
  return {
    // chirps: Object.values(state.chirps.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChirps: () => dispatch(fetchChirps())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);