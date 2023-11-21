import User from './User/User';
import UsersStyle from './Users.module.css';
import React from 'react';
////changeListUsers




const Users = function(props){

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);

    }


    let newPages = pages.map(item => {

        return (
            <li className={(props.pageActive === item ? UsersStyle.page_number__active : '') + ' ' + UsersStyle.page_number}>{item}</li>
        )
    });
    let users = props.UsersArray.map((item) => {
        return (<><User key={item.id} followed={item.followed} /* user={item} */ userId={item.id} checkUnFollowe={props.checkUnFollowe} checkFollowe={props.checkFollowe} userAvatar={item.userAvatar} name={item.name} userCity={item.userCity} userCountry={item.userCountry} userAboutMe={item.userAboutMe}/></>);


    });



    return (<div className={UsersStyle.users}>
        <div className={UsersStyle.page_block}></div>
        <ul onClick={props.updateList} className={UsersStyle.page_list}>
            {newPages}
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
                    <button onClick={function (e) { console.log(e.target); }} className={UsersStyle.show__button}>Show more</button>

                </div>
            </div>
        </div>
    </div>);
}


export default Users;