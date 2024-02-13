
import { reduxForm, submit } from 'redux-form';
import { Input, TextArea, createField } from '../../../../Common/FormsControls/FormsControls';
import styleProfileFormData from './ProfileFormData.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form } from 'react-final-form';
import { useState } from 'react';



const ProfileFormData = ({ isAuth, /* profileUser, */errorMessage, editMode, onSubmit, initialValues, ...props }) => {
    let dontHave = ' отсутствует';
      let [Error, setError] = useState(errorMessage);

    {
        Error && <div className={styleProfileFormData.warningBlock}>
            <span className={styleProfileFormData.warning}>{Error}</span>
        </div>
    }

    /*  let job = profileUser.lookingForAJob; */






    const data = () => {
        let contactsList = [];
        let profileUserContacts = initialValues.contacts;
        for (const key in profileUserContacts) {
            contactsList.push(<div key={key} className={styleProfileFormData.social}>{key}:{createField(Input, null, `contacts.${key}`, key, null)} </div>);
        }
        return contactsList;
    }
    let contacts = data();
    <div className={styleProfileFormData.user_contacts}>

        {/*  <div className={styleProfileData.user_facebook}>facebook: {props.profileUser.contacts.facebook ? <a href={props.profileUser.contacts.facebook}>{props.profileUser.contacts.facebook}</a> : dontHave} </div>
    <div className={styleProfileData.user_website}>website:{props.profileUser.contacts.website ? <a href={props.profileUser.contacts.website}>{props.profileUser.contacts.website}</a> : dontHave} </div>
    <div className={styleProfileData.user_VK}>VK: {props.profileUser.contacts.vk ? <a href={props.profileUser.contacts.vk}>{props.profileUser.contacts.vk}</a> : dontHave} </div>
    <div className={styleProfileData.twitter}>twitter: {props.profileUser.contacts.twitter ? <a href={props.profileUser.contacts.twitter}>{props.profileUser.contacts.twitter}</a> : dontHave}</div>
    <div className={styleProfileData.instagram}>instagram: {props.profileUser.contacts.instagram ? <a href={props.profileUser.contacts.instagram}>{props.profileUser.contacts.instagram}</a> : dontHave}</div>
    <div className={styleProfileData.youtube}>youtube: {props.profileUser.contacts.youtube ? <a href={props.profileUser.contacts.youtube}>{props.profileUser.contacts.youtube}</a> : dontHave}</div>
    <div className={styleProfileData.github}>github: {props.profileUser.contacts.github ? <a href={props.profileUser.contacts.github}>{props.profileUser.contacts.github}</a> : dontHave} </div> */}
        {contacts}

    </div>

    return <>
        {/* <form method='get' onSubmit={handleSubmit}>





            {editMode && <div><button  >Save</button></div>}

            <div className={styleProfileFormData.about_me}>About me:</div>
            <div className={styleProfileFormData.user_name}>{createField(Input, null, 'fullName', 'Имя', null)}</div>
            <div className={styleProfileFormData.user_find_job}><p>Ищущий работу? :</p><span className={styleProfileFormData.job}>{createField(Input, { type: 'checkbox', }, 'lookingForAJob', null, null)}</span></div>
            <div className={styleProfileFormData.my_professional_skills}>My professional skills :{createField(TextArea, null, 'lookingForAJobDescription', 'Мои скиллы', null)}</div>
            <div className={styleProfileFormData.abot_me}>About me :{createField(TextArea, null, 'aboutMe', 'Обо мне', null)}</div>


            <div className={styleProfileFormData.user_contacts}>


                {contacts}

            </div>


        </form> */}
        <Form

            onSubmit={onSubmit}
            initialValues={initialValues}
            /*  validate={validate} */
            render={({ handleSubmit, form, submitting, pristine, values, /* submitError */...restProps }) => (

                <form onSubmit={handleSubmit} >

                    {/*                     {console.log(restProps)}
 */}                    {/*   {console.log(meta.submitError)} */}
                    {errorMessage && <div>{errorMessage}</div>}

                    {editMode && <div><button /* disabled={!!errorMessage}  */>Save</button></div>}

                    <div className={styleProfileFormData.about_me}>About me:</div>
                    <div className={styleProfileFormData.user_name}>{createField(Input, null, 'fullName', 'Имя', null)}</div>
                    <div className={styleProfileFormData.user_find_job}><p>Ищущий работу? :</p><span className={styleProfileFormData.job}>{createField(Input, { type: 'checkbox', }, 'lookingForAJob', null, null)}</span></div>
                    <div className={styleProfileFormData.my_professional_skills}>My professional skills :{createField(TextArea, null, 'lookingForAJobDescription', 'Мои скиллы', null)}</div>
                    <div className={styleProfileFormData.abot_me}>About me :{createField(TextArea, null, 'aboutMe', 'Обо мне', null)}</div>


                    <div className={styleProfileFormData.user_contacts}>


                        {contacts}

                    </div>

                </form>
            )}
        />


    </>
}







/* const ProfileFormDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileFormData);///создание reduxForm reduxForm({form:name})(сама форма) */




let mapStateToProps = (state) => {
    return {
        initialValues: state.profile.profileUser,
    };
}

export default compose(connect(mapStateToProps), reduxForm({ form: 'edit-profile' }))(ProfileFormData);

