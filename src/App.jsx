import { useState, useRef } from 'react'
import Header from './Component/Layout/Header'
import Hero from './Component/Hero'
import Statistics from './Component/Statistics'
import dataContext from './Component/Context/dataContext'

function App() {

  const main = useRef()

  return (
    <>
      <dataContext.Provider value={{main}}>
        <Header />
        <main ref={main} className='main'>
          <Hero />
          <Statistics />
        </main>
      </dataContext.Provider>
    </>
  )
}

export default App
