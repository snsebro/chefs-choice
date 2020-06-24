import React, { Component } from "react";

export default class IngredientInput extends Component {
  constructor() {
    super();
    this.state = {
      numInputs: 1,
    };
  }

  increment = (e) => {
    this.setState((prevState) => ({
      numInputs: prevState.numInputs + 1,
    }));
  };

  createInputs = (e) => {
    let inputs = [];
    for (let i = 0; i < this.state.numInputs; i++) {
      inputs.push(
        <input
          placeholder="amount of ingredient and its name"
          type="text"
          name="original"
          required
          />
      );
    }
  return inputs
  };
  render() {
    return (
      <>
        <div>{this.createInputs()}</div>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}
