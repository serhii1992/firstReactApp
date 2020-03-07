import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {
    return (
        <div className={s.profileContent}>
            <Profileinfo/>
            <MyPosts state={props.profilePage}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>

    )
}

export default Profile