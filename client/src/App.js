import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Homepage from './pages/homepage/Hompage'
import ChefPage from './pages/chef-page/ChefPage'
import ChefProfile from './pages/chef-profile/ChefProfile'
import SearchPage from './pages/search-page/SearchPage'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
import RecipeEdit from './pages/RecipeDetail/RecipeEdit'
import CreateRecipe from './pages/CreateRecipe/CreateRecipe'
import { getRecipes } from './services/reviews'

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    this.setState({ recipes })
  }

  updateRecipes = async () => {
    const recipes = await getRecipes()
    return recipes
  }

  render() {
  
    return (
      <div>
        <Layout />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/search' component={SearchPage} />
          <Route exact path='/chefs' component={ChefPage} />
          <Route path='/chefs/:name' component={ChefProfile} />
          <Route exact path='/recipes/:id' render={(props) => <RecipeDetail recipes={this.state.recipes} updateRecipes={this.updateRecipes} />} />
          <Route path='/chefs/recipes/:id' render={(props) => <RecipeDetail recipes={this.state.recipes} updateRecipes={this.updateRecipes} />} />
          <Route exact path='/recipes/:id/edit' render={(props) => <RecipeEdit updateRecipes={this.updateRecipes} />} />
          <Route path='/create-recipe' component={CreateRecipe}/>
        </Switch>
      </div>
    );
  }
}

export default App;
