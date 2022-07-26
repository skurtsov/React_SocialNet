import React from "react";
import { NavLink } from "react-router-dom";
import clc from './Dialog.module.css';
import Message from "./Messages/Messages";

const Chat = (props) =>{
    let path = "/dialog/"+props.id;

    return(
        <div className={clc.dialogItem + ' ' + clc.dialogActive}>
                <NavLink to={path} >{props.name}</NavLink>
                </div>
    );
}
const Dialog =(props) =>{

    let dialogs_arr = props.messages.map((el)=>{
        return <Chat name={el.name} id={el.id}/>
    });
    return(
    <div className={clc.dialogContainer}>
        <div className={clc.dialogs}>
            {dialogs_arr}

                
                
       
    </div>
    <div className={clc.messages}>
        <Message message="Hello"/>
        <Message message="Hello"/>
        <Message message="How are you?"/>
   </div>
</div>
    );
}
export default Dialog;