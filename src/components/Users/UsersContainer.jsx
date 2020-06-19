import React from "react";
import { connect } from "react-redux";
import UsersFunc from "./UsersFunc";
import { follow, unfollow, followSucces, unfollowSucces, setCurrentPage, toogleIsFollowinProgress, getUsers } from "../../Redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';
import { compose } from "redux";
import { withRedirectComponent } from './../../hoc/withAuthRedirect';
import { getUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from './../../Redux/user-selectors';





class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangedPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersFunc {...this.props} onChangedPage={this.onChangedPage} />
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        //users: getUsersSelector(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};




export default compose(
    connect(mapStateToProps, { follow, unfollow, followSucces, unfollowSucces, setCurrentPage, toogleIsFollowinProgress, getUsers }),
    withRedirectComponent
)
    (UsersContainer)
