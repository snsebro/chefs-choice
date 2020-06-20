import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Carousel/RecipeCard.scss';
import bookmark from '../../assets/bookmark.png'


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
                <div className="mealPhoto"><img src={recipe.image} /></div>
                <div className="bookmark"><img src="bookmark" /></div>
                <Link><div className="recipeName"><p>{recipe.title}</p></div></Link>
                </div>
              ) 
        
      })
    
        }
      </>
    )
  }
}
