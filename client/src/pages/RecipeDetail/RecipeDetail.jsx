import React, { Component } from "react";
import "../RecipeDetail/RecipeDetail.scss";
import Bookmark from "../../assets/bookmark.png";
import { withRouter } from 'react-router-dom';
class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    }
  }
  async componentDidMount() {
    let id = this.props.match.params.id
    console.log(typeof(id))
    console.log(this.props.recipes)
    const recipe = this.props.recipes.filter(recipe =>
      recipe.id === +id)
    console.log(recipe)
    this.setState({
      recipe: recipe[0]
    })
    console.log(recipe)
  }
  
  render() {
    let {recipe}= this.state;
    console.log(this.state.recipe.ingredients[0].name)

    //   function ScrollToTop() {
    //   const { toTop } = useLocation();
    //   useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [toTop]);
    //   return null;
    // }
    return (
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
            <img src="" />
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
              {/* {
                this.state.recipe.ingredients.map(ingredient => {
                  return <p>{ingredient.original}</p>
                })
              } */}
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
              <li>
                <span>1</span>Lorem Ipsum
              </li>
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
    );
  }
}

export default withRouter(RecipeDetail)
