import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Tasks from "./Tasks";
import { startTimerAC, stopTimerAC, tickTimerAC } from "../../Redux/tasks-reducer";


let mapStateToProps = (state) => {
    return {
        timerCurrentSeconds: state.tasksPage.timerCurrentSeconds,
        isActiveTimer: state.tasksPage.isActiveTimer,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        startTimer() {
            dispatch(startTimerAC())
        },
        stopTimer() {
            dispatch(stopTimerAC())
        },
        tickTimer(timerCurrentSeconds) {

            dispatch(tickTimerAC(timerCurrentSeconds))
        }
    }
}


const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks)

export default TasksContainer