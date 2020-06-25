import React, { Component } from "react";

export default class EquipmentInput extends Component {
  constructor() {
    super()
    this.state = {
      numInputs: 1,
    }
  }

  increment = async (e) => {
    e.preventDefault()
    await this.props.handleInputs({ target: { name: 'name', value: '' } }, this.state.numInputs)
    this.setState((prevState) => ({
      numInputs: prevState.numInputs + 1,
    }));
  };

  decrement = (e) => {
    e.preventDefault()
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
            value={this.props.recipe.Equipment[i].name}
            placeholder="Tools needed"
            type="text"
            name="name"
            required
          />
          <button onClick={() => { this.decrement(); this.props.deleteInput(i) }}>-</button>
          <button onClick={this.increment}>+</button>
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
       {/* <button onClick={this.increment}>+</button> */}
        <div className="tools">{this.createInputs()}</div>
      </>
    );
  }
}

