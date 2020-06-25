import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import RecipeList from '../../components/RecipeList';
import './Hompage.scss';
import {getRecipes} from '../../services/reviews'
import Carousel from '../../components/Carousel/Carousel';
import Inspire from '../../components/shared/Icons/Inspire/Inspire';
import Search from '../../components/shared/Icons/Search/Hero/SearchHero';
import Plan from '../../components/shared/Icons/Plan/Plan';

export default class Hompage extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    console.log(recipes)
    this.setState({ recipes })
  }


  render() {
    return (
      <div className='hompage'>
        <div className='center'>
          <div className='search-plan-inspire'>
           <div className='icon search'><Search /></div>
            <div className='icon inspire'><Inspire /></div>
            <div className='icon plan'><Plan /></div>
          </div>
        </div>
        <div className='top-chefs'>
          <h2>Top Chefs of the Week</h2>
          <Link to='/chefs'><button>Find a Chef</button></Link><br/>
            <div className='images'>
              <div className='chef'>
                <div className='chef-face' style={{backgroundImage: `url("https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`}}></div>
                <div className='chef-name'>
                  <h5>Benny Hana</h5>
                </div>
              </div>
              <div className='chef'>
              <div className='chef-face'
              style={{backgroundImage: `url("https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`}}></div>
                <div className='chef-name'>
                  <h5>Ramsey Gordon</h5>
                </div>
              </div>
              <div className='chef'>
              <div className='chef-face'
              style={{backgroundImage: `url("https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`}}></div>
                <div className='chef-name'>
                  <h5>Tina Snow</h5>
                </div>
              </div>
            </div>
        </div>
        <div className='top-recipes'>
          <h2>The Week's Top Recipes</h2>
            <Carousel recipes={this.state.recipes}/>
        </div>
        <div className='community'>
          <h2>Join Our Community</h2>
          <div className="community-carousel">
            {/* <img src={this.state.recipes[0].image} alt=""/>
            <img src={this.state.recipes[1].image} alt="" />
            <img src={this.state.recipes[2].image} alt="" />
            <img src={this.state.recipes[3].image} alt=""/>
            <img src={this.state.recipes[4].image} alt="" />
            <img src={this.state.recipes[5].image} alt=""/> */}
          </div>
        </div>
        <div className='social-links'>
          <h2>Follow us on</h2>
        </div>
      </div>
    )
  }
}
