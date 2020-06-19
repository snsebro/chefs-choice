import React, { Component } from 'react';
import RecipeCard from '../testFiles/RecipeCard';
import { Link } from 'react-router-dom';
import '../Carousel/Carousel.scss';

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <div className="viewMore"><Link><p>View More Recipes</p></Link></div>
      </div>
    )
  }
}
