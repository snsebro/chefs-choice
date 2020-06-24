import React, { Component } from 'react';
import { withRouter } from 'react-router'
import '../chef-profile/ChefProfile.scss'
import {getRecipes} from '../../services/reviews'
import Carousel from '../../components/Carousel/Carousel';

class ChefProfile extends Component {
  constructor(props) {
      super(props)
      this.state = {
        chefs: [],
        name: '',
      }
  }

  async componentDidMount() {
    const chefs = await getRecipes()
    this.setState({ chefs: chefs })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      chefs: e.target.value
    })
  }

  render() {
    const chef = this.state.chefs.find(chef =>
      chef.chefName === this.props.match.params.name)
    
    const chefRecipes = this.state.chefs.filter(chef => chef.chefName === this.props.match.params.name)
    

        return (
          <>
            {chef && chefRecipes ?
              <div className='recipe'>
                <div className="detail">
                  <div className='chef'>
                    <div className='chef-image' style={{ backgroundImage: `url(${chef.img})` }}></div>
                    <h3>{chef.chefName}</h3>
                  </div>
                  <div className="bio">
                    <h3>Bio</h3>
                    <p>{chef.knownFor}</p>
                    <p>{chef.bio}</p>
                  </div>
                  <div className='chef-recipes'>
                    <h4>Popular Recipes</h4>
                    {/* {chefRecipes.map(recipe => <p key={recipe.id}>{recipe.title}</p>)} */}
                    <Carousel recipes={chefRecipes} />
                    <h4>Bookmarked Recipes</h4>
                    <Carousel recipes={chefRecipes} />
                  </div>
                  <div className='first-time'>
                    <h3>My First Time... in the Kitchen</h3>
                    <div className='first-time-video' style={{ backgroundImage: `url(${chef.img})` }}></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis minima odit voluptatem, dignissimos, ea explicabo officia voluptas consequuntur voluptate harum magni nostrum laudantium cumque ducimus repudiandae placeat incidunt eveniet doloremque!</p>
                  </div>
                </div>
              </div>
              : ''}
            </>
        )
      }
}
    
export default withRouter(ChefProfile);