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
        ingredients: [{original:''}],
        steps: [{step:''}],
        Equipment: [{name:''}]
      },
    };
  }

  deleteInput = (i) => {
    let ingredients = this.state.recipe.ingredients
    let steps = this.state.recipe.steps
    let Equipment = this.state.recipe.Equipment

    ingredients.splice(i, 1)
    steps.splice(i, 1)
    Equipment.splice(i, 1)
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        ingredients,
        steps,
        Equipment
      }
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=>({
      recipe: {...prevState.recipe,[name]: value}
    }))
  }

  handleInputs = (e, i) => {
    const { name, value } = e.target
    const ingredients = this.state.recipe.ingredients
    const steps = this.state.recipe.steps
    const Equipment = this.state.recipe.Equipment
    ingredients[i] = ({[name]:value})
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe, ingredients
      }
    }))

    steps[i] = ({[name]:value})
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe, steps
      }
    }))

    Equipment[i] = ({[name]:value})
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe, Equipment
      }
    }))
  }

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
        {<IngredientInput deleteInput={this.deleteInput} recipe={this.state.recipe} handleInputs={this.handleInputs} handleChange={this.handleChange} />}
        {<StepsInput handleChange={this.handleChange} deleteInput={this.deleteInput} handleInputs={this.handleInputs} recipe={this.state.recipe}/>}
        {<EquipmentInput handleChange={this.handleChange} deleteInput={this.deleteInput} handleInputs={this.handleInputs} recipe={this.state.recipe}/>}
      </div>
    );
  }
}
