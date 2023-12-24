import React from 'react';
import style from "./ProfileInfo.module.css"
function ProfileInfo() {
    return (
        <div className={style.main}>
            <div><img className={style.img} src="https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg" alt="main-img"/></div>
            <h3 className={style.avDesk}>ava+description</h3>
        </div>
    );
}

export default ProfileInfo;