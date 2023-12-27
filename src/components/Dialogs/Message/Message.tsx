import React from 'react';
import {messagesDataType} from "../../../index";


function Message({message,id}:messagesDataType) {
    return (
        <div key={id}>
            {message}
        </div>
    );
}

export default Message;