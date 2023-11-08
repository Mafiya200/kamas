import UserStyle from './User.module.css';


const User = function(props){

    return(
    <div className={UserStyle.user}>
        <div className={UserStyle.user__body}>
            <div className={UserStyle.subscribe__block}>
                <div className={UserStyle.avatar}>
                    <div className={UserStyle.avatar__image}>
                        <img src={props.userAvatar} alt="avatar" />
                    </div>
                </div>
                <button onClick={function () { console.log(123); }} className={UserStyle.follow}>Follow</button>
            </div>
            <div className={UserStyle.user__information}>
                <div className={UserStyle.user_information__body}>

                    <div className={UserStyle.user__data}>  
                    <div className={UserStyle.user__name}>{props.userName}</div>
                        <div className={UserStyle.user__city}>{props.userCountry}, {props.userCity}</div>
                    </div>
                    <div className={UserStyle.user__aboutMe}>
                        {props.userAboutMe}
                    
                    </div>



                </div>
            </div>
        </div>
    </div>);
}

export default User;