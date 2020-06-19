import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Carousel/RecipeCard.scss';

export default class RecipeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="mealPhoto"><img src="https://images.unsplash.com/photo-1578332049773-b6f35e587618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80" /></div>
        <div className="bookmark"><img src="https://img.icons8.com/carbon-copy/2x/bookmark-ribbon.png" /></div>
        <Link><div className="recipeName"><p>recipe name</p></div></Link>
      </div>
    )
  }
}
