import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <NavLink to={'one'}>One</NavLink>
      <NavLink to="two">Two</NavLink>
    </div>
  )
}

export default Nav
