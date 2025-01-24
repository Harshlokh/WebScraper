import React from 'react'
import Scraper from './components/Scraper'
import './App.css'
import FooterCompo from './components/FooterCompo'
import NavbarCompo from './components/NavbarCompo'

const App = () => {
  return (
    <div>
        <NavbarCompo/>
        <Scraper/>
        <FooterCompo/>
    </div>
  )
}

export default App
