import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

function Dialogs() {
    return (

            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    <DialogItem name="Sacha" id={1}/>
                    <DialogItem name="Natacha" id={2}/>
                    <DialogItem name="Sergey" id={3}/>
                    <DialogItem name="Andrey" id={4}/>

                </div>
                <div className={style.dialogsMesage}>
                    <div className={style.dialogMessage}>Привет</div>
                    <div className={style.dialogMessage}>Как дела?</div>
                    <div className={style.dialogMessage}>Что нового?</div>
                    <div className={style.dialogMessage}>Как прошел день?</div>
                </div>
            </div>

    );
}

export default Dialogs;