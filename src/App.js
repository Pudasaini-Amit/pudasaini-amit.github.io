import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';


function App() {
  return (
    
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
