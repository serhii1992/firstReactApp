
import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZATION = 'INITIALIZATION_SUCCES';



let initialState = {
    initializationApp: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state, initializationApp: true,
            }
        default:
            return state
    }
};


export const setInitialization = () => ({ type: SET_INITIALIZATION });

export const initialization = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(()=>{
        dispatch(setInitialization())
    })
}

export default appReducer