import React, { Component } from 'react'
import './RecipeEdit.scss'
import { Redirect, withRouter } from 'react-router-dom'
import { getRecipe, updateRecipe } from '../../services/reviews'

class RecipeEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: null,
      updated: false
    }
  }
  async componentDidMount() {
    let { id } = this.props.match.params
    const recipes = await getRecipe(id)
    this.setState({ recipes })
  }

  handleIngredientsChange = (event, index, id) => {
    const { name, value } = event.target
    const ingredient = this.state.recipes.ingredients[index]
    ingredient[name] = value
    const ingredients = this.state.recipes.ingredients
    ingredients.splice(index, 1, ingredient)
    console.log(ingredients)
    this.setState(prevState => ({
      recipes: {
        ...prevState.recipes,
        ingredients
      }
    }))
  }
  handleStepsChange = (event, index, id) => {
    const { name, value } = event.target
    const step = this.state.recipes.steps[index]
    step[name] = value
    const steps = this.state.recipes.steps
    steps.splice(index, 1, step)
    console.log(steps)
    this.setState(prevState => ({
      recipes: {
        ...prevState.recipes,
        steps
      }
    }))
  }
  handleEquipmentChange = (event, index, id) => {
    const { name, value } = event.target
    const equipment = this.state.recipes.Equipment[index]
    equipment[name] = value
    const equipments = this.state.recipes.Equipment
    equipments.splice(index, 1, equipment)
    console.log(equipments)
    this.setState(prevState => ({
      recipes: {
        ...prevState.recipes,
        equipments
      }
    }))
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = this.props.match.params
    const updated = await updateRecipe(id, this.state.recipes)
    this.props.updateRecipes()
    this.setState({ updated })
  }
  render() {
    const { recipes, updated } = this.state
    if (updated) {
      return <Redirect to={`/recipes/${this.props.match.params.id}`} />
    }
    return (
      <>
        {this.state.recipes &&
          <div className='edit-container' >
            <form onSubmit={this.handleSubmit}>
              {this.state.recipes.ingredients.map((ingredient, index) =>
                <>
                  <input
                    className="input-ingredients"
                    value={ingredient.original}
                    name='original'
                    required
                    onChange={(event) => this.handleIngredientsChange(event, index, ingredient._id)}
                  />
                </>
            )}
                 {this.state.recipes.steps.map((steps, index) =>
                <>
                  <input
                    className="input-steps"
                    value={steps.step}
                    name='step'
                    required
                    onChange={(event) => this.handleStepsChange(event, index, steps._id)}
                  />
                </>
            )}
               {this.state.recipes.Equipment.map((Equipment, index) =>
                <>
                  <input
                    className="input-Equipment"
                    value={Equipment.name}
                    name='name'
                    required
                    onChange={(event) => this.handleEquipmentChange(event, index, Equipment._id)}
                  />
                </>
            )}
            <button type='submit'>Submit</button>
            </form>
          </div>
        }
      </>
    )
  }
}
export default withRouter(RecipeEdit)
