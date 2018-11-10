import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: "AIzaSyCkS0S2X7Cnu-ZLOrrFTDT3xwgNeMDj2zA",
  authDomain: "emobcart.firebaseapp.com",
  databaseURL: "https://emobcart.firebaseio.com",
  projectId: "emobcart",
  storageBucket: "emobcart.appspot.com",
  messagingSenderId: "441686479634"
};

const devConfig = {
  apiKey: "AIzaSyCkS0S2X7Cnu-ZLOrrFTDT3xwgNeMDj2zA",
  authDomain: "emobcart.firebaseapp.com",
  databaseURL: "https://emobcart.firebaseio.com",
  projectId: "emobcart",
  storageBucket: "emobcart.appspot.com",
  messagingSenderId: "441686479634"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
