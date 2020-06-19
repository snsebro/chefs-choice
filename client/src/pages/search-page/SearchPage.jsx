import React from 'react'
import Layout from '../../components/shared/Layout'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
// import { withRouter, Link } from "react-router-dom";
import "./SearchPage.scss";
import recipes from '../../recipe.json'

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      filterValue: '',
      filteredRecipes: null,
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

  render() {
    return (
      <Layout>
        <h1>Search</h1>
        <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
        <form className="sort-container" onSubmit={this.handleSubmit}></form>
        <div className="recipes">
          <div className="detail">
            <div className="name">{recipes.name}</div>
            <div className="user">{`$${recipes.user}`}</div>
            <div className="description">{recipes.description}</div>
            <img className="recipes-detail-image" src={recipes.imgURL} alt={recipes.name} />
            <div className="button-container">
              <button className="ViewDetailsButton"><Link className="ViewDetails" to={`../RecipeDetails/RecipeDetails/${recipes._id}/edit`}>View Details</Link></button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SearchPage