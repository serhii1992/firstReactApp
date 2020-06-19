import React, { useState } from 'react';
import s from "./Paginator.module.css";

const Paginator = ({ totalUsersCount, pageSize, currentPage, onChangedPage, sizePortion = 10 }) => {

    const totalPortion = Math.ceil(totalUsersCount / pageSize / sizePortion);


    let countPages = Math.ceil(totalUsersCount / sizePortion);
    let pages = [];
    for (let i = 1; i <= countPages; i++) { pages.push(i) }


    const [currentPortion, setCurrentPortion] = useState(1)
    const rightNumberCurrentPortion = currentPortion * sizePortion
    const leftNumberCurrentPortion = (currentPortion - 1) * sizePortion + 1


    return (
        <div>
            {currentPortion > 1 && <button onClick={() => { setCurrentPortion(currentPortion - 1) }}>prev</button>}
            {pages
                .filter(num => num >= leftNumberCurrentPortion && num <= rightNumberCurrentPortion)
                .map(p => <span
                    className={`${currentPage === p && s.selectedPage} ${s.pageNumber} `}
                    onClick={() => { onChangedPage(p) }}>{p}</span>)}
            {currentPortion < totalPortion && <button onClick={() => { setCurrentPortion(currentPortion + 1) }}>next</button>}
            {console.log(currentPortion)}
        </div>
    )
}

export default Paginator