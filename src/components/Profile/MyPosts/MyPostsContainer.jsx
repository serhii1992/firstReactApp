import React from 'react';
import {addNewPostActionCreator, upDateTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost(newPostText) {
            dispatch(addNewPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer