import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      login: true,
      rEmail: "",
      handle: "",
      p1: "",
      p2: ""
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.switchToSignupForm = this.switchToSignupForm.bind(this);
    this.switchToLoginForm = this.switchToLoginForm.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleLogin(e) {
    e.preventDefault();
    const { history } = this.props;
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user).then(() => history.push("/chirps"));
  }
  handleSignup(e) {
    e.preventDefault();
    const { history } = this.props;
    let user = {
      rEmail: this.state.remail,
      handle: this.state.handle,
      p1: this.state.p1,
      p2: this.state.p2
    };
    this.props.signup(user).then(() => history.push("/chirps"));
  }

  handleDemo(e) {
    e.preventDefault();
    const { history } = this.props;
    const demoUser = {
      email: "heyhey@gmail.com",
      password: "heyhey"
    };
    this.props.login(demoUser).then(() => history.push("/chirps"));
  }

  switchToSignupForm(e) {
    e.preventDefault();

    this.setState({ login: false });
  }

  switchToLoginForm(e) {
    e.preventDefault();

    this.setState({ login: true });
  }

  renderErrors() {
    return (
      <ul>
        {" "}
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}> {this.props.errors[error]} </li>
        ))}{" "}
      </ul>
    );
  }

  render() {
    if (this.state.login) {
      return (
        <div className="auth-form-container">
          <h2> Login to Robin </h2>
          <form onSubmit={this.handleLogin}>
            <div>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="auth-inputs"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="auth-inputs"
              />
              <br />
              <div className="auth-btn-container">
                <input type="submit" value="Submit" className="auth-btn" />
                <br />
                <button className="auth-btn" onClick={this.handleDemo}>
                  Demo Instead{" "}
                </button>{" "}
                <br />
                <button className="auth-btn" onClick={this.switchToSignupForm}>
                  No Account? Sign up now!
                </button>
              </div>{" "}
              <div className="errors"> {this.renderErrors()} </div>{" "}
            </div>{" "}
          </form>{" "}
        </div>
      );
    } else {
      return (
        <div className="auth-form-container">
          <h2> Login to Robin </h2>
          <form onSubmit={this.handleSignup}>
            <div>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="auth-inputs"
              />
              <br />
              <input
                type="text"
                value={this.state.handle}
                onChange={this.update("handle")}
                placeholder="Password"
                className="auth-inputs"
              />
              <br />
              <input
                type="password"
                value={this.state.p1}
                onChange={this.update("p1")}
                placeholder="Password"
                className="auth-inputs"
              />
              <br />
              <input
                type="password"
                value={this.state.p2}
                onChange={this.update("p2")}
                placeholder="Confirm Password"
                className="auth-inputs"
              />
              <br />
              <div className="auth-btn-container">
                <input type="submit" value="Submit" className="auth-btn" />
                <br />
                <button className="auth-btn" onClick={this.handleDemo}>
                  Demo Instead{" "}
                </button>{" "}
                <br />
                <button className="auth-btn" onClick={this.switchToLoginForm}>
                  Already a Chirper? Login Here
                </button>
              </div>{" "}
              <div className="errors"> {this.renderErrors()} </div>{" "}
            </div>{" "}
          </form>{" "}
        </div>
      );
    }
  }
}

export default withRouter(LoginForm);
