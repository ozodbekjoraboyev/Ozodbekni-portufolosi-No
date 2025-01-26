import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router'
import './index.css'
import App from './App.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/main' element={<Main/>}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
  </BrowserRouter>
)
