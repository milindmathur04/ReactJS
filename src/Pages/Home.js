import React, { Component } from "react";
import firebase from "firebase";
// import { firebase } from "../Firebase";
// import SignIn from "./SignIn";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // emails: [
      //   { id: 1, email: "mm@gmail.com" },
      //   { id: 2, email: "mm@illinois.edu" }
      // ],
      brands: [],
      user: {}
    };
  }
  // componentDidMount() {
  //   this.authListner();
  // }
  // authListner() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({ user });
  //       localStorage.setItem("user", user.uid);
  //     } else {
  //       this.setState({ user: null });
  //       localStorage.removeItem("user");
  //     }
  //   });
  // }
  componentDidMount() {
    var query = firebase.database().ref();
    var bra = [];
    var that = this;
    // query.once("value").then(function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     bra.push(childSnapshot.val().brand);
    //   });
    // });
    this.firebaseCallback = query.on("value", snap => {
      snap.forEach(function(childSnapshot) {
        // this.setState({ brands: childSnapshot.val().brand });
        bra.push(childSnapshot.val().brand);

        that.setState({ brands: bra });
        // console.log(that.state.brands);
      });
    });
    // var firebaseRef = firebase.database().ref();
    // firebaseRef.once("value").then(function(dataSnapshot) {
    //   that.setState({
    //     brands: dataSnapshot.val()
    //   });
    // });
    // console.log(bra);
    // this.setState.brands = bra;
    // this.setState({ brands: bra });
    // console.log(this.state.brands);
  }

  render() {
    return (
      <div>
        <label>def3e</label>
        <h1>{this.state.brands}</h1>
      </div>
    );
  }
}

export default Home;
