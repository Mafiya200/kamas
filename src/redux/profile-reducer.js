import { authAPI, profileAPI, usersAPI } from "../api/api";

const add_Message_User = `add-Message-User`;
/* const add_Symbol = `add-Symbol`; */
const SET_USER_PROFILE = `setUserProfile`;
const PROFILE_STATUS = `ProfileStatus`;
const DELETE_MESSAGE_USER = `DELETE_MESSAGE_USER`;
const DELETE_POST = 'DELETE_POST';
let initialState = {
    profileUser: {},
    userStatus: "",
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

const profileReducer = function (state = initialState, action) {


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
        default:
            return state;

    }



}




export const addMessageUserActionCreator = function (textNewMessage) {
    return (
        { type: add_Message_User, textNewMessage, }
    );
}

export const deleteMessageUserActionCreator = function () {
    return (
        { type: DELETE_MESSAGE_USER, }
    );
}
export const deletePost = function (idPost) {
    return (
        { type: DELETE_POST, idPost, }
    );
}
export const setUserProfile = function (userProfile) {
    return (
        { type: SET_USER_PROFILE, userProfile, }
    );
}
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


export const setProfileStatus = (status) => {
    return { type: PROFILE_STATUS, status }
}


export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);

        dispatch(setProfileStatus(data));

    }
}
export const updateProfileStatus = (status) => {
    return async (dispatch) => {


        let datar = await profileAPI.updateStatus(status);


        if (datar.data.resultCode == 0) {
            dispatch(setProfileStatus(status));

        }

    }
}
export default profileReducer;