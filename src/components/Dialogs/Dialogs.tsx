import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {messagesDataType, usersDataType} from "../../index";


type DialogsProps = {
    usersData: Array<usersDataType>
    messagesData: Array<messagesDataType>
}

function Dialogs({usersData,messagesData}:DialogsProps) {



   let DialogItems = usersData.map(e=>{
       return <DialogItem name={e.name} id={e.id}/>
   })

    let MessagesItem = messagesData.map(e=>{
        return <Message message={e.message} id={e.id}/>
    })
    return (

            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    {DialogItems}
                </div>
                <div className={style.dialogsMesage}>
                    {MessagesItem}
                </div>
            </div>

    );
}

export default Dialogs;