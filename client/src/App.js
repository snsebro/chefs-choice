import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/Hompage'
import ChefPage from './pages/chef-page/ChefPage'
import ChefProfile from './pages/chef-profile/ChefProfile'
import SearchPage from './pages/search-page/SearchPage'
import RecipeDetail from './pages/RecipeDetail/RecipeDetail'

import './App.css';

function App() {
  return (
    <div>
      <Layout />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/search' component={SearchPage} />
        <Route path='/chefs' component={ChefPage}/>
        <Route path='/chef/:name' component={ChefProfile}/>
        <Route path='/recipes/:id' component={RecipeDetail}/>
      </Switch>
    </div>
  );
}

export default App;
