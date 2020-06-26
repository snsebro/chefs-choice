import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Carousel/RecipeCard.scss';
import {ReactComponent as Bookmark2} from '../../assets/bookmark - Disabled.svg'
// import Bookmark from '../shared/Icons/Bookmark/Disabled/Bookmark'


export default class RecipeCard extends Component {
  render() {
    return (
      <>
        {
          this.props.recipes &&
          this.props.recipes
            .filter((recipe, idx) => idx < 4)
            .map((recipe, index) => {
           
              return (
              <div className="card" key={index}>
                  <div className="mealPhoto">
                    <img src={recipe.image} alt='recipe'/>
                  </div>
                  <div className="bookmark">
                    <Bookmark2 />
                  </div>
                  <Link to={`/recipes/${recipe._id}`}>
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
