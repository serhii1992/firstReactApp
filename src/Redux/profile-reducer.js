const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_NEW_POST = 'ADD-NEW-POST';

let initialState = {
    myPostsData: [
        {message: 'Hello', id: 1, likesCount: 10},
        {message: 'work', id: 2, likesCount: 11},
        {message: 'yoyoyo', id: 3, likesCount: 16},
        {message: 'my posts', id: 4, likesCount: 13},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let addNewPost = {message: state.newPostText, id: 5, likesCount: 0};
            state.myPostsData.push(addNewPost);
            state.newPostText = '';
            return state
        case UPDATE_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
};

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});
export const upDateTextActionCreator = textMessage => ({type: UPDATE_TEXT, newText: textMessage});

export default profileReducer