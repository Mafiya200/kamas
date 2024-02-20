
/* import { userProfileType } from '../../../redux/profile-reducer.ts'; */
import {UsersArrayType} from '../../../redux/Users-reduced.ts';
import Paginator from '../Common/Paginator/Paginator.tsx';
import User from './User/User';
import UsersStyle from './Users.module.css';
import React, { FC } from 'react';
////changeListUsers

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    pageActive: number,
    sizeLengthPaginationUser?: number,
    isFeatching: boolean | null,
    isProcessing:Array<number>,    
    UsersArray: Array<UsersArrayType>,
    
    doUnFollow:(userId:number)=> void,
    doFollow:(userId:number)=>void,
    updateList:(e:object)=>void,
};


const Users:FC<PropsType> = function (props) {
    
    
    
    /* let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }


    let newPages = pages.map(item => {

        return (
            <li className={(props.pageActive === item ? UsersStyle.page_number__active : '') + ' ' + UsersStyle.page_number}>{item}</li>
        )
    }); */
    let users = props.UsersArray.map((item) => {
        
        return (<><User key={item.id} followed={item.followed} /* user={item} */ userId={item.id} doUnFollow={props.doUnFollow} doFollow={props.doFollow}
            /* unFollow={props.unFollow} follow={props.follow}  */ userAvatar={item.photos.small}
            name={item.name} userCity={item.userCity} userCountry={item.userCountry} userAboutMe={item.userAboutMe}  isProcessing={props.isProcessing} /> </>);
    });

    return (<div className={UsersStyle.users}>
        <div className={UsersStyle.page_block}></div>
        <ul onClick={props.updateList} className={UsersStyle.page_list}>
            <Paginator sizeLengthPaginationUser={props.sizeLengthPaginationUser} totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} pageActive={props.pageActive} />
        </ul>
        <div className={UsersStyle.users__container}>
            <div className={UsersStyle.users__body}>
                <h2 className={UsersStyle.users__title}>Users</h2>
                <div className={UsersStyle.users__content}>
                    <div className={UsersStyle.users__items}>
                        {users}
                    </div>

                </div>
                <div className={UsersStyle.show__more}>
                    <button onClick={(e) => { }} className={UsersStyle.show__button}>Show more</button>

                </div>
            </div>
        </div>
    </div>);
}


export default Users;