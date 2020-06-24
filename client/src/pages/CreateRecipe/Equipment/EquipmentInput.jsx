import React, { Component } from "react";

export default class IngredientInput extends Component {
  render() {
    return (
      <div>
        <input placeholder="Name of tool" type="text" name="Equipment" required onChange={this.props.handleChange} />
      </div>
    );
  }
}
