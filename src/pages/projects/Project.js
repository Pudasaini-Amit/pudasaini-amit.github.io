import React from "react";
import "./Project.css";
import BmiCalculator from "../../components/bmi/BMI";

function Project() {
   return (
     <div id="projects">
         <center><h1>Projects</h1></center>
         <div id="container">
            <div className="card">
               <BmiCalculator/>
            </div>

         </div>

     </div>
   )
 }
 
 export default Project;