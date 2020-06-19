import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileUser, getUserStatus, updateUserStatus } from './../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

    componentDidMount() {
        
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizeUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileUser(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        console.log('ProfileContainer');
        
        return (
            <Profile  {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizeUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getProfileUser, getUserStatus, updateUserStatus }),
    withRouter
)(ProfileContainer)

