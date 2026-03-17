import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Services from "./Pages/Services";
import ScrollToTop from './Components/ScrollToTop';

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>} />

        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
