import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';
import {addNewPostActionCreator, upDateTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {
    let postsElement = props.state.myPostsData
        .map(p => <Post message={p.message} likesCont={p.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addNewPostActionCreator());
    };
    let onPostChange = () => {
        let textMessage = newPostElement.current.value;
        props.dispatch(upDateTextActionCreator(textMessage))
    }

    return (
        <div className={s.wrapMyPost}>
            <h3>My post:</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts