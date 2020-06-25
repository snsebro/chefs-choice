import React, { Component } from "react";

export default class IngredientInput extends Component {
  constructor() {
    super();
    this.state = {
      numInputs: 1,
    };
  }


  increment = async (e) => {
    e.preventDefault()
    await this.props.handleInputs({ target: { name: 'original', value: '' } }, this.state.numInputs)
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
          value={this.props.recipe.ingredients[i].original}
          placeholder="Amount & name of ingredient"
          type="text"
          name="original"
          required
        />
          <button onClick={() => { this.decrement(); this.props.deleteInput(i) }}>-</button>
          <button onClick={this.increment}>+</button>
         </>
      );
    }
  return inputs
  };
  render() {
    return (
      <>
        
        <div className="ingredients">{this.createInputs()}</div>
      </>
    );
  }
}
