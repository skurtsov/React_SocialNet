import React, { useRef ,useEffect} from 'react';
import clc from './Content.module.css';
import Post from "./Post";

const Content =(props) =>{
   let test = props.posts;

const posts_all = props.posts.map((el)=>{
    console.log('postname', el.post)
    return <Post id={el.id} message={el.post}/>
})
    const  nameRef = React.useRef(null);
    
    let MakePost =()=>{
      
    let q = nameRef.current.value;
    props.addPost(q);
    console.log("new-comp" , props.posts)
      //  alert(txtval);
    }

    return(
        <div>
        <div  className={clc.obloj}><img src="https://i.pinimg.com/736x/98/b9/52/98b952001792e2b836669abf4d853712.jpg" alt=""/></div>
    <div  className={clc.ava}><img src="https://fotografias.antena3.com/clipping/cmsimages01/2020/05/18/B82DD741-81C0-44E1-85BF-740D933A2763/58.jpg" alt=""/></div>
    <div  >Name+desc</div>
    <div>My posts
        <div >New post</div>
        <textarea ref={nameRef} ></textarea>
        <button onClick={MakePost}>Ok</button>

        {posts_all}
    </div></div>
    );
}
export default Content;