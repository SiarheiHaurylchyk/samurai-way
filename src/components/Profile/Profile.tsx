import React from 'react';
import style from "./MyPosts/MyPosts.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <main className={style.main}>
            <img src="https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg" alt="main-img"/>

           <MyPosts/>
        </main>
    );
}

export default Profile;