import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import Administration from './Pages/Administration'
import Admission from './Pages/Admission'
import Course from './Pages/Course'
import Contact from './Pages/Contact'
import Career from './Pages/Career'
import Programs from './Pages/Programs'
import Placements from './Pages/Placement'

const App = () => {
  return (
    <>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/administration' element={<Administration />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/course' element={<Course />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/placements' element={<Placements />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />

    </>
  )
}

export default App