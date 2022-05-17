import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Contacts from './Components/Pages/Contacts'
import Error404 from './Components/Pages/Error404'
import Home from './Components/Pages/Home'
import Profile from './Components/Pages/Profile'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
