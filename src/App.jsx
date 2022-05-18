import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainNav from './Components/MainNav'
import Contact from './Components/Pages/Contact'
import Home from './Components/Pages/Home'
//ဟိုဘက် က Export default လုပ်ထားဖို့တော့လိုအပ်ပါတယ်
const LazyComponents = React.lazy(() => import('./Components/Pages/About'))
//components ကို တိုက်ရိုက်ကြီး Render မလုပ်ပြတော့ဘူး Component ထဲမှာ Element တွေများတယ်ဆိုရင် များတဲ့ ကောင်တွေ Render လုပ်ပြီးမှ ဒိကောင်ကို Render ခြပြပါတယ် API က Data တွေအတွက်တော့ မဟုတ် ပါဘူး

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainNav />}>
          <Route index element={<Home />} />{' '}
          <Route path="home" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<h1>please wait</h1>}>
                <LazyComponents />
              </React.Suspense>
            }
          />
          <Route path="contact/:id/:name" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
