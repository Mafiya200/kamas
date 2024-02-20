

import { authAPI, profileAPI, usersAPI } from "../api/api";


const add_Message_User = `add-Message-User`;
/* const add_Symbol = `add-Symbol`; */
const SET_USER_PROFILE = `setUserProfile`;
const PROFILE_STATUS = `ProfileStatus`;
const DELETE_MESSAGE_USER = `DELETE_MESSAGE_USER`;
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO_FILE = 'setPhotoFile';
const SET_PROFILE = 'SET_PROFILE';
const SET_ERROR = 'SET_ERROR';


let initialState: initialStateType = {
    profileUser: {},
    userStatus: null,
    errorMessage: null,



    /*  photoFile: null, */
    myPosts: {


        postArr: [
            { id: 1, message: 'lorem lorem lorem1', likes: 15, name: `Андрей` },
            { id: 2, message: 'lorem lorem lorem2', likes: 25, name: `Вова` },
            { id: 3, message: 'lorem lorem lorem3', likes: 35, name: `Жека` },
            { id: 4, message: 'lorem lorem lorem4', likes: 45, name: `Вероника` },
            { id: 5, message: 'lorem lorem lorem5', likes: 55, name: `Катрина` },



        ],


    },
};
export type postArrItemType = {
    id: number,
    message: string,
    likes: number | null,
    name: string,
};

type initialStateType = {
    profileUser: profileUserType,
    userStatus?: string|null,
    errorMessage: string | null,
    myPosts: { postArr: Array<postArrItemType> },








};



export type profileUserType = {
    aboutMe?: boolean | null | undefined,
    contacts?: contactsType,
    fullName?: string | null,
    lookingForAJob?: boolean | null,
    lookingForAJobDescription?: boolean | null,
    photos?: photosType,
    userId?: number | null,
};




const profileReducer = function (state = initialState, action: any): initialStateType {


    switch (action.type) {
        /* case add_Symbol: {

            let stateCopy = { ...state };

            stateCopy.myPosts = { ...state.myPosts };
            stateCopy.myPosts.textareaValue = { ...state.myPosts.textareaValue };
            stateCopy.myPosts.textareaValue = action.textAreaValue;

            return stateCopy;
        } */


        case add_Message_User: {

            let stateCopy = {
                ...state,


            };

            stateCopy.myPosts = { ...state.myPosts };
            stateCopy.myPosts.postArr = [...state.myPosts.postArr, { id: 5, message: action.textNewMessage, likes: 0, name: `ЧлениськаВжух` }];

            /*  let messageUser = { id: 5, message: stateCopy.myPosts.textareaValue, likes: 0, name: `ЧлениськаВжух` };
             stateCopy.myPosts.postArr.push(messageUser); */



            return stateCopy;

        }
        case DELETE_MESSAGE_USER: {
            let stateCopy = { ...state, };
            stateCopy.myPosts = { ...state.myPosts };
            stateCopy.myPosts.postArr = [...state.myPosts.postArr];
            stateCopy.myPosts.postArr.pop();

            return stateCopy;
        }
        case SET_USER_PROFILE: {
            let stateCopy = { ...state, profileUser: action.userProfile };


            return stateCopy;
        }
        case PROFILE_STATUS: {
            let stateCopy = { ...state, userStatus: action.status };
            return stateCopy;
        }
        case DELETE_POST: {

            let stateCopy = { ...state };

            stateCopy.myPosts = { ...state.myPosts };

            stateCopy.myPosts.postArr = state.myPosts.postArr.filter(item => {
                if (item.id != action.idPost) {
                    return true;
                }
            });

            console.log(stateCopy);
            return stateCopy;
        }
        case SET_PHOTO_FILE: {/////////////////////////////
            let stateCopy = { ...state };

            stateCopy.profileUser = { ...state.profileUser, photos: action.photos, };

            return stateCopy;

        }
        case SET_PROFILE: {
            let stateCopy = { ...state };



            stateCopy.profileUser = { ...state.profileUser, ...action.data };
            return stateCopy;
        }
        case SET_ERROR: {

            let stateCopy = { ...state, errorMessage: action.errorMessage };

            return stateCopy;
        }
        default:
            return state;

    }



}













