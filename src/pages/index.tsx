import React from "react";
import { Link } from "react-router-dom";
import womenHappy from './../img/index/testeadadada.png';
import { Header } from "../components/Header/Header";
import '../styles/pages/index.scss'

export function Index()
{
 return(
   <div>
     <div className="separator">
       <div className="ligne"></div>
      </div>
   
   <body>
    <Header/>

   <div className="Body">
   <div className="compbodytop">
      
      <div className="title">
       <h2>Construir o futuro utilizando a <label className="orange">tecnologia</label></h2>
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
   </div>

   </body>
   </div>
  
  )
}