import React from "react";
import "./Contact.css";



function Contact(){
   return(
         <div id="container">
            <center><h1>  Get In Touch</h1></center>
            <div id="contact">
               <div className="left">
                  <form action="#" method="post" class="form">
                     <div id="inputs">
                           <div>
                              <input 
                                 name="name" 
                                 type="text" 
                                 className="form-control" 
                                 id="name" 
                                 placeholder="Full Name" required/>
                           </div>
                           <div>
                              <input 
                                 type="email" 
                                 name="email" 
                                 className="form-control" 
                                 id="mail" 
                                 placeholder="Email" required/>
                           </div>

                           <div>
                              <input 
                                 type="tel" 
                                 className="form-control"
                                 id="phone" 
                                 name="phone" 
                                 placeholder="Phone Number"
                                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                           </div>
                     </div>
                           <div id="message">
                              <textarea name="message" rows="7" className="formcontrol" id="comment" placeholder="Your query here..."></textarea>
                           </div>
                  </form>
                  <button type="submit" className ="btn">Send</button><br/>
               </div>
               
               <div className="right">
                  <div className="contact_details">
                        <div>
                           <h3>Location</h3>
                           <p>Sydney, Australia</p>
                        </div>
                        <div>
                           <h3>Phone Number</h3>
                           <p>(+61) 452282434</p>
                        </div>
                        <div>
                           <h3>Email Address</h3>
                           <p>pudasaini.amit@outlook.com</p>
                        </div>
                  </div>
               </div>
            </div>
         </div>
   )
}

export default Contact;