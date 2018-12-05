import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../Pages/SignUp";
import { PasswordForgetLink } from "../Pages/PasswordForget";
import { auth } from "../Firebase";
import "react-bootstrap";
import "./SignIn.css";

const SignInPage = ({ history }) => (
  <div id="signInBox">
    <h1>Sign in</h1>
    <SignInForm history={history} />
    <PasswordForgetLink id="forget" />
    <SignUpLink />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  hover: false,
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push("/");
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };
  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          class="container"
          id="email"
          value={email}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Email Address")}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <br />
        <input
          class="container"
          id="password"
          value={password}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Password")}
          onChange={event =>
            this.setState(updateByPropertyName("password", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <br />
        <button class="button" disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);
export { SignInForm };
