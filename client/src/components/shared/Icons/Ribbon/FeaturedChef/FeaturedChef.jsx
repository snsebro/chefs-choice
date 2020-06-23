import React, { Component } from "react";
import Ribbon from '../FeaturedChef/Ribbon.png';
import "../FeaturedChef/FeaturedChef.scss";

export default class Button extends Component {
  render() {
    return (
    <>
      <img src={Ribbon} />
    </>
    );
  }
}
