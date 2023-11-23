import Spiner from "../../../Generalis/Spiner/Spiner";
import styleProfileShow from "./ProfileShow.module.css";
import defaultPictureUser from "../../../../../inspect/image/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg";


const ProfileShow = function (props) {

    if (!Object.keys(props.profileUser).length) {
        return (<Spiner />);
    }
let dontHave = ' отсутствует';

    return (<div className={styleProfileShow.profile_show}>
        <div className={styleProfileShow.profile_show__body}>
            <div className={styleProfileShow.profile_show__items}>
                <div className={styleProfileShow.profile_show__picture}>
                    <div className={styleProfileShow.profile_show__image}>
                        {props.profileUser.photos.large?<img src={props.profileUser.photos.large} alt="large" />:<img src={defaultPictureUser} alt="large" />}  
                    </div>

                </div>
                <div className={styleProfileShow.user_data}>
                <div className={styleProfileShow.user_name}>Имя: {props.profileUser.fullName}</div>
                <div className={styleProfileShow.user_find_job}>Ищущий работу?:{props.profileUser.lookingForAJob ? ` ${props.profileUser.lookingForAJobDescription}`: " Да, ищу"}</div>
                <div className={styleProfileShow.user_contacts}>
                <div className={styleProfileShow.user_facebook}>facebook: {props.profileUser.contacts.facebook?<a href={props.profileUser.contacts.facebook}>{props.profileUser.contacts.facebook}</a>:dontHave} </div>
                <div className={styleProfileShow.user_website}>website:{props.profileUser.contacts.website?<a href={props.profileUser.contacts.website}>{props.profileUser.contacts.website}</a>:dontHave} </div>
                <div className={styleProfileShow.user_VK}>VK: {props.profileUser.contacts.vk?<a href={props.profileUser.contacts.vk}>{props.profileUser.contacts.vk}</a>:dontHave} </div>
                <div className={styleProfileShow.twitter}>twitter: {props.profileUser.contacts.twitter?<a href={props.profileUser.contacts.twitter}>{props.profileUser.contacts.twitter}</a>:dontHave}</div>
                <div className={styleProfileShow.instagram}>instagram: {props.profileUser.contacts.instagram?<a href={props.profileUser.contacts.instagram}>{props.profileUser.contacts.instagram}</a>:dontHave}</div>
                <div className={styleProfileShow.youtube}>youtube: {props.profileUser.contacts.youtube?<a href={props.profileUser.contacts.youtube}>{props.profileUser.contacts.youtube}</a>:dontHave}</div>
                <div className={styleProfileShow.github}>github: {props.profileUser.contacts.github?<a href={props.profileUser.contacts.github}>{props.profileUser.contacts.github}</a>:dontHave} </div>
                
    
                </div>
                
                </div>

            </div>
        </div>

    </div>);
}
export default ProfileShow;