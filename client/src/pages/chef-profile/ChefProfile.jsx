import React, { Component } from 'react';
import Layout from '../../components/shared/Layout'
import '../chef-page/ChefProfile.scss'
import data from '../../recipe.json'
import '../..Cheflist.jsx'

export default class ChefProfile extends Component {
  contructor() {
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
    const chefProfile = chefList.map(chef => {
      return (
        <div className='container'>
          <img src={`${chefProfile.picture.large}`} />
          <span>{`${chefProfile.name.title} ${chefProfile.name.first} ${chefProfile.name.last}`}</span>
          <section className="description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum."
        </section>
          <div className="navigateBack">
            <Link to="/"> Back to Chef Page </Link>
          </div>
        </div>
      )
    }
    )
  }
}

export default ChefProfile;