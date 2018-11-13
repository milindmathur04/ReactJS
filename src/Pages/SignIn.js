import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../Pages/SignUp";
import { PasswordForgetLink } from "../Pages/PasswordForget";
import { auth } from "../Firebase";

const SignInPage = ({ history }) => (
  <div
    style={{
      position: "relative",
      display: "inline-block",
      maxWidth: 700,
      minWidth: 500,
      boxSizing: "border-box",
      padding: 30,
      backgroundColor: "#98b3cd",
      borderRadius: 40,
      margin: 40,
      left: "25%"
    }}
  >
    <h1
      style={{
        color: "blue",
        fontWeight: 100,
        letterSpacing: "0.01em",
        marginLeft: 15,
        marginBottom: 35,
        textTransform: "uppercase"
      }}
    >
      SignIn
    </h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
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
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 15,
            fontSize: 20,
            color: "#3186d4",
            boxSizing: "border-box",
            padding: "10px 15px",
            borderRadius: "60px"
          }}
          placeholder="Email Address"
        />
        <br />
        <input
          value={password}
          onChange={event =>
            this.setState(updateByPropertyName("password", event.target.value))
          }
          type="password"
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 15,
            fontSize: 20,
            color: "#3186d4",
            boxSizing: "border-box",
            padding: "10px 15px",
            borderRadius: "60px"
          }}
          placeholder="Password"
        />
        <br />
        <button
          disabled={isInvalid}
          type="submit"
          style={{
            marginTop: 35,
            margin: 15,
            backgroundColor: "white",
            border: "1px solid $red",
            lineHeight: 0,
            fontSize: 17,
            display: "inline-block",
            boxSizing: "border-box",
            padding: "20px 15px ",
            borderRadius: 60,
            color: "blue",
            fontWeight: 100,
            letterSpacing: "0.01em",
            position: "relative",
            zIndex: 1
          }}
        >
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
