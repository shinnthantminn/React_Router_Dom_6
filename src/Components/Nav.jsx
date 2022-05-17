import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'one' : 'two')}
        replace //သူနောက်မှာဘယ်သူမှ မရှိအောင်လုပ်တာပါ backword ပြန်လုပ်လို့မရအောင်လုပ်တာပါ
      >
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
