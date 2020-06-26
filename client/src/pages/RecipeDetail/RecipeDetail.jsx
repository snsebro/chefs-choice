import React, { Component } from "react";
import "../RecipeDetail/RecipeDetail.scss";
import Bookmark from "../../assets/bookmark.png";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import {  getRecipes, deleteRecipe } from '../../services/reviews'
import {Redirect} from 'react-router-dom'
class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: [],
      deleted: false
    }
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    this.setState({ recipes })

    let id = this.props.match.params.id

    const recipePage = this.state.recipes.filter(recipe =>
      recipe._id === id)

    this.setState({
      recipe: recipePage
    })

  }

  render() {
    let { recipe } = this.state;

    if (this.state.deleted) {
      return <Redirect to='/'/>
    }

    return (
      <>
        {recipe[0] &&
          <div className="recipePage">
            <div className="overlay">
              <div className="back">
                <img alt='play button' src="https://static.thenounproject.com/png/1991936-200.png" />
              </div>
              <div className="playButton">
                <img alt='video' src="https://pluspng.com/img-png/play-button-png-play-button-png-picture-1024.png" />
              </div>
              <div className="bookmarkIcon">
                <img alt='bookmark' src={Bookmark} />
              </div>
              <div className="video">
                {recipe[0] &&
                  <img alt='recipe' src={recipe[0].image} />}
              </div>
            </div>

            <div className="title">
              <h2>{recipe.title}</h2>
            </div>
            <div className="prep"></div>
            <div className="ingredients dropDown shaddow">
              <h1>What you'll need</h1>
              <div className="list">
                <h3>Ingredients</h3>
                <ul>
                  {recipe[0] &&
                    recipe[0].ingredients.map((ingredient, index) => {
                      return <li key={index}>{ingredient.original}</li>
                    })
                  }
                </ul>
              </div>
              <div className="list">
                <h3>Tools</h3>
                <ul>
                  {recipe[0] &&
                    recipe[0].Equipment.map((equipment, index) => {
                      return <li key={index}>{equipment.name}</li>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="steps dropDown shaddow">
              <h1>What you'll do</h1>
              <div className="list">
                <h3>Steps</h3>
                <ul>
                  {recipe[0] &&
                  
                    recipe[0].steps.map((step, index) => {
                      return <li key={index}>{step.step}</li>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="button-container">
              <button className="edit-button"><Link className="edit-link" to={`/recipes/${recipe[0]._id}/edit`}>Edit</Link></button>
            <button className="delete-button"
              onClick={() => { return deleteRecipe(recipe[0]._id), this.setState({deleted: true})}}>Delete</button>
            </div>
            <div className="pageLink"></div>
            <h3>Top of Page ^</h3>
          </div>
        }
        </>
    );
  }
}

export default withRouter(RecipeDetail)
