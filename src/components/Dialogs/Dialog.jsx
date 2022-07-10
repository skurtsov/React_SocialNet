import React from "react";
import clc from './Dialog.module.css';

const Dialog =() =>{

    return(
    <div className={clc.dialogContainer}>
        <div className={clc.dialogs}>
                <div className={clc.dialogItem + ' ' + clc.dialogActive}>Игорь</div>
                <div className={clc.dialogItem}>Ваня</div>
                <div className={clc.dialogItem}>Жора</div>
                <div className={clc.dialogItem}> Гуф</div>
    </div>
    <div className={clc.messages}>
        <div className={clc.messegeItem}>Привет</div>
        <div className={clc.messegeItem}>Как дела</div>
        <div className={clc.messegeItem}>Все гуд, а ты</div>
        <div className={clc.messegeItem}>Норм</div>
    </div>
</div>
    );
}
export default Dialog;