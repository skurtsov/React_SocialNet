import React from "react";
import clc from './Content.module.css';
const Post =(props) =>{
    return(
       <div  className={clc.ava_post}><img src="https://fotografias.antena3.com/clipping/cmsimages01/2020/05/18/B82DD741-81C0-44E1-85BF-740D933A2763/58.jpg" alt=""/>
       <p>{props.message}</p>
       </div>
    );
}
export default Post;