import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatusHook'
import { memo } from 'react';

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    console.log("ProfileInforender");

    return (
        <div>
            <div>
                <img className={s.pictureTop} src='https://s1.1zoom.ru/big0/543/347654-admin.jpg' />
            </div>
            <div className={s.descriptionUser}>
                <div className={s.userAvatar}>
                    <img src={props.profile.photos.large} alt="vatar" />
                </div>
                <div className={s.descriotion}>
                    <div>
                        <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo