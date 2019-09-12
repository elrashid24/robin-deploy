import React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import WriteChirp from "../chirps/newChirp";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  getLinks() {
    if (this.props.loggedIn) {
      return <div > "" < /div>;
    } else {
      return ( <
        div className = "home-links" >
        <
        span className = "sign-up" >
        <
        Link to = {
          "/signup"
        } > Signup < /Link>{" "} <
        /span>{" "} <
        /div>
      );
    }
  }

  render() {
    return ( <
      div className = "navBar-container" >
      <
      div className = "logo-container" >
      <
      Link className = "logo"
      to = {
        "/"
      } >
      Robin <
      /Link> <
      /div>

      {
        /* {this.getLinks()}{" "} */ } <
      /div>
    );
  }
}

export default withRouter(NavBar);