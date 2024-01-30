
import PaginatorStyle from './Paginator.module.css';
import React, { useState } from 'react';
////changeListUsers



const Paginator = function ({ totalItemsCount, pageSize, pageActive, sizeLengthPaginationUser}) {
    
    let [itemLength, setItemLength] = useState(Math.ceil(pageActive/sizeLengthPaginationUser));

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];


    let clickBack = (e) => {
        setItemLength(--itemLength);
    }
    let clickNext = (e) => {
        setItemLength(++itemLength);
    }


    for (let i = 1; i <= pagesCount; i++) {
        let trueItemsPous = sizeLengthPaginationUser * itemLength;
        if (i <= (trueItemsPous) && i >= ((trueItemsPous - sizeLengthPaginationUser) + 1)) {
            pages.push(i);
        }
    }



    /* for (let i = 1; i <= itemsLength; i++) {
        pages.push(i);
    } */





    let newPages = pages.map(item => {

        return (<li className={(pageActive === item ? PaginatorStyle.page_number__active : '') + ' ' + PaginatorStyle.page_number}>{item}</li>);
    });


    return <div>
        {itemLength !== 1 && <button className={PaginatorStyle.button_paginator+' '+PaginatorStyle.button_paginator__left}  onClick={clickBack}>Back</button>}{newPages} {itemLength !== Math.ceil(pagesCount / sizeLengthPaginationUser) && <button className={PaginatorStyle.button_paginator+' '+PaginatorStyle.button_paginator__right} onClick={clickNext} >Next</button>}
    </div>;



}


export default Paginator;