import axios from 'axios';
import User from './User/User';
import UsersStyle from './Users.module.css';




const Users = function (props) {

    if (props.UsersArray.length === 0) {
        let getArrayUsers = axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(function (responce) {

            return props.updateUsers(responce.data.items);
        });

        
    }

    /* if (props.UsersArray.length === 0) {
        
        let getArrayUsers = axios.get("https://social-network.samuraijs.com/api/1.0/users").then(function (responce) {
            console.log(responce.data.items);
        });
    
    } */




    let users = props.UsersArray.map(function (item) {

        return (<><User key={item.id} followed={item.followed} /* user={item} */ userId={item.id} checkUnFollowe={props.checkUnFollowe} checkFollowe={props.checkFollowe} userAvatar={item.userAvatar} name={item.name} userCity={item.userCity} userCountry={item.userCountry} userAboutMe={item.userAboutMe} /></>);


    });


    return (
        <div className={UsersStyle.users}>
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
        </div>
    );
}
export default Users;