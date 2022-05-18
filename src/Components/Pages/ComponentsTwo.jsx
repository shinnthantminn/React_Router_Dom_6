import { lazy, Suspense } from 'react'
import { useEffect, useState } from 'react'
const Lazyer = lazy(() => import('./APIUser'))

const ComponentsTwo = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    ;(async () => {
      const result = await fetch('https://randomuser.me/api/?results=20')
      const res = await result.json()
      console.log(res)
      setData(res.results)
    })()
  }, [])
  return (
    <div>
      <Suspense fallback={<h1>Hello Please Wait for Api Fetching</h1>}>
        {data.map((i) => (
          <Lazyer data={i} key={i} />
        ))}
      </Suspense>
    </div>
  )
}

export default ComponentsTwo
