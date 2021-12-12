import React from "react";
import { Link } from "react-router-dom";

import '../styles/pages/index.scss'

export function Index()
{
 return(
  
   <div>
   <header>
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
   </header>
   <body>
    <div className="compbodytop">
        <div className="title">
         <h2>DIVE INTO THE DIGITAL WORLD</h2>
        </div>
        <div className="slider">

        </div>
    </div>
   </body>
   </div>
  
  )
}