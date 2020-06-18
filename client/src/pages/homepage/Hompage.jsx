import React, { Component } from 'react'
import './Hompage.scss'

export default class Hompage extends Component {
  render() {
    return (
      <div className='hompage'>
        <div className='search-plan-inspire'>
          <div className='search'></div>
          <div className='plan'></div>
          <div className='inspire'></div>
        </div>
        <div className='top-chefs'>
          <h1>Top Chefs of the Week</h1>
          <button>Find a Chef</button><br/>
          <img src='unkonwn.jpg'/> <img src='unkonwn.jpg'/> <img src='unkonwn.jpg'/>
        </div>
        <div className='top-recipes'>
          <h1>The Week's Top Recipes</h1>
        </div>
        <div className='community'>
          <h1>Join Our Community</h1>
        </div>
        <div className='social-links'>
          <h1>Follow us on</h1>
        </div>
      </div>
    )
  }
}
