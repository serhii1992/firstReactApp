import React, { useState, useEffect } from 'react';

const ProfileStatusHook = props => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatuChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        setStatus(props.status)
    })

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}>{props.status}</span>
                </div>}
            {editMode &&
                <div>
                    <input onBlur={deactiveEditMode} autoFocus={true} onChange={onStatuChange} value={status}></input>
                </div>}
        </div>
    )

}

export default ProfileStatusHook