import { userAPI, profileAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { message: 'Hello', id: 1, likesCount: 10 },
        { message: 'work', id: 2, likesCount: 11 },
        { message: 'yoyoyo', id: 3, likesCount: 16 },
        { message: 'my posts', id: 4, likesCount: 13 },
    ],
    profile: null,
    status: 'dfgdfg'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:

            return {
                ...state,
                posts: [...state.posts, { message: action.newPostText, id: 5, likesCount: 0 }]
            }
        // let addNewPost = {message: state.newPostText, id: 5, likesCount: 0};
        // state.posts.push(addNewPost);
        // state.newPostText = '';

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
};

export const addNewPostActionCreator = (newPostText) => ({ type: ADD_NEW_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileUser = (userId) => async (dispatch) => {
    const response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
};


export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
};

export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export default profileReducer