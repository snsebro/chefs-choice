import React, { Component } from 'react'
import '../Logo/Logo.scss'
import ChefsChoiceLogo from '../Logo/ChefsChoiceLogo.png'

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={ChefsChoiceLogo} alt='logo'/>
      </div>
    )
  }
}
