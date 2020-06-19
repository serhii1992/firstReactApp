import React from 'react';
import s from './Tasks.module.css';

const Tasks = (props) => {

    if (props.isActiveTimer) {
        setTimeout(() => {
            props.tickTimer(props.timerCurrentSeconds + 1)
        }, 1000);

    } else if (!props.isActiveTimer) {
        props.tickTimer(props.timerCurrentSeconds)
    }

    let timerButton = props.isActiveTimer ?
        <button onClick={props.startTimer}>Stop</button> :
        <button onClick={props.stopTimer}>Start</button>;
    return (
        <div className={s.timerContainer}>
            <div className={s.timer}>{props.timerCurrentSeconds}</div>
            {timerButton}
        </div>
    )
}

export default Tasks