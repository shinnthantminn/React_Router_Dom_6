import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const nav = useNavigate()
  return (
    <div>
      <h1>home</h1>
      <button onClick={() => nav('/profile')}>profile</button>
    </div>
  )
}

export default Home
