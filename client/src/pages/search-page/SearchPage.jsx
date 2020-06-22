import React from 'react'
import Layout from '../../components/shared/Layout'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import "./SearchPage.scss";
import recipes from '../../recipe.json'

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      filterValue: '',
      filteredRecipes: null,
      index: 0
    };
  }

  async componentDidMount() {
    this.setState({ recipes })
  }

  handleSearchChange = event => {
    const filter = () => {
      const filteredRecipes = this.state.recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredRecipes })
    }
    this.setState({ filterValue: event.target.value }, filter)
  }

  handleSubmit = event => event.preventDefault()

  async nextRecipe() {
    this.setState((prevState) => ({
      currentRecipe: [...prevState.currentRecipe, recipes],
    }));
    this.setState((prevState) => ({
      index: prevState.index + 1, listOfRecipes: [...prevState.listOfRecipes, recipes]
    }));
  }

  previousRecipe = () => {
    this.setState(prevState => ({ index: prevState.index - 1 }));
  }

  render() {

    const setRecipes = this.state.filteredRecipes ? this.state.filteredRecipes : this.state.recipes

    const RECIPES = setRecipes.map(recipes =>
      <div className='recipe'>
        <img src={recipes.image} />
        <div className="viewDetailsButton"><Link to={`/recipes/${recipes.id}`}>
          <h3>View Details</h3></Link>
        </div>
        <div className="detail">
          <div className="name">{recipes.title}</div>
          <div className="user">{recipes.chefName}</div>
          <div className="description">{recipes.summary}</div>
        </div>
      </div>
    )
  

    return (
      <div className="search">
        <h1>Search</h1>
        <Search onChange={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
        <form className="sort-container" onSubmit={this.handleSubmit}></form>
        <div className="recipes">
           {RECIPES}
        </div>
        
        <footer>
        <div className="recipeButton">
         <button className="New" onClick={this.nextRecipe}>Next</button>
            <button className="Prev"  onClick={this.previousRecipe}>Previous</button>
         </div>
        </footer>
      </div>
    )

  }
}
export default SearchPage