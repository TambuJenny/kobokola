import React from "react";
import { Link } from "react-router-dom";
import womenHappy from './../img/index/testeadadada.png';

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
      <div className="separator">
       <div className="ligne"></div>
      </div>
        <div className="title">
         <h2>DIVE INTO THE DIGITAL WORLD</h2>
         <div className="outro">
         <Link to = "/"><p ><b>Criar conta</b></p></Link>
         <Link to = "/"><p>Nosso objetivo</p></Link>
         </div>
        </div>
        <div className="slider">
          <img src={womenHappy} alt="" />
        </div>
    </div>
    <div className="compbodybutton">
     <div className="card ">
   <div className="card-title">
    <p>OLA MUNDO</p>
    <img src="" alt="" />
   </div>
   <div className="card-body">

   </div>
     </div>
     <div className="card bordereffect">
   <div className="card-title">
    <p>OLA MUNDO</p>
    <img src="" alt="" />
   </div>
   <div className="card-body">

   </div>
     </div>
     <div className="card bordereffect">
   <div className="card-title">
    <p>OLA MUNDO</p>
    <img src="" alt="" />
   </div>
   <div className="card-body">

   </div>
     </div>
     <div className="card bordereffect">
   <div className="card-title">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, inventore porro ratione cum amet autem nemo laboriosam sunt suscipit esse commodi accusamus.</p>
    <img src="" alt="" />
   </div>
   <div className="card-body">
       <h1>Melhorar o que esta mal</h1>
   </div>
     </div>
    </div>

   </body>
   </div>
  
  )
}