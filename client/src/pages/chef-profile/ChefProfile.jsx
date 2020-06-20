import React, { Component } from 'react';
import { withRouter } from 'react-router'
import '../chef-profile/ChefProfile.scss'
import data from '../../recipe.json'

class ChefProfile extends Component {
  constructor(props) {
      super(props)
      this.state = {
        chefs: [],
        name: ''
      }
  }

  async componentDidMount() {
    this.setState({ chefs: data })
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

        return (
          <>
            {chef ? <div className='recipe'>
              <div className="detail">
                <img src={chef.img} />
                <div className="chefName">{chef.chefName}</div>
                <div className="knownFor">{chef.knownFor}</div>
                <div className="bio">{chef.bio}</div>
              </div>
            </div> : ''}
            </>
        )
      }
}
    
export default withRouter(ChefProfile);