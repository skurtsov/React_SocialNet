import {renderTree} from '../render.js';
let state={ 
    diags :[
    {name:"Саша" ,id:1},
    {name:"Ваня" ,id:2},
    {name:"Даша" ,id:3},
    {name:"Кеша" ,id:4},
    {name:"Лена" ,id:5},
  
    ],
    posts :[
        {id:1, post:"Hello"},
        {id:2, post:"My Post"},
        {id:3, post:"I am alone =("},
]
}

export const addPost = (nameu) => {
    let postobj = {
        id:4,
        post:nameu,
    }
    state.posts.push(postobj);
   // alert(state);
    renderTree(state);
}
export default state;