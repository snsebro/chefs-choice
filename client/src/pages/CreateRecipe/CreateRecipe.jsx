import React, { Component } from "react";
import "../CreateRecipe/CreateRecipe.scss";
import IngredientInput from "./IngredientInput/IngredientInput";
import StepsInput from "./StepsInput/StepsInput";
import EquipmentInput from "./Equipment/EquipmentInput";

export default class CreateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {
        chefName: "",
        img: "",
        bio: "",
        knownFor: "",
        title: "",
        image: "",
        servings: "",
        readyInMinutes: "",
        difficultyLevel: "",
      },
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=>({
      recipe: {...prevState.recipe,[name]: value}
    }));
  };
  render() {
    return (
      <div className="createRecipe">
        <input
          placeholder="chefName"
          type="text"
          name="chefName"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="img"
          type="text"
          name="img"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="bio"
          type="text"
          name="bio"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="knownFor"
          type="text"
          name="knownFor"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="title"
          type="text"
          name="title"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="image"
          type="text"
          name="image"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="servings"
          type="text"
          name="servings"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="readyInMinutes"
          type="text"
          name="readyInMinutes"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="difficultyLevel"
          type="text"
          name="difficultyLevel"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="summary"
          type="text"
          name="summary"
          required
          onChange={this.handleChange}
        />
        {<IngredientInput handleChange={this.handleChange} />}
        {<StepsInput handleChange={this.handleChange} />}
        {<EquipmentInput handleChange={this.handleChange} />}
      </div>
    );
  }
}
