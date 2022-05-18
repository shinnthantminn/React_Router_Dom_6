import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const { id, name } = useParams() //Router က :id/:name ဆိုပြီ params ကို useParams နဲ့ ဖမ်းပေးလိုက်ပါ့မယ်
  return (
    <div>
      Contact {id} {name}
    </div>
  )
}

export default Contact
