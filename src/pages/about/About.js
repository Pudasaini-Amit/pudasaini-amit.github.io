import React from "react";
import "./About.css";



function About(){
   return(
      <div id="about" style={{backgroundColor: "#000013", padding:1}}>
         <h1>About Me</h1>
         <div id="container">
            
                  <div className="left">
                        <p>A graduate software developer form <a href="https://www.scu.edu.au/">Southern Cross University </a> 
                              with specialisation in software developement and project management. I have skills in creating responsive front-end
                              interfaces that imporves user experiences with HTML, CSS, JavaScript and React. Also I have backend skills
                              to ensure realiable functionality and a smooth connection. With a passion and dedication towards technology,
                              I am eager to bring my skills to a team to make an impact in the digital world.<br/>
                        <span>Lets <a href="#contact">connect</a> bring your ideas to life with clean code and dynamic design</span></p>
                  </div>
                  <div className="right">
                        <h2 style={{textAlign:"center"}}>Skills</h2>
                        <ul>
                              <li>Web Developement: HTML, CSS, JavaScript and React</li>
                              <li>Version Control: Github </li>
                              <li>Project Management: Atlassian confluence, Atlassian Jira </li>
                              <li>Desktop apps: Microsoft Office 365</li>
                              <li>Strong understanding in MySQL</li>

                        </ul>

                  </div>
         </div>
      </div> 
   )
}

export default About;