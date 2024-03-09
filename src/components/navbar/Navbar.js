import React from "react";
import "./Navbar.css";
import logo from "./logo.jpg";
import 'font-awesome/css/font-awesome.min.css';


function Navbar(){
   return(
    <header>
    <div id="navbar">
        <div id="name">
           <a href="home"> <img src={logo} alt="image"/></a>
            <h2 style={{color:"white" }}>AMIT PUDASAINI</h2>
        </div>
        <div className="navlinks">
            <ul>
                <li><a href="about">About Me</a></li>
                <li><a href="experience">Experience</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
        <div className="hamburger">
            <i className="fa fa-bars" style={{color:"white"}}></i>
        </div>
    </div>
</header>
   )
}
export default Navbar;