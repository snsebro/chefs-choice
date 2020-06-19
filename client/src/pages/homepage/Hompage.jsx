import React, { Component } from 'react'
import RecipeList from '../../components/RecipeList'
import './Hompage.scss'
import recipes from '../../recipe.json'
import Carousel from '../../components/Carousel/Carousel'
import RecipeCard from '../../components/Carousel/RecipeCard'

export default class Hompage extends Component {
  render() {
    return (
      <div className='hompage'>
        <div className='center'>
          <div className='search-plan-inspire'>
           <div className='icon search'></div>
            <div className='icon inspire'></div>
            <div className='icon plan'></div>
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
          <div className='recipes'>
            <Carousel>
              <RecipeCard recipes={recipes}/>
            </Carousel>
            {/* {recipes.map(recipe => 
              <div className='recipe'>
                <img src={recipe.image}/>
                {recipe.title}
              </div>
            )} */}
          </div>
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
