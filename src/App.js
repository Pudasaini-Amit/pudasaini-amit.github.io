import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';



function App() {
  return (
    
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
