import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ChirpIndex from "../../components/chirps/chirp_index";
import NavBar from "../nav/navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
