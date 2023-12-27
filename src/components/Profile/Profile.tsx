import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsItemsType} from "../../index";

export type ProfilePropsType = {
    PostsItems: Array<PostsItemsType>
}

function Profile( { PostsItems }: ProfilePropsType ) {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts PostsItems={PostsItems}/>
        </main>
    );
}

export default Profile;