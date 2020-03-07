import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src='https://s1.1zoom.ru/big0/543/347654-admin.jpg' />
            </div>
            <div className={s.descriptionUser}>
                descriotion + ava
            </div>
        </div>
    )
}

export default Profileinfo