import React, { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'
import Hero from './Componets/Hero'
import Main from './Componets/Main'
import Aboutus from './Componets/Aboutus'
import Contact from "./Componets/Contact"
import Planes from './Componets/Planes';
function App() {
  alert("For best experience, it is recommended to use a computer.")
  return (
    
    <>
      <div
        className='App'
      >

        <Header />
        <Hero />
        <Main />
        <Aboutus />
        <Planes />
        <Contact />
      </div >

    </>

  )
}

export default App
