import React from 'react'
import { Link} from 'react-router-dom'
import Search from '../../components/Search'
import "./SearchPage.scss";
import {getRecipes} from '../../services/reviews'

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
    const recipes = await getRecipes()
    console.log(recipes)
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

  // async nextRecipe() {
  //   this.setState((prevState) => ({
  //     currentRecipe: [...prevState.currentRecipe, recipes],
  //   }));
  //   this.setState((prevState) => ({
  //     index: prevState.index + 1, listOfRecipes: [...prevState.listOfRecipes, recipes]
  //   }));
  // }

  // previousRecipe = () => {
  //   this.setState(prevState => ({ index: prevState.index - 1 }));
  // }

  render() {

    const setRecipes = this.state.filteredRecipes ? this.state.filteredRecipes : this.state.recipes

    const RECIPES = setRecipes.map(recipes =>
      <div className='recipe-each'>
        <div className="searchImage">
          <img className="searchimage" src={recipes.image} alt='recipe'/>
          </div>
        <div className="viewDetailsButton"><Link to={`/recipes/${recipes._id}`}>
          <h3>View Details</h3></Link>
        </div>
        <div className="search-page-detail">
          <div className="recipe-title-search">{recipes.title}</div>
          <div className="chef-info-searchpage">
          <img className="chef-search-img" alt='recipe' src={recipes.img} />
            <div className="chefName-search">BY: {recipes.chefName}</div>
            </div>
          <div className="description-search">{recipes.summary}</div>
        </div>
      </div>

      
    )
  

    return (
      <div className="search">
        <h1>Search</h1>
        <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
        <form className="sort-container" onSubmit={this.handleSubmit}></form>
        <div className="recipes">
           {RECIPES}
        </div>
{/*         
        <footer>
        <div className="recipeButton">
         <button className="New" onClick={this.nextRecipe}>Next</button>
            <button className="Prev"  onClick={this.previousRecipe}>Previous</button>
         </div>
        </footer>
         */}
      </div>
      
    )

  }
}
export default SearchPage