import React from 'react';
import {NavLink} from "react-router-dom";

type propsType={
    name:string,
    id:number
}

function DialogItem({name,id}:propsType) {
    return (
        <div>
            <NavLink to={"/dialogs/"+id}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;