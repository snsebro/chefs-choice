import React, { Component } from "react";
import Inspire from '../Inspire/Inspire.png'
import "../Inspire/Inspire.scss";

export default class Button extends Component {
  render() {
    return (
    <>
      <img src={Inspire} alt='inspire'/>
    </>
    );
  }
}
