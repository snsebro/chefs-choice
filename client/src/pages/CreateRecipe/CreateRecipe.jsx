import React, { Component } from "react";
import "../CreateRecipe/CreateRecipe.scss";
import IngredientInput from "./IngredientInput/IngredientInput";
import StepsInput from "./StepsInput/StepsInput";
import EquipmentInput from "./Equipment/EquipmentInput";
import { createRecipe } from '../../services/reviews';
import { Redirect } from "react-router-dom";


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
        ingredients: [{ original: "" }],
        steps: [{ step: "" }],
        Equipment: [{ name: "" }],
      },
      created: false
    };
  }

  deleteInput = (i) => {
    let ingredients = this.state.recipe.ingredients;
    let steps = this.state.recipe.steps;
    let Equipment = this.state.recipe.Equipment;

    ingredients.splice(i, 1);
    steps.splice(i, 1);
    Equipment.splice(i, 1);
    this.setState((prevState) => ({
      recipe: {
        ...prevState.recipe,
        ingredients,
        steps,
        Equipment,
      },
    }));
  };
  //for inputs on this component
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    this.setState((prevState) => ({
      recipe: { ...prevState.recipe, [name]: value },
    }));
  };
  //for inputs on subcomponents
  handleInputs = (e, i) => {
    const { name, value } = e.target;
    const ingredients = this.state.recipe.ingredients;
    const steps = this.state.recipe.steps;
    const Equipment = this.state.recipe.Equipment;

    if (name === "original") {
      ingredients[i] = { [name]: value };
    } else if (name === "step") {
      steps[i] = { [name]: value };
    } else {
      Equipment[i] = { [name]: value };
    }
    this.setState((prevState) => ({
      recipe: {
        ...prevState.recipe,
        ingredients,
        steps,
        Equipment,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault()
    await createRecipe(this.state.recipe)
    this.setState({ created: true })
  }

  render() {
    if (this.state.created) {
     return <Redirect to={`/search`} />
    }
    return (
      <>
      <h2>Create a new recipe</h2>
      <form onSubmit={this.handleSubmit} className="createRecipe">
        <input
          placeholder="Your Name"
          type="text"
          name="chefName"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="Profile image link"
          type="text"
          name="img"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="Tell us about you..."
          type="text"
          name="bio"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="What are your go to's?"
          type="text"
          name="knownFor"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="Whats this dish called"
          type="text"
          name="title"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="Picture of the dish"
          type="text"
          name="image"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="How many servings"
          type="number"
          name="servings"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="How long does it take to cook?"
          type="number"
          name="readyInMinutes"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="How hard is it to make? (ex: easy, medium, hard)"
          type="text"
          name="difficultyLevel"
          required
          onChange={this.handleChange}
        />
        <input
          placeholder="What do you love about this dish?"
          type="text"
          name="summary"
          required
          onChange={this.handleChange}
          />
          <div className="sub">
        {
          <IngredientInput
            deleteInput={this.deleteInput}
            recipe={this.state.recipe}
            handleInputs={this.handleInputs}
            handleChange={this.handleChange}
          />
        }
        {
          <StepsInput
            handleChange={this.handleChange}
            deleteInput={this.deleteInput}
            handleInputs={this.handleInputs}
            recipe={this.state.recipe}
          />
        }
        {
          <EquipmentInput
            handleChange={this.handleChange}
            deleteInput={this.deleteInput}
            handleInputs={this.handleInputs}
            recipe={this.state.recipe}
          />
            }
            </div>
        <button type="submit">Submit</button>
        </form>
        </>
    );
  }
}
