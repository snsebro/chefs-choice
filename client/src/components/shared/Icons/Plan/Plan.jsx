import React, { Component } from "react";
import Plan from '../Plan/Plan.png'
import "../Plan/Plan.scss";

export default class Button extends Component {
  render() {
    return (
    <>
      <img src={Plan} alt='plan'/>
    </>
    );
  }
}
