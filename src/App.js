import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Experience from './pages/experience/Experience';
import Project from './pages/projects/Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
   
    </>
  );
}

export default App;
