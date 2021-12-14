import React from "react";
import './../../styles/components/Video/Video.scss';



export function Video ()
{
 return(
  <div>
    <div className="bodyvideo">
     <video src="https://player.vimeo.com/external/530762731.hd.mp4?s=6ea21e459134b9fe058e1fd1623c1f7a0262f41b&profile_id=175&oauth2_token_id=1460321761"></video>
     <div className="outro">
      <h1>KOBOKOLA</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error, culpa possimus delectus molestias, maiores aut aspernatur porro ab nisi labore minima cumque vero excepturi magni accusamus sequi aperiam sint!</p>
     </div>
    </div>
  </div>
 )
}