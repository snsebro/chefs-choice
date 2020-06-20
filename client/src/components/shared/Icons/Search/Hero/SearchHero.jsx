import React, { Component } from "react";
import Search from '../Hero/SearchHero.png'
import "../Hero/SearchHero.scss";

export default class Button extends Component {
  render() {
    return (
    <>
      <img src={Search} />
    </>
    );
  }
}
