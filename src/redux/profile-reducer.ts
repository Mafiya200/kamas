

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
    userStatus: "",
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
type postArrItemType = {
    id: number,
    message: string,
    likes: number | null,
    name: string,
};
type myPostsType = {
    postArr: Array<postArrItemType>
};
type initialStateType = {
    profileUser: Object,
    userStatus: string | null,
    errorMessage: string | null,
    myPosts: myPostsType,
};

const profileReducer = function (state = initialState, action): initialStateType {


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




export const addMessageUserActionCreator = function (textNewMessage): addMessageUserActionType {
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
export const deletePost = function (idPost): deletePostActionType {


    return (
        { type: DELETE_POST, idPost, }
    );
}
type deletePostActionType = {
    type: typeof DELETE_POST,
    idPost: number,
};
export const setUserProfile = function (userProfile): setUserProfileActionType {


    return (
        { type: SET_USER_PROFILE, userProfile, }
    );
}
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE, userProfile: Object,
};
export const getUserProfile = function (userId) {
    return async (dispatch) => {
        let data = await usersAPI.getProfile(userId);

        dispatch(setUserProfile(data));


    }
}
export const getMyProfile = function () {

    return function (dispatch) {

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


export const setProfileStatus = (status): setProfileStatusActionType => {
    return { type: PROFILE_STATUS, status }
}
type setProfileStatusActionType = {
    type: typeof PROFILE_STATUS, status: string,
};

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);

        dispatch(setProfileStatus(data));

    }
}
export const updateProfileStatus = (status) => {
    return async (dispatch) => {
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
export const savePhoto = (photo) => {

    return async (dispatch) => {

        let response = await profileAPI.setPhotoAuthUser(photo);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoFile(response.data.data.photos));

        }

    }
}
export const savePhotoFile = (photos): savePhotoFileActionType => {
    return { type: SET_PHOTO_FILE, photos };
}
type savePhotoFileActionType = {
    type: typeof SET_PHOTO_FILE, photos: string,
};




export const saveProfile = (formData) => {

    return async (dispatch, getState) => {

        let response = await profileAPI.setProfileAuthUser(formData);


        if (response.data.resultCode === 0) {
            /* dispatch(setProfile(formData)); */
            const userId = getState().auth.id;
            if (formData) {
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

export const setProfile = (data):setProfileActionType => {
    return { type: SET_PROFILE, data: data }
}
type setProfileActionType = {
    type: typeof SET_PROFILE, data: Object,
};







export const setError = (errorMessage):setErrorActionType => {
    return { type: SET_ERROR, errorMessage, };
}
type setErrorActionType = {
    type:typeof SET_ERROR, errorMessage:string, 
};

export default profileReducer;