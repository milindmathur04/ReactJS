import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";
import "react-bootstrap";
import "./slide.css";
import "./App.css";
import { firebase } from "./Firebase/firebase";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";

const Navigation = props => (
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <NavLink to="/" class="navbar-brand">
          <b>Emobicart</b>
        </NavLink>
      </div>
      <ul class="nav navbar-nav">
        <li class="active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" class="nav-link">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/signin" class="nav-link">
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      login: true,
      firstTime: true,
      buttonType: ""
    };
  }
  logout() {
    firebase.auth().signOut();
  }
  componentDidMount() {
    this.authListner();
  }
  authListner() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.setState({ buttonType: "btn btn-danger" });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        this.setState({ buttonType: "btn btn-primary" });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    // let signup;
    // if (this.state.user) {
    //   signup = <Router />;
    // } else {
    //   if (this.state.firstTime) {
    //     signup = <SignIn />;
    //   } else {
    //     signup = <SignUp />;
    //   }
    // }
    return (
      <div className="page-container">
        {this.state.user ? (
          <button class={this.state.buttonType} onClick={this.logout}>
            Logout
          </button>
        ) : (
          <button class={this.state.buttonType} onClick="/signin">
            Log In
          </button>
        )}
        <Navigation />
        {/* {this.state.user ? <Router /> : (<SignUp />, <SignIn />)} */}
        {/* {signup} */}
        <Router />
      </div>
    );
  }
}

export default App;
