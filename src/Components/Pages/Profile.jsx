import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const nav = useNavigate()
  return (
    <div>
      Profile
      <button onClick={() => nav('/', { replace: true })}>Click</button>
    </div>
  )
}

export default Profile
