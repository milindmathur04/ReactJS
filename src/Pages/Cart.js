import React, { Component } from "react";
import Cart from "../Features/cart";
import firebase from "firebase";
import SignIn from "./SignIn";

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListner();
  }
  authListner() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return <div>{this.state.user ? <Cart /> : <SignIn />}</div>;
  }
}

export default CartPage;
