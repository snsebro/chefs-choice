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
      const filteredRecipes = this.state.products.filter(recipe => {
        return recipe.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredRecipes })
    }
    this.setState({ filterValue: event.target.value }, filter)
  }

  handleSubmit = event => event.preventDefault()

  async nextRecipe() {
    this.setState((prevState) => ({
      currentRecipe: [...prevState.currentRecipe, response.data],
    }));
    this.setState((prevState) => ({
      index: prevState.index + 1, listOfRecipes: [...prevState.listOfRecipes, response.data]}));
  }

  previousRecipe= () => {
    this.setState(prevState => ({index: prevState.index - 1}));
  }

  render() {
    return (
      <Layout>
        <h1>Search</h1>
        <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
        <form className="sort-container" onSubmit={this.handleSubmit}></form>
        <div className="recipes">
          {this.state.recipes.map(recipes =>
            <button className="ViewDetailsButton"><Link to={`../RecipeDetails/RecipeDetails/${recipes.name}/edit`}>View Details</Link>
            </button>)}
          <div className="detail">
            <div className="name">{recipes.name}</div>
            <div className="user">{`${recipes.user}`}</div>
            <div className="description">{recipes.description}</div>
            <img className="recipes-detail-image" src={recipes.imgURL} alt={recipes.name} />
            <div className="button-container">
              <button className="ViewDetailsButton"><Link className="ViewDetails" to={`../RecipeDetails/RecipeDetails/${recipe._id}/edit`}>View Details</Link></button>
            </div>
          </div>
        </div>
        <footer>
          <div className="recipeButtoon">
          <button className="New" onClick={this.nextRecipe}>Next</button>
          <button className="Prev"  onClick={this.previousRecipe}>Previous</button>
        </div>
      </footer>
      </Layout>
    )

  }
}
export default SearchPage