import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainNav from './Components/MainNav'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />{' '}
          {/* index Initial Route ကို Render ချရင်အရင်စပေါ် ခြင်တဲ့ Components ကိုချပေးထားတာ */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
