import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export default function Nav() {
  return (
    <nav>
    <div className="nav">
        <NavLink className="logo" to="/">Sandwich Menu</NavLink>
        <div className="links">
            <NavLink className="link" to="/search">Search</NavLink>
            <NavLink className="link" to="/bookmark">Bookmark</NavLink>
            <NavLink className="link" to="/">Home</NavLink>
        </div>
    </div>
</nav>
  )
}
