import React, { Component } from "react";
import "../Review/Review.scss";

export default class Review extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div className="review">
        <div className="chefProfile">
        </div>
        <div className="side">
          <div className="stars">
          </div>
          <div className="text">
          </div>
        </div>
        <button>edit</button><button>delete</button>
      </div>
    );
  }
}
