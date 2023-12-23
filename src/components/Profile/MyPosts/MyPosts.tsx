import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";


function MyPosts() {
    return (
        <div className={style.main}>
            <div>ava+description</div>
            <div>
                <textarea name="text" id="textarea" cols={50} rows={2}></textarea>
                <button>Add post</button>
            </div>
            <div>New post</div>
            <div className={style.post}>
                    <Post text ="How are you?"/>
                    <Post text ="Hi man"/>
            </div>
        </div>
    );
}

export default MyPosts;