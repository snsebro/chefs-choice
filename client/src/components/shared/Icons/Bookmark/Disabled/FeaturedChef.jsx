import React, { Component } from "react";
import Bookmark from '../Disabled/bookmarkDisabled.png'
import "../Disabled/FeaturedChef.scss";

export default class Button extends Component {
  render() {
    return (
    <>
      <img src={Bookmark} />
    </>
    );
  }
}
