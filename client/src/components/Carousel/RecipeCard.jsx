import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Carousel/RecipeCard.scss';
import bookmark from '../'

export default class RecipeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="mealPhoto"><img src="" /></div>
        <div className="bookmark"><img src="" /></div>
        <Link><div className="recipeName"><p>recipe name</p></div></Link>
      </div>
    )
  }
}
