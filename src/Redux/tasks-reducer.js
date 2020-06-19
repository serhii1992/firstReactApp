const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const TICK_TIMER = 'TICK_TIMER';


let initialState = {
    timerCurrentSeconds: 0,
    isActiveTimer: false,
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {


        case START_TIMER:
            return {
                ...state, isActiveTimer: false
            }
        case STOP_TIMER:
            return {
                ...state, isActiveTimer: true
            }
        case TICK_TIMER:
            let timerCurrentSeconds = action.timerCurrentSeconds;
            return {
                ...state, timerCurrentSeconds,
            }

        default:
            return state
    }
};

// export const follow = (userId) => ({ type: FOLLOW, userId });
export const startTimerAC = () => ({ type: START_TIMER });
export const stopTimerAC = () => ({ type: STOP_TIMER });
export const tickTimerAC = (timerCurrentSeconds) => ({ type: TICK_TIMER, timerCurrentSeconds });



export default tasksReducer