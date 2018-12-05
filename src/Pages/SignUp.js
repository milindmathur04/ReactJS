import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth, db } from "../Firebase";
import "./SignIn.css";

const SignUpPage = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push("/");
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";

    return (
      <form onSubmit={this.onSubmit} class="container" id="signup">
        <input
          id="fullName"
          value={username}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Full Name")}
          onChange={event =>
            this.setState(updateByPropertyName("username", event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        <input
          id="emailSignUp"
          value={email}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Email Address")}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          id="pwdSignUp1"
          value={passwordOne}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Password")}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordOne", event.target.value)
            )
          }
          type="password"
          placeholder="Password"
        />
        <input
          id="pwdSignUp2"
          value={passwordTwo}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Confirm Password")}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordTwo", event.target.value)
            )
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button
          disabled={isInvalid}
          type="submit"
          id="signUpButton"
          class="button"
        >
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p id="signUpText">
    Don't have an account? <Link to="/signup">Sign Up</Link>
  </p>
);
export default withRouter(SignUpPage);
export { SignUpForm, SignUpLink };
