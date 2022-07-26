import React from "react";
import clc from './Messages.module.css';

const Message =(props) =>{

    return(
        <div className={clc.messegeItem}>{props.message}</div>
    );
}
export default Message;