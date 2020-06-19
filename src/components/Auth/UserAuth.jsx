import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AuthUser.module.css";

const UserAuth = (props) => {
    return (
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>log out</button></div> 
                : <NavLink to={'/login'} >Login</NavLink>}

        </div>
    )
}

export default UserAuth