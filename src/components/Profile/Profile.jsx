import React from 'react';
import s from './Profile.module.css';
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

    return (
        <div className={s.profileContent}>
            <Profileinfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer foo="bar"/>
        </div>

    )
}

export default Profile