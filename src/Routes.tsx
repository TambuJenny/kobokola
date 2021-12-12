import { BrowserRouter,Route} from "react-router-dom";

import {Index} from "./pages/index";


export default function Routers ()
{
 return(
    <BrowserRouter>  
         <Route path = "/" exact component = {Index}></Route> 
    </BrowserRouter>
 )
}