import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Logo from "../testFiles/Logo.png";
import "../testFiles/HamburgerMenu.scss";

export default class HamburgerMenu extends Component {
  render() {
    return (
      <div className="hamburgerMenu">
        <img src={Logo} />
        <div className="inputBox">
          <h5>Create an Account</h5>
          <input placeholder="Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Create a password" type="password" />
          <input placeholder="Confirm password" type="password" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
