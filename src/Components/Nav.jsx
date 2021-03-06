import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'one' : 'two')}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        //Custom Class ထည့်တာပါ
        className={({ isActive }) => (isActive ? 'one' : 'two')}
      >
        Contacts
      </NavLink>
    </div>
  )
}

export default Nav

//navlink သုံးရင် ပုံမှန်အားဖြင့် Active Class ပေးထားပါတယ်
