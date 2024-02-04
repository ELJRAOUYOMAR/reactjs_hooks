import { useState } from 'react'
import './App.css'
import Effect from './hooks/effect/effect'
import Ref from './hooks/ref/Ref'
import Memo from './hooks/memo/Memo'
import Context from './hooks/context/Context'
import Reducer from './hooks/reducer/Reducer'
import Reducer2 from './hooks/reducer/Reducer2'
import Card from './hooks/context/Card'
// import Context from './hooks/context/Context'

function App() {

  return (
    <>
      {/* <Effect />
      <br />
      <Memo/>
      <br /><br />
      <Ref />
      <br /> */}
      <Context />
      {/* <Reducer /> */}
      <Reducer2 />
      {/* <Card/> */}
    </>
  )
}

export default App
