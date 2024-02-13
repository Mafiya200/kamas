
import styleProfileData from './ProfileData.module.css';



const ProfileData = ({ isAuth, profileUser, activeEditMode, isOwner }) => {

    let dontHave = ' отсутствует';

    let job = profileUser.lookingForAJob;





    const data = () => {
        let contactsList = [];
/*         let contacts = profileUser.contacts;
 */        for (const key in profileUser.contacts) {
            contactsList.push(<div key={key} className={styleProfileData.social}>{key}:   {isAuth ? (profileUser.contacts[key] ? <a href={`//${profileUser.contacts[key]}`}>{profileUser.contacts[key]}</a> : dontHave) : dontHave}      </div>);
        }
        return contactsList;
    }
    let contacts = data();

    return <>
        
        <div className={styleProfileData.user_data}>
        {isOwner && <div><input value={`clickMe`} type='button' onClick={activeEditMode} /></div>}
            <div className={styleProfileData.about_me}>About me:</div>
            <div className={styleProfileData.user_name}>Имя: {isAuth ? profileUser.fullName : 'incognito'}</div>
            <div className={styleProfileData.user_find_job}>Ищущий работу?:{isAuth ? (job ? ' Ищу' : 'Не Ищу') : 'Не Ищу'}</div>
            <div className={styleProfileData.user_contacts}>
                
                {/*  <div className={styleProfileData.user_facebook}>facebook: {props.profileUser.contacts.facebook ? <a href={props.profileUser.contacts.facebook}>{props.profileUser.contacts.facebook}</a> : dontHave} </div>
    <div className={styleProfileData.user_website}>website:{props.profileUser.contacts.website ? <a href={props.profileUser.contacts.website}>{props.profileUser.contacts.website}</a> : dontHave} </div>
    <div className={styleProfileData.user_VK}>VK: {props.profileUser.contacts.vk ? <a href={props.profileUser.contacts.vk}>{props.profileUser.contacts.vk}</a> : dontHave} </div>
    <div className={styleProfileData.twitter}>twitter: {props.profileUser.contacts.twitter ? <a href={props.profileUser.contacts.twitter}>{props.profileUser.contacts.twitter}</a> : dontHave}</div>
    <div className={styleProfileData.instagram}>instagram: {props.profileUser.contacts.instagram ? <a href={props.profileUser.contacts.instagram}>{props.profileUser.contacts.instagram}</a> : dontHave}</div>
    <div className={styleProfileData.youtube}>youtube: {props.profileUser.contacts.youtube ? <a href={props.profileUser.contacts.youtube}>{props.profileUser.contacts.youtube}</a> : dontHave}</div>
    <div className={styleProfileData.github}>github: {props.profileUser.contacts.github ? <a href={props.profileUser.contacts.github}>{props.profileUser.contacts.github}</a> : dontHave} </div> */}
                {contacts}

            </div>

        </div>
    </>
}


export default ProfileData;

