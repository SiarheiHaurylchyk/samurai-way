import React from 'react';
import {messagesDataType} from "../Dialogs";

function Message({message,id}:messagesDataType) {
    return (
        <div key={id}>
            {message}
        </div>
    );
}

export default Message;