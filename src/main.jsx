import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar />
   <App />
   <Footer />
  </React.StrictMode>,
)
