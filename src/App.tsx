import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {messagesDataType, PostsItemsType, usersDataType} from "./index";



export type AppPropsType = {
    usersData: Array<usersDataType>,
    messagesData: Array<messagesDataType>,
    PostsItems: Array<PostsItemsType>
}

function App({messagesData,usersData,PostsItems}:AppPropsType) {

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Nav/>

            <div className="app-wrapper-content">
                <Route exact path={"/"} render={()=><Profile PostsItems={PostsItems }/>} />
                <Route exact path={"/dialogs"} render={() => <Dialogs messagesData={messagesData} usersData={usersData} />} />
                <Route exact path={"/news"} render={()=><News/>} />
                <Route exact path={"/music"} render={()=><Music/>} />
                <Route exact path={"/settings"} render={()=><Settings/>} />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
