import React from "react";
import { Link } from "react-router-dom";
import womenHappy from './../img/index/testeadadada.png';
import { Header } from "../components/Header/Header";
import '../styles/pages/index.scss'
import { Card } from "../components/Card/Card";
import { Video } from "../components/Video/Video";

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
   
  <Card 
  border={true} 
  description="Saber mais sobre nós. O que queremos ?" 
  title="KOBOKOLA"
  button= {true}
   ></Card>
    <Card 
  border={true} 
  description="Investir na educação de meninas é investir no futuro de uma nação. " 
  title="500"
  button= {true}
   ></Card>
    <Card 
  border={true} 
  description="Saber mais sobre nós. O que queremos ?" 
  title="KOBOKOLA"
  button= {true}
   ></Card> 
  
  
  
  </div>
      <div className="video">
        <Video></Video>
      </div>

   </div>

   </body>
   </div>
  
  )
}