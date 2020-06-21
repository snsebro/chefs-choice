import React, { Component } from "react";
import Bookmark from '../Disabled/bookmarkDisabled.png'
import "../Disabled/Bookmark.scss";

export default class Button extends Component {
  render() {
    return (
    <div className="bookmarkIcon">
      <img src={Bookmark} />
    </div>
    );
  }
}
