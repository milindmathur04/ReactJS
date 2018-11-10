import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Navigation";
import LandingPage from "../Pages/Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "../Pages/Account";
import withAuthentication from "./withAuthentication";
// import * as routes from "../../constants/routes";

// import "./index.css";

const App = () => (
  <Router>
    <div className="app">
      <Navigation />

      <hr />

      <Route exact component={() => <LandingPage />} />
      <Route exact path="/signup" component={() => <SignUpPage />} />
      <Route exact path="/signin" component={() => <SignInPage />} />
      <Route
        exact
        path="/passforget"
        component={() => <PasswordForgetPage />}
      />
      <Route exact path="/home" component={() => <HomePage />} />
      <Route exact path="/cart" component={() => <AccountPage />} />

      <hr />

      {/* <span>Found in <a href="https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE">Taming the State in React</a></span> | <span>Star the <a href="https://github.com/rwieruch/react-mobx-firebase-authentication">Repository</a></span> | <span>Receive a <a href="https://www.getrevue.co/profile/rwieruch">Developer's Newsletter</a></span> */}
    </div>
  </Router>
);

export default withAuthentication(App);
