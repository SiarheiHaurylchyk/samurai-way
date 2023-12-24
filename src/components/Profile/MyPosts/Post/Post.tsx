import React from 'react';
import style from "./Post.module.css"

type propsType = {
    text: string
    like:number
}
function Post({text,like}:propsType) {
    return (
        <div className={style.item}>
            <img src="https://e7.pngegg.com/pngimages/157/327/png-clipart-computer-icons-encapsulated-postscript-social-media-ninja-avatar-hand-typography.png" alt="avatar"/>
            {text}
            <div>
                <span> Like {like} </span>
            </div>
        </div>
    );
}

export default Post;