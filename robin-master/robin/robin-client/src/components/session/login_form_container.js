import {
  connect
} from "react-redux";
import {
  login,
  signup,
  receiveErrors
} from "../../actions/session_actions";
import LoginForm from "./login_form";


const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "login",
    isAuthenticated: true
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);