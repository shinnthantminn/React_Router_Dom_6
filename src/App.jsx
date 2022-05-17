import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Contacts from './Components/Pages/Contacts'
import Home from './Components/Pages/Home'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
