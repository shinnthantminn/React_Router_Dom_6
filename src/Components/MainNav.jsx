import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainNav = () => {
  return (
    <div>
      <NavLink to="home">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">contact</NavLink>
      <Outlet />
      {/* Outlet ကတော့ ကျွန်တော် တို့ Relative Route တွေ Render ချဖို့ပါ*/}
    </div>
  )
}

export default MainNav
