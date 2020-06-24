import React, { Component } from "react";
import "../RecipeDetail/RecipeDetail.scss";
import Bookmark from "../../assets/bookmark.png";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { getReviews, getRecipes, deleteRecipe } from '../../services/reviews'
import Review from '../../components/Review/Review'
import ReviewCreate from "../../components/Review/ReviewCreate";
class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: []
    }
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    console.log(recipes)
    this.setState({ recipes })

    let id = this.props.match.params.id
    console.log(id)

    const recipePage = this.state.recipes.filter(recipe =>
      recipe._id === id)
    console.log(recipePage)

    this.setState({
      recipe: recipePage
    })

    // const newReviews = await getReviews()
    // this.setState({
    //   reviews : newReviews
    // })
    // console.log(newReviews)

  }

  render() {
    let { recipe } = this.state;
    // console.log(recipe.ingredients)

    //   function ScrollToTop() {
    //   const { toTop } = useLocation();
    //   useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [toTop]);
    //   return null;
    // }
    return (
      <>
        {recipe[0] &&
          <div className="recipePage">
            <div className="overlay">
              <div className="back">
                <img src="https://static.thenounproject.com/png/1991936-200.png" />
              </div>
              <div className="playButton">
                <img src="https://pluspng.com/img-png/play-button-png-play-button-png-picture-1024.png" />
              </div>
              <div className="bookmarkIcon">
                <img src={Bookmark} />
              </div>
              <div className="video">
                {recipe[0] &&
                  <img src={recipe[0].image} />}
              </div>
            </div>

            <div className="title">
              <h2>{recipe.title}</h2>
              {/* will need to import chef preview component */}
            </div>
            <div className="prep"></div>
            <div className="ingredients dropDown shaddow">
              <h1>What you'll need V</h1>
              <div className="list">
                <h3>Ingredients</h3>
                <ul>
                  {recipe[0] &&
                    recipe[0].ingredients.map((ingredient) => {
                      return <li>{ingredient.original}</li>
                    })
                  }
                </ul>
              </div>
              <div className="list">
                <h3>Tools</h3>
                <ul>
                  {recipe[0] &&
                    recipe[0].Equipment.map((equipment) => {
                      return <li>{equipment.name}</li>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="steps dropDown shaddow">
              <h1>What you'll do V</h1>
              <div className="list">
                <h3>Steps</h3>
                <ul>
                  {recipe[0] &&
                    recipe[0].steps.map((step) => {
                      return <li>{step.step}</li>
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="button-container">
              <button className="edit-button"><Link className="edit-link" to={`/recipes/${recipe[0]._id}/edit`}>Edit</Link></button>
              <button className="delete-button" onClick={() => deleteRecipe(recipe[0]._id)}>Delete</button>
            </div>
            <div className="customize dropDown shaddow">
              <h1>Customize V</h1>
              <div className="list">
                <h3>Try some new twists</h3>
                <ul>

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
              <Review reviews={this.state.reviews} />
              {/* import and map through review components */}
            </div>
            <div>
              <ReviewCreate id={recipe[0] && recipe[0].id} />
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
