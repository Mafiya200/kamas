import UserStyle from './User.module.css';
import avatar from './../../../../inspect/image/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg';
import { NavLink } from 'react-router-dom';


const User = function ({ userId, userAvatar, followed, isProcessing, name, userCountry, userCity, userAboutMe, doFollow,doUnFollow,...props }) {



    const userDoFollow = function () {
       doFollow(userId);
        /*         debugger
         */     /*    props.setProgressing(true, props.userId);
      
      
              usersAPI.userFollow(props.userId)
                  .then((response) => {
                      if (response.resultCode === 0) {
                          props.follow(props.userId);
                      }
                      props.setProgressing(false, props.userId);
      
                  }); */
    }
    const userDoUnFollow = function () {
        doUnFollow(userId);
        /*   props.setProgressing(true, props.userId);
  
          usersAPI.userUnFollow(props.userId).then((response) => {
              if (response.resultCode === 0) {
                  props.unFollow(props.userId);
              }
              props.setProgressing(false, props.userId);
  
          });
   */
    }




    /* const subscribe = function (e) {
        userDoFollow(props.userId);

    }
    const unSubscribe = function (e) {
        userDoUnFollow(props.userId);

    } */

    return (

        <div className={UserStyle.user}>

            <div className={UserStyle.user__body}>
                <div className={UserStyle.subscribe__block}>
                    <div className={UserStyle.avatar} >
                        <NavLink to={`/profile/${userId}`}><div className={UserStyle.avatar__image}>
                            <img src={userAvatar ? userAvatar : avatar} alt="avatar" />
                            
                        </div></NavLink>
                    </div>

                    {followed ?
                        <button disabled={isProcessing.some((id) => { if (id === userId) return true })} onClick={userDoUnFollow} className={UserStyle.follow}>unFollow</button>
                        : <button disabled={isProcessing.some((id) => { if (id === userId) return true })} onClick={userDoFollow} className={UserStyle.follow}>Follow</button>}
                </div>
                <div className={UserStyle.user__information}>
                    <div className={UserStyle.user_information__body}>

                        <div className={UserStyle.user__data}>
                            <div className={UserStyle.user__name}>{name}</div>
                            <div className={UserStyle.user__city}>{userCountry ? userCountry : `RF`}, {userCity ? userCity : `Krasnodar`}</div>
                        </div>
                        <div className={UserStyle.user__aboutMe}>
                            {userAboutMe ? userAboutMe : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora mollitia assumenda consectetur voluptatum fugiat doloribus, vitae dicta eum excepturi nesciunt ullam voluptatem facilis obcaecati? Reiciendis sapiente labore illo aperiam obcaecati.
`} {/* текст */}

                        </div>


                    </div>
                </div>
            </div>
        </div>);

}

export default User;