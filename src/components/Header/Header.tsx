import React from "react";
import "./../../styles/components/Header/Header.scss"
import {Link} from "react-router-dom";



export function Header()
{
 return(
  <div>
      <div className="Header">
    <div className="compheader">
       <div className="logo">
           <h3>KOBOKOLA </h3>
       </div>
       <div className="links">
         <Link to = "/"><p>COURSES</p></Link>
         <Link to = "/"><p>MENTORS</p></Link>
         <Link to = "/"><p>ABOUT</p></Link>
       </div>
        <div className="outro">
        <Link to = "/"><p>SINGUP</p></Link>
      </div>
    </div>
   </div> 
  </div>
 )
}