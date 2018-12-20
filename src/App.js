import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";
import "react-bootstrap";
import "./slide.css";
import "./App.css";
import { firebase } from "./Firebase/firebase";
//import SignIn from "./Pages/SignIn";
//import SignUp from "./Pages/SignUp";

// const Navigation = props => (
//   <nav class="navbar navbar-default">
//     <div class="container-fluid">
//       <div class="navbar-header">
//         <NavLink to="/" class="navbar-brand">
//           <b>Emobicart</b>
//         </NavLink>
//       </div>
//       <ul class="nav navbar-nav">
//         <li class="active">
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/cart" class="nav-link">
//             Cart
//           </NavLink>
//         </li>

//         <li>
//           <NavLink to="/signin" class="nav-link" id="logout">
//             Logout
//           </NavLink>
//         </li>
//         <li>
//             <NavLink to="/signin" class="nav-link" id="signinpos">
//               Sign In
//             </NavLink>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );
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
  redirectToTarget = () => {
    this.props.push(`/signin`);
  };
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
    console.log(this.state.user);
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
      // <div className="page-container">
      //    {this.state.user ? (
      //     <button class={this.state.buttonType} onClick={this.logout}>
      //       Logout
      //     </button>
      //   ) : (
      //     <div>
      //       <button className="btn btn-primary" onClick = {this.redirectToTarget}>
      //         Login
      //       </button>
      //     </div>
      //     <button class={this.state.buttonType} id ="login" onClick="/signin">
      //       Log In
      //     </button>
      //   )}
      //   </div>
      <div className="page-container">
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
              <li style={{ margin: -5, padding: 0 }}>
                {this.state.user ? (
                  <NavLink to="/signin" id="logout">
                    <button onClick={this.logout} class="btn btn-danger">
                      Logout
                    </button>
                  </NavLink>
                ) : (
                  <NavLink to="/signin" class="nav-link" id="signinpos">
                    <button class="btn btn-primary">Sign In</button>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
        {/* <Navigation /> */}
        {/* {this.state.user ? <Router /> : (<SignUp />, <SignIn />)} */}
        {/* {signup} */}
        <Router />
      </div>
    );
  }
}

export default App;