export const addMessageUserActionCreator = function (textNewMessage: string): addMessageUserActionType {
    return (
        { type: add_Message_User, textNewMessage, }
    );
}
type addMessageUserActionType = {
    type: typeof add_Message_User,
    textNewMessage: string,
};
export const deleteMessageUserActionCreator = function (): deleteMessageUserActionType {
    return (
        { type: DELETE_MESSAGE_USER, }
    );
}
type deleteMessageUserActionType = {
    type: typeof DELETE_MESSAGE_USER,
};
export const deletePost = (idPost: number): deletePostActionType => {


    return (
        { type: DELETE_POST, idPost, }
    );
}
type deletePostActionType = {
    type: typeof DELETE_POST,
    idPost: number,
};
export const setUserProfile = function (userProfile: userProfileType): setUserProfileActionType {

    return (
        { type: SET_USER_PROFILE, userProfile, }
    );
}


type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE, userProfile: userProfileType,


};
export type userProfileType = {
    aboutMe: boolean | null | undefined,
    contacts: contactsType,
    fullName: string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription: boolean | null,
    photos: photosType,
    userId: number | null,
};
type contactsType = {
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null,
};
type photosType = {
    small: string | null | undefined,
    large: string | null | undefined,
};

export const getUserProfile = function (userId: number) {
    return async (dispatch: any) => {
        let data = await usersAPI.getProfile(userId);

        dispatch(setUserProfile(data));


    }
}
export const getMyProfile = function () {

    return function (dispatch: any) {

        authAPI.me().then((data) => {
            if (data.resultCode === 1) {


                dispatch(setUserProfile({
                    "aboutMe": null,
                    "contacts": {
                        "facebook": null,
                        "website": null,
                        "vk": null,
                        "twitter": null,
                        "instagram": null,
                        "youtube": null,
                        "github": null,
                        "mainLink": null
                    },
                    "lookingForAJob": true,
                    "lookingForAJobDescription": null,
                    "fullName": "incognito",
                    "userId": null,
                    "photos": {
                        "small": null,
                        "large": null
                    }
                }))
            }
            else { return usersAPI.getProfile(data.data.id) }
        }).then((me) => {
            if (me) {
                dispatch(setUserProfile(me));

                dispatch(getProfileStatus(me.userId));

            }
        });

    }
}


export const setProfileStatus = (status: string | null| undefined): setProfileStatusActionType => {
    return { type: PROFILE_STATUS, status }
}
type setProfileStatusActionType = {
    type: typeof PROFILE_STATUS, status: string | null|undefined,
};

export const getProfileStatus = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileAPI.getStatus(userId);

        dispatch(setProfileStatus(data));

    }
}
export const updateProfileStatus = (status: string | null| undefined) => {
    return async (dispatch: any) => {
        try {
            let datar = await profileAPI.updateStatus(status);
            if (datar.data.resultCode == 0) {
                dispatch(setProfileStatus(status));
            }
        } catch (error) {
            console.log(error);
        }

    }
}
export const savePhoto = (photo: string) => {

    return async (dispatch: any) => {

        let response = await profileAPI.setPhotoAuthUser(photo);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoFile(response.data.data.photos));

        }

    }
}
export const savePhotoFile = (photos: photosType): savePhotoFileActionType => {
    return { type: SET_PHOTO_FILE, photos };
}
type savePhotoFileActionType = {
    type: typeof SET_PHOTO_FILE, photos: photosType,
};




export const saveProfile = (formData: userProfileType) => {


    return async (dispatch: any, getState: Function) => {

        let response = await profileAPI.setProfileAuthUser(formData);


        if (response.data.resultCode === 0) {
            /* dispatch(setProfile(formData)); */
            const userId = getState().auth.id;
            if (userId) {
                /* dispatch(setUserProfile(formData)); */

                dispatch(getUserProfile(userId));
                dispatch(setError(null));
            }
        }
        else {

            if (response.data.messages[0]) {

                dispatch(setError(response.data.messages[0]));

            }

        }
        return response;

    }
}

export const setProfile = (data: userProfileType): setProfileActionType => {


    return { type: SET_PROFILE, data, }
}
type setProfileActionType = {
    type: typeof SET_PROFILE, data: userProfileType,
};







export const setError = (errorMessage: string | null): setErrorActionType => {
    return { type: SET_ERROR, errorMessage, };
}
type setErrorActionType = {
    type: typeof SET_ERROR, errorMessage: string | null,
};

export default profileReducer;