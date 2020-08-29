import { userAPI } from "../api/api";
import { bindActionCreators } from "redux";





const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROPGRESS = 'TOOGLE_IS_FOLLOWING_PROPGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    fakeNumber: 0
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FAKE":
            return { ...state, fakeNumber: state.fakeNumber + 1 }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROPGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};

export const followSucces = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USER_COUNT, totalCount });
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });
export const toogleIsFollowinProgress = (isFetching, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROPGRESS, isFetching, userId });


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toogleIsFetching(true))
    const response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
    dispatch(toogleIsFetching(false))
};

export const followUnfolow =  async (dispatch, userId, apiMhetod,actionCreator) => {

    dispatch(toogleIsFollowinProgress(true, userId))

    const response = await apiMhetod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toogleIsFollowinProgress(false, userId))
};

export const unfollow = (userId) => async (dispatch) => {
    let apiMhetod = userAPI.unfollow.bind(userAPI)
    let actionCreator = unfollowSucces

    followUnfolow(dispatch,userId, apiMhetod,actionCreator)
};

export const follow = (userId) => async (dispatch) => {
    let apiMhetod = userAPI.follow.bind(userAPI)
    let actionCreator = followSucces
    followUnfolow(dispatch,userId, apiMhetod,actionCreator)
}

export default usersReducer