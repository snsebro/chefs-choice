import React, { Component } from 'react';
import '../RecipeDetail/RecipeDetail.scss';

export default class RecipeDetail extends Component {
  render() {
    //   function ScrollToTop() {
    //   const { toTop } = useLocation();
    //   useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [toTop]);
    //   return null;
    // }
    return (
      <div className="recipePage">
        <div className="video overlay">
          <div className="back"><img src="https://static.thenounproject.com/png/1991936-200.png" /></div>
          <div className="playButton"><img src="https://pluspng.com/img-png/play-button-png-play-button-png-picture-1024.png" /></div>
          <img src="https://images.unsplash.com/photo-1578332049773-b6f35e587618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80" />
        </div>
        <div className="title">
          <h2>Recipe Name</h2>
          {/* will need to import chef preview component */}
        </div>
        <div className="prep">

        </div>
        <div className="ingredients dropDown shaddow">
          <h1>What you'll need V</h1>
          <div className="list">
            <h3>Ingredients</h3>
            <ul>
              <li>Ingredient 1</li>
            </ul>
          </div>
          <div className="list">
            <h3>Tools</h3>
            <ul>
              <li>Tool 1</li>
            </ul>
          </div>
        </div>
        <div className="steps dropDown shaddow">
          <h1>What you'll do V</h1>
          <div className="list">
            <h3>Steps</h3>
            <ul>
              <li><span>1</span>Lorem Ipsum</li>
            </ul>
          </div>
        </div>
        <div className="customize dropDown shaddow">
          <h1>Customize V</h1>
          <div className="list">
            <h3>Try some new twists</h3>
            <ul>
              <li>Option 1</li>
            </ul>
          </div>
        </div>  
        <div className="addOns dropDown shaddow">
          <h1>Add-ons V</h1>
          <div className="list">
            <h3>Give these a try</h3>
          </div>
        </div>
        <div className="reviews dropDown shaddow">
        <h1>Reviews V</h1>
        <div className="list">
            <h3>See what others thought</h3>
          </div>
          {/* import and map through review components */}
        </div>
        <div className="pageLink"></div>
        <h3>Top of Page ^</h3>
      </div>
    )
  }
}
