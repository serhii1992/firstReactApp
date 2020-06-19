import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogUser = props => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${s.dialogUser}`}>
            <img src={props.imgSrc}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogUser