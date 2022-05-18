import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [quert, setQuery] = useSearchParams() //query ဖမ်းဖို့ နဲ့ Query ပိုဖို့ပါ အသုံးအရမ်းဝင်ပါတယ်
  const name = quert.get('name')
  const age = quert.get('age')
  return (
    <div>
      <h1>
        Home {name} {age}
      </h1>
      <button onClick={() => setQuery({ name: 'Shinn Thant Minn', age: 19 })}>
        Search
      </button>
    </div>
  )
}

export default Home
