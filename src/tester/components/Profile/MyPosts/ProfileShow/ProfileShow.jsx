import Spiner from "../../../Generalis/Spiner/Spiner";
import styleProfileShow from "./ProfileShow.module.css";
import defaultPictureUser from "../../../../../inspect/image/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg";
import ProfileData from "./ProfileData/ProfileData";
import { useState } from "react";
import ProfileFormData from "./ProfileFormData/ProfileFormData";


const ProfileShow = function ({ isAuth, profileUser, isOwner, savePhoto, saveProfile, errorMessage, ...props }) {
    const newFile = (e) => {
        if (e.target.files.length > 0) {
            let photo = e.target.files[0];
            savePhoto(photo);
        }


    }

    let [editMode, setEditMode] = useState(false);


    if (!Object.keys(profileUser).length) {
        return (<Spiner />);
    }
    let profileImageLarge = profileUser.photos.large;
    /* let isAuth = props.isAuth; */
    const ProfileFormDataReduxFormSubmit = async (propsForm) => {



        let newPropsForm = {};


        if (!propsForm['lookingForAJob']) {
            newPropsForm = { ...propsForm, lookingForAJob: false, }
        }
        let result = await saveProfile(newPropsForm);

        if (!result.data.resultCode) {
            setEditMode(false);

        }
        /* if (!errorMessage) {
            setEditMode(false);
        } */
    }

    /* let newData = {};
    for (const key in profileUser) {

        if ((!(key == 'contacts')) && (!(key == 'userId'))&&(!(key == 'photos'))) {
            const element = profileUser[key];
            newData[key] = element;
        
        }

    }
  
    console.log(newData); */
    return (<div className={styleProfileShow.profile_show}>
        <div className={styleProfileShow.profile_show__body}>
            <div className={styleProfileShow.profile_show__items}>
                <div className={styleProfileShow.profile_show__picture}>
                    <div className={styleProfileShow.profile_show__image}>
                        {isAuth ? (profileImageLarge ? <img src={profileImageLarge} alt="large1" /> :
                            <img src={defaultPictureUser} alt="large2" />) : <img src={defaultPictureUser} alt="large3" />}

                    </div>
                    {isOwner && <input onChange={newFile} type='file'></input>}
                </div>

                {editMode ?
















                    ////НЕ РАБОТАЕТ АВТО-ВСТАВКА В ПОЛЯ С initialValues

                    <ProfileFormData  /* initialValues={profileUser} */ errorMessage={errorMessage} onSubmit={ProfileFormDataReduxFormSubmit} isAuth={isAuth} profileUser={profileUser} closeEditMode={() => { setEditMode(false) }} editMode={editMode} /> :
                    <ProfileData isOwner={isOwner} activeEditMode={() => { setEditMode(true) }} isAuth={isAuth} profileUser={profileUser} />}



            </div>
        </div>

    </div>);
}
export default ProfileShow;