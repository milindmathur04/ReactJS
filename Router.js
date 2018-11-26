import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PasswordForget from "./Pages/PasswordForget";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/passforget" component={PasswordForget} />
  </Switch>
);

export default Router;
