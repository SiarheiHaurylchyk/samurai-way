import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



export type usersDataType = {
    name:string,
    id:number
}
export type messagesDataType={
    message:string,
    id:number
}

export type PostsItemsType={
    text:string,
    like:number
}

let usersData:Array<usersDataType> = [{name: "Sacha",id: 1},{name:"Natacha" ,id:2},{name:"Sergey" ,id:3},{name:"Andrey" ,id:4}];
let messagesData:Array<messagesDataType> = [{message: "Привет" ,id:1},{message:"Как дела?" ,id:2},{message:"Что нового?" ,id:3},{message:"Как прошел день?" ,id:4}];
let PostsItems:Array<PostsItemsType> = [{text:"How are you?", like: 3 },{text:"Hi man", like: 1 },];

ReactDOM.render(
    <App usersData={usersData} messagesData={messagesData} PostsItems={PostsItems}/>,
  document.getElementById('root')
);