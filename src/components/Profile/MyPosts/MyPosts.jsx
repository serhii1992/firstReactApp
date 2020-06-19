import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from './../../../utils/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';


const maxLengthValidator = maxLengthCreator(20)

let TextPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={"Post messange"} name={"newPostText"} validate={[required, maxLengthValidator]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form >
    )
};

TextPostForm = reduxForm({ form: "newPostForm" })(TextPostForm)



class MyPosts extends React.Component {


    postsElement = this.props.posts
        .map(p => <Post message={p.message} likesCont={p.likesCount} />);


    addPost = (value) => {
        this.props.addPost(this.value.newPostText);
    };
    render() {
        console.warn(this.props);
        console.log('MyPostsRENRER');
        
        return (
            <div className={s.wrapMyPost}>
                <h3>My post:</h3>
                <TextPostForm onSubmit={this.addPost} />
                <div className={s.posts}>
                    {this.postsElement}
                </div>
            </div>
        )
    }
}

export default MyPosts