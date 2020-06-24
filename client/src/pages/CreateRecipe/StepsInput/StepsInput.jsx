import React, { Component } from "react";

export default class StepsInput extends Component {
  render() {
    return (
      <div>
        <input placeholder="step number" type="text" name="number" required />
        <input placeholder="instructions" type="text" name="step" required />
      </div>
    );
  }
}
