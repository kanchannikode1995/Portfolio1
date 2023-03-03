import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />

    </>
  )
}

export default App
