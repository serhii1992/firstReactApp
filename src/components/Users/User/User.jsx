import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/img/userAvatar.png'
import { NavLink } from 'react-router-dom';

class User extends React.Component {

    render() {
        return (
            <div className={s.userContainer}>
                <div className={s.userImg}>
                    <NavLink to={`/profile/ ${this.props.user.id}`}>
                        <img src={this.props.user.photos.small !== null
                            ? this.props.user.photos.small
                            : userPhoto} />
                    </NavLink>
                    <div>
                        {this.props.user.followed
                            ? <button disabled={this.props.followingInProgress.some(id => id === this.props.user.id)}
                                onClick={() => {
                                    this.props.unfollow(this.props.user.id)
                                }}>Unfollow</button>

                            : <button disabled={this.props.followingInProgress.some(id => id === this.props.user.id)}
                                onClick={() => {
                                    this.props.follow(this.props.user.id)
                                }}>Follow</button>}
                    </div>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userInfo_name}>
                        <div>{this.props.user.name}</div>
                        <div>{this.props.user.status}</div>
                    </div>
                    <div className={s.userInfo_locatiot}>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User