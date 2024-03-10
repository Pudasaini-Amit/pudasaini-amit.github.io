import React from "react";
import "./Footer.css"
import 'font-awesome/css/font-awesome.min.css';







function Footer() {
   return (
            <footer id="footer">
               
                  <div id="social">
                     <a href="https://www.facebook.com/pudasaini.amit/" target="_blank"> <i className="fa fa-facebook" /> </a>
                     <a href="https://twitter.com/Pudasaini_Amit_" target="_blank"> <i className="fa fa-twitter" /> </a>
                     <a href="https://github.com/Pudasaini-Amit" target="_blank" ><i className="fa fa-github"></i></a>
                     <a href="https://github.com/Pudasaini-Amit" target="_blank" ><i className="fa fa-linkedin"></i></a>
                  </div>
               
               <div id="copyright">
                     <p> <span>&copy;</span> <span>Pudasaini Amit</span></p>
                  </div>
            </footer>
   
   );
 }
 
 export default Footer;