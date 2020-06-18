import React from 'react'
import Nav from './Nav'

export default function Layout(props) {
  return (
    <div>
       <Nav />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
  )
}
