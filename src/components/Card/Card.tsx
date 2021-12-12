import React from "react";
import { Link } from "react-router-dom";
import './../../styles/components/Card/Card.scss'
  
interface IntefCard 
{
  border:boolean;
  title?: string;
  description: string;
  link?:string;
  button: boolean;

}

export function Card (children:IntefCard)
{
 

 return(
    <div>
     <div className={ children.border ? "card bordereffect":"card"} onMouseEnter={(e)=>{
      var element = e.currentTarget.getElementsByClassName('card'); 
      
     }}>
 <div className="card-title">
  <p>{children.description || ""}</p>
  <img src="" alt="" />
 </div>
 <div className="card-body">
   <Link to="/"><h1>{children.title || ""}</h1></Link>
 </div>
   </div>
    </div>
  )
}