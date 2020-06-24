import React, { Component } from "react";

export default class StepsInput extends Component {
  constructor() {
    super()
    this.state = {
      numInputs: 1,
    }
  }

  increment = async (e) => {
    await this.props.handleInputs({ target: { name: 'step', value: '' } }, this.state.numInputs)
    this.setState((prevState) => ({
      numInputs: prevState.numInputs + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      numInputs: prevState.numInputs - 1,
    }));
  }

  createInputs = (e) => {
    let inputs = [];
    for (let i = 0; i < this.state.numInputs; i++) {

      inputs.push(
        <>
          <input
            onChange={(e) => { this.props.handleInputs(e, i) }}
            value={this.props.recipe.steps[i].step}
            placeholder="instructions"
            type="text"
            name="step"
            required
          />
          <button onClick={() => { this.decrement(); this.props.deleteInput(i) }}>-</button>
        </>
      );
    }

    return inputs
  }

  render() {
    return (
      <>
        {/* <input placeholder="step number" type="text" name="number" required /> */}
        {/* <input placeholder="instructions" type="text" name="step" required />
      </div> */}
       <button onClick={this.increment}>+</button>
        <div>{this.createInputs()}</div>
      </>
    );
  }
}

