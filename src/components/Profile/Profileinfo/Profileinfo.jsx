import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusHook from './ProfileStatusHook'
import userPhoto from '../../../assets/img/userAvatar.png'

const Profileinfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.pictureTop} src='https://s1.1zoom.ru/big0/543/347654-admin.jpg' />
            </div>
            <div className={s.descriptionUser}>
                <div className={s.userAvatar}>
                    <img src={props.profile.photos.large || userPhoto} alt="vatar" />
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