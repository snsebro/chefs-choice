import React, { Component } from 'react';
import RecipeList from '../../components/RecipeList';
import './Hompage.scss';
import recipes from '../../recipe.json';
import Carousel from '../../components/Carousel/Carousel';
import Inspire from '../../components/shared/Icons/Inspire/Inspire';
import Search from '../../components/shared/Icons/Search/Hero/SearchHero';
import Plan from '../../components/shared/Icons/Plan/Plan';

export default class Hompage extends Component {
  constructor() {
    super()
    this.state = {
      recipes: recipes
    }
  }
  render() {
    return (
      <div className='hompage'>
        <div className='center'>
          <div className='search-plan-inspire'>
           <div className='icon search'><Search /></div>
            <div className='icon inspire'><Inspire /></div>
            <div className='icon plan'><Plan /></div>
          </div>
        </div>
        <div className='top-chefs'>
          <h2>Top Chefs of the Week</h2>
          <button>Find a Chef</button><br/>
            <div className='images'>
              <img src='unkonwn.jpg' /> 
              <img src='unkonwn.jpg' />
              <img src='unkonwn.jpg' />
            </div>
        </div>
        <div className='top-recipes'>
          <h2>The Week's Top Recipes</h2>
            <Carousel recipes={this.state.recipes}/>
        </div>
        <div className='community'>
          <h2>Join Our Community</h2>
        </div>
        <div className='social-links'>
          <h2>Follow us on</h2>
        </div>
      </div>
    )
  }
}
