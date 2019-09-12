import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchChirps } from "../../actions/chirp_actions";
import ChirpIndexItem from "./chirp_index_item";
// import User from "../user/user";
import { Links } from "../nav/navbar";
import WriteChirp from "./newChirp";
import Trends from "../trending/trends";
import { logout } from "../../actions/session_actions";
import UserChirps from "../user/user";
class ChirpIndex extends React.Component {
  render() {
    return (
      <div className="index-container">
        <div className="left-index">
          <div class="navbar">
            <Link to="/chirps"> Latest Chirps </Link>{" "}
            <Link to="/profile"> My Chirps </Link>{" "}
            <div class="dropdown">
              <button class="dropbtn">
                Popular Trends <i class="fa fa-caret-down"> </i>{" "}
              </button>{" "}
              <div class="dropdown-content">
                <Link to="/trump"> Donald Trump </Link>{" "}
                <Link to="/money"> Money </Link>{" "}
                <Link to="/nfl"> NFL </Link>{" "}
                <Link to="/music"> Music </Link>{" "}
                <Link to="/fantasyfootball"> Fantasy Football </Link>{" "}
              </div>{" "}
            </div>{" "}
            <button className="logout" onClick={this.props.logout}>
              Logout{" "}
            </button>{" "}
          </div>
        </div>
        <div className="feed-container">
          <Trends />
          {/* {this.state.chirps.map((chirp, index) => (
            <ChirpIndexItem key={index} chirp={chirp} />
          ))} */}
        </div>
        <div className="right-index">
          <div className="right-header">CHIRP IT UP</div>
          <WriteChirp />
          <img
            src={require("./chirp_photos/idx-r.png")}
            className="right-idx-photo"
            alt=""
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chirps: Object.values(state.chirps)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChirps: () => dispatch(fetchChirps()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChirpIndex);
