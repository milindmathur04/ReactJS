import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";
import "react-bootstrap";
import "./slide.css";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css'

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
        <li>
          <a>Page 3</a>
        </li>
      </ul>
    </div>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
