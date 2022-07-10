import React from "react";
import clc from './Content.module.css';
import Post from "./Post";

const Content =() =>{
    //Post generating
    // const rows = [];
    // for (var i = 0; i < 10; i++) {
    //     rows.push(<Post id={i} />);
    // }
    return(
        <div>
        <div  className={clc.obloj}><img src="https://i.pinimg.com/736x/98/b9/52/98b952001792e2b836669abf4d853712.jpg" alt=""/></div>
    <div  className={clc.ava}><img src="https://fotografias.antena3.com/clipping/cmsimages01/2020/05/18/B82DD741-81C0-44E1-85BF-740D933A2763/58.jpg" alt=""/></div>
    <div  >Name+desc</div>
    <div>My posts
        <div >New post</div>

        <Post/>
        <Post id="1" />
        <Post id="2" />
        <Post id="3" />
    </div></div>
    );
}
export default Content;