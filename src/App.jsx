import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import ComponentsOne from './Components/Pages/ComponentsOne'
import ComponentsTwo from './Components/Pages/ComponentsTwo'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<ComponentsOne />} />
          <Route path="one" element={<ComponentsOne />} />
          <Route path="Two" element={<ComponentsTwo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
