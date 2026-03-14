import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Services from "./Pages/Services";

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
