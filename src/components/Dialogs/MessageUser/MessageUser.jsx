import React from 'react';
import s from './../Dialogs.module.css';

const MessageUser = props => {
    return <div className={s.message}>{props.message}</div>
}

export default MessageUser