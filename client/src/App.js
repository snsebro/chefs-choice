import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Homepage from './pages/homepage/Hompage'
import ChefPage from './pages/chef-page/ChefPage'
import ChefProfile from './pages/chef-profile/ChefProfile'
import SearchPage from './pages/search-page/SearchPage'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'
import recipes from './recipe.json'


import './App.css';

class App extends Component {
  constructor() {
    super();

  }

  async componentDidMount() {
    this.setState({ recipes })
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
          <Route path="/recipes/:id" render={(props) => <RecipeDetail recipes={this.state.recipes} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
