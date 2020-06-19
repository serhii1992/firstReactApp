import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../../assets/img/preloader.gif"



const Preloader = () => {
    return (
        <div>
            <img className={s.preloader} src={preloader} />
        </div>
    )
}

export default Preloader