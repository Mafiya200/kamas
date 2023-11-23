import UserStyle from './User.module.css';
import avatar from './../../../../inspect/image/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg';
import { NavLink } from 'react-router-dom';

const User = function(props){

const subscribe  = function(e){
    props.follow(props.userId);
}
const unSubscribe  = function(e){
    
    props.unFollow(props.userId);
}
    return(
    <div className={UserStyle.user}>
        <div className={UserStyle.user__body}>
            <div className={UserStyle.subscribe__block}>
                <div className={UserStyle.avatar} >
                <NavLink to={`/profile/${props.userId}`}><div className={UserStyle.avatar__image}>
                        <img src={props.userAvatar ? props.userAvatar : avatar} alt="avatar" />
                    </div></NavLink>
                </div>
                
                {props.followed ? <button onClick={unSubscribe} className={UserStyle.follow}>unFollow</button>:<button onClick={subscribe} className={UserStyle.follow}>Follow</button>}
            </div>
            <div className={UserStyle.user__information}>
                <div className={UserStyle.user_information__body}>

                    <div className={UserStyle.user__data}>  
                    <div className={UserStyle.user__name}>{props.name}</div>
                        <div className={UserStyle.user__city}>{props.userCountry ? props.userCountry : `RF`}, {props.userCity ? props.userCity: `Krasnodar`}</div>
                    </div>
                    <div className={UserStyle.user__aboutMe}>
                        {props.userAboutMe ? props.userAboutMe:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora mollitia assumenda consectetur voluptatum fugiat doloribus, vitae dicta eum excepturi nesciunt ullam voluptatem facilis obcaecati? Reiciendis sapiente labore illo aperiam obcaecati.
`} {/* текст */}
                    
                    </div>


                </div>
            </div>
        </div>
    </div>);
}

export default User;