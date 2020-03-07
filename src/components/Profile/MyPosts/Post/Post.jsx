import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div>
            <div className={s.myPost}>
                <img src='https://www.b17.ru/foto/uploaded/b69a564c47110acefb8c986f768210ac.jpg'/>
                <span className={s.item}>{props.message}</span>
            </div>
            <div>likes <span>{props.likesCont}</span></div>
        </div>
    )
}

export default Post