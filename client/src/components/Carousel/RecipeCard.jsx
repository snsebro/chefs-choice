import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Carousel/RecipeCard.scss';
import Bookmark from '../shared/Icons/Bookmark/Disabled/Bookmark'


export default class RecipeCard extends Component {
  render() {
    return (
      <>
        {
          this.props.recipes &&
          this.props.recipes
            .filter((recipe, idx) => idx < 4)
            .map((recipe) => {
           
              return (
              <div className="card">
                  <div className="mealPhoto">
                    <img src={recipe.image} />
                  </div>
                  <div className="bookmark">
                    <Bookmark />
                  </div>
                  <Link to={`recipes/${recipe.title}`}>
                    <div className="recipeName"><p>{recipe.title}</p></div>
                  </Link>
              </div>
              ) 
        
      })
    
        }
      </>
    )
  }
}
