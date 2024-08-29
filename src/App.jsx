import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Clients from './Components/Clients/Clients'
import Careers from './Components/Careers/Career'
import Contact from './Components/Contact/Contact'

import './App.css'



function App() {
  return (
    <div className="app">
       <div className="section">

        <Home />
        <About />
        <Services />
        <Clients />
        <Careers />
        <Contact />

       </div>
     
      </div>
  )
}



export default App
