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
            <button type='submit'>Submit</button>
            </form>
          </div>
        }
      </>
    )
  }
}
export default withRouter(RecipeEdit)
