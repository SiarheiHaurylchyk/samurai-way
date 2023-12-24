import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type usersDataType = {
    name:string,
    id:number
}
export type messagesDataType={
    message:string,
    id:number
}

function Dialogs() {

    let usersData:Array<usersDataType> = [{name: "Sacha",id: 1},{name:"Natacha" ,id:2},{name:"Sergey" ,id:3},{name:"Andrey" ,id:4}];
    let messagesData:Array<messagesDataType> = [{message: "Привет" ,id:1},{message:"Как дела?" ,id:2},{message:"Что нового?" ,id:3},{message:"Как прошел день?" ,id:4}]

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