import React from "react";
import "./Project.css";
import BmiCalculator from "../../components/bmi/BMI";

function Project() {
   return (
     <div id="container">
         <center><h1>Projects</h1></center>
         <div id="projects">
            <div className="card">
               <BmiCalculator/>
            </div>

         </div>

     </div>
   )
 }
 
 export default Project;