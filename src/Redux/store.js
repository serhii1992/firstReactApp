import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        profilePage: {
            myPostsData: [
                {message: 'Hello', id: 1, likesCount: 10},
                {message: 'work', id: 2, likesCount: 11},
                {message: 'yoyoyo', id: 3, likesCount: 16},
                {message: 'my posts', id: 4, likesCount: 13},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {
                    name: 'Serhii',
                    id: 1,
                    imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    name: 'Ira',
                    id: 2,
                    imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    name: 'Dron',
                    id: 3,
                    imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    name: 'Yura',
                    id: 4,
                    imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                },
                {
                    name: 'Pasha',
                    id: 5,
                    imgSrc: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'
                }
            ],
            messagesData: [
                {message: 'Ну шо ты', id: 0},
                {message: 'hello', id: 1},
                {message: 'perever', id: 2}
            ],
            newMessageBody: '',
        },
        friends: {
            fridesSitebar: [
                {
                    name: 'igor',
                    id: 1,
                    avatarUserSrc: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
                },
                {name: 'sveta', id: 2, avatarUserSrc: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
                {
                    name: 'egor',
                    id: 3,
                    avatarUserSrc: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'
                }
            ]
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    },
};


window.store = store;
export default store




