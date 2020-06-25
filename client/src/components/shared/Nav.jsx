import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import { ReactComponent as Search } from '../../assets/white-search-icon.svg'
import { ReactComponent as Bookmark } from '../../assets/white-bookmark-icon.svg'
import {ReactComponent as Home} from '../../assets/white-home-icon.svg'
import './Nav.scss'
import Logo from '../../components/shared/Icons/Logo/Logo'

export default function Nav() {
  return (
    <nav>
    <div className="nav">
        <NavLink className="logo" to="/create-recipe">
          <div className='menu-toggle'>
            <input type='checkbox' />
            <span></span>
            <span></span>
            <span></span>
           
          </div>
        </NavLink>
          <Link to='/'><Logo /></Link>
        <div className="links">
          <NavLink className="link" to="/search">
            <Search className='nav-icon'/>  
          </NavLink>
          <NavLink className="link" to="">
            <Bookmark className='nav-icon'/>
          </NavLink>
          <NavLink className="link" to="/">
            <Home className='nav-icon'/>
          </NavLink>
        </div>
    </div>
</nav>
  )
}
