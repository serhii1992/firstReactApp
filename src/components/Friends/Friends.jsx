import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    debugger
    let friendUser = props.state.fridesSitebar
        .map(f => <Friend name={f.name} imgSrc={f.avatarUserSrc}/>);
    return (
        <div className={s.wrappSitebar}>
            <h3>Friends</h3>
            <div className={s.wrappUsers}>
                {friendUser}
            </div>
        </div>
    )
}

export default Friends