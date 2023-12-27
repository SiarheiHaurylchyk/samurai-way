import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsItemsType} from "../../../index";

type MessagePropsType ={
    PostsItems: Array<PostsItemsType>
}
function MyPosts({ PostsItems }: MessagePropsType ) {

    let post;
    if (PostsItems !==undefined) {
         post = PostsItems.map(e => {
            return <Post text={e.text} like={e.like}/>
        })
    }
    return (
        <div className={style.main}>
            <div>
                <div>
                    <textarea name="text" id="textarea" cols={50} rows={2}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.newPost}>New post</div>
            <div className={style.post}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;