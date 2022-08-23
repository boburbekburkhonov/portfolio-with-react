import { useState, useRef } from 'react'
import Header from './Component/Layout/Header'
import Hero from './Component/Hero'
import dataContext from './Context/dataContext'

function App() {

  const main = useRef()

  return (
    <>
      <dataContext.Provider value={{main}}>
        <Header />
        <main ref={main} className='main'>
          <Hero />
        </main>
      </dataContext.Provider>
    </>
  )
}

export default App
