import React, { Component } from "react";
import Ribbon from '../Chef/Profile-Pic.png'
import "../Chef/FeaturedChef.scss";

export default class Button extends Component {
  render() {
    return (
    <>
      <img src={Ribbon} />
    </>
    );
  }
}
