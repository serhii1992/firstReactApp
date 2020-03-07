import React from 'react';
import s from "../Friends.module.css";
import {NavLink} from "react-router-dom";

const Friend= (props)=>{
    return(
        <div className={s.wrappUser}>
            <NavLink to=""><img src={props.imgSrc}/></NavLink>
            <div>{props.name}</div>
        </div>
    )
}

export default Friend