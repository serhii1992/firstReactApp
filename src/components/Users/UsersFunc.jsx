import React from 'react';
import s from "./UsersFunc.module.css";
import User from "./User/User";
import Paginator from '../common/Paginator/Paginator';

const UserFunc = ({totalUsersCount,pageSize,currentPage,onChangedPage, ...props}) =>{
    
    let renderUsers = () => {
    
        return (
            props.users.map(u => {
                return <User 
                user={u} 
                follow={props.follow} 
                unfollow={props.unfollow} 
                followSucces={props.followSucces} 
                unfollowSucces={props.unfollowSucces} 
                toogleIsFollowinProgress={props.toogleIsFollowinProgress}
                followingInProgress={props.followingInProgress}/>
            })
        )
    };


   
    return (
        <div>
            <h1>Users</h1>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage } onChangedPage={onChangedPage}/>
            <div>{renderUsers()}</div>
        </div>
    )
}

export default UserFunc