import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import MainPage from "./main/main_page";
import NavBarContainer from "./nav/navbar_container";
// import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ChirpIndex from "./chirps/chirp_index";
import UserFormContainer from "./user/user_container";
import "../stylesheets/splash.scss";
import "../stylesheets/index.scss";
import TrumpChirps from "./search/Trump/trump";
import NFLChirps from "./search/NFL/nfl_chirps";
import FantasyChirps from "./search/fantasy_football/fantasy";
// import "../stylesheets/new-chirps.scss";
// import User from "../components/user/user";
import User from "../components/user/user";
import MusicChirps from "./search/music/music";
import MoneyChirps from "./search/money/money";
const App = () => (
  <div className="app-container">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />{" "}
      <AuthRoute exact path="/signup" component={SignupFormContainer} />{" "}
      <ProtectedRoute exact path="/chirps" component={ChirpIndex} />{" "}
      <ProtectedRoute exact path="/profile" component={User} />{" "}
      <ProtectedRoute exact path="/trump" component={TrumpChirps} />{" "}
      <ProtectedRoute exact path="/nfl" component={NFLChirps} />{" "}
      <ProtectedRoute exact path="/fantasyfootball" component={FantasyChirps} />{" "}
      <ProtectedRoute exact path="/music" component={MusicChirps} />{" "}
      <ProtectedRoute exact path="/money" component={MoneyChirps} />{" "}
    </Switch>{" "}
  </div>
);

export default App;
