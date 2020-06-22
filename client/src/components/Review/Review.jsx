import React, { Component } from "react";
import "../Review/Review.scss";

export default class Review extends Component {
  render() {
    return (
      <div className="review">
        <div className="chefProfile">
          <h1>name</h1>
        </div>
        <div className="side">
          <div className="stars">
          </div>
          <div className="text">
          </div>
        </div>
      </div>
    );
  }
}
