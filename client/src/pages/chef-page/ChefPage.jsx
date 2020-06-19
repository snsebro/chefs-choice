import React, { Component } from 'react'
import Layout from '.../components/shared/Layout'
import Recipes from '../chef-page/ChefPage.scss'
import data from '.../recipe.json'

export default class ChefPage extends Component {
  constructor() {
    super()
    this.state = {
      chefs: []
    }
  }

  async componentDidMount() {
    const chefs = await data
    this.setState({ chefs })
  }

  render() {
    const { chefList } = this.state.chefs
    const allChefs = chefList.map(chef => {
      return (

        <div className='Chef-List'>
          <h3>This Week's Top Chefs:</h3>

          <div className='general-chef-display'>
            <img className='profile-pic' src={chef.img} />
            <div className='chef-page-info'>
              <h4>{chef.chefName}</h4>
              <button>View Full Profile</button>
            </div>
          </div>
          <p>Known for:{chef.knownFor}</p>
        </div>
      )
    })





    return (
      <Layout>
        <div className='intro-header'>
          <div className='image-cont'>
            <img />
            <img />
          </div>
          <div className='middle-block'>
            <h1>What is a Top Chef?</h1>
          </div>
          <div className='lower-half'>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem.</h4>
            <h6>Join the Program</h6>
          </div>
        </div>

        <div className='spotlight'>
          <h3>Spotlight On:</h3>
          <div className='below-spotlight'>
            <img />
            <div className='chef-page-info'>
              <h4>chef-name</h4>
              <img>social media icons</img>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eget urna risus facilisis sit in fusce.
            </p>
            <button>View Full Profile</button>
          </div>
        </div>

       {allChefs}
      </Layout>
    )
  }
}
