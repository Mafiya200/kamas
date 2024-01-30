import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/validators/object-helpers";

const FOLLOW = `follow`;
const unFOLLOW = `unFollow`;
const SET_USERS = `set_users`;
const SET_PAGE_ACTIVE = `set_page_active`;
const SET_TOTAL_USERS = `setTotalUsers`;
const TOGGLE_IS_FEATCHING = 'TOGGLE_IS_FEATCHING';
const TOGGLE_SET_PROCESSING = `TOGGLE_SET_PROCESSING`;
let initialState = {
    User: {
        UsersArray: [],
        pageSize: 100,
        totalItemsCount: 0,
        pageActive: 1,
        isFeatching: false,
        ///сюда 10
        sizeLengthPaginationUser:5,///сколько цифр в строке навигации
        isProcessing: [],
        /* userProcessing:[], */
    },






};


const UsersReducer = function (state = initialState, action) {



    switch (action.type) {

        case FOLLOW: {
            let stateCopy = {
                ...state,
                User: { ...state.User },

            };

            stateCopy.User.UsersArray = updateObjectArray(stateCopy.User.UsersArray, action.id, 'id', { followed: true }); /* [...state.User.UsersArray].map(function (item, index, array) {

                if (item.id == action.id) {
                    let itemCopy = {
                        ...item,
                        followed: true,

                    };
                    return itemCopy;

                };
                return item;

            }); */



            return stateCopy;
        }

        case unFOLLOW: {
            let stateCopy = {
                ...state,
                User: { ...state.User },

            };

            /* stateCopy.User.UsersArray = [...state.User.UsersArray].map(function (item, index, array) {

                if (item.id == action.id) {

                    let itemCopy = {
                        ...item,
                        followed: false,

                    };

                    return itemCopy;

                };
                return item;

            }); */
            stateCopy.User.UsersArray = updateObjectArray(stateCopy.User.UsersArray, action.id, 'id', { followed: false });


            return stateCopy;
        }
        case SET_USERS: {

            let stateCopy = { ...state };
            stateCopy.User = { ...state.User };
            stateCopy.User.UsersArray = action.users;

            /* stateCopy.User.UsersArray = []; */
            return stateCopy;
        }
        case SET_PAGE_ACTIVE: {
            let stateCopy = { ...state };
            stateCopy.User = { ...state.User, pageActive: action.numberList };

            return stateCopy;
        }
        case SET_TOTAL_USERS: {
            let stateCopy = { ...state };
            stateCopy.User = { ...state.User, totalItemsCount: action.totalItems };
            return stateCopy;
        }
        case TOGGLE_IS_FEATCHING: {
            let stateCopy = { ...state };
            stateCopy.User = { ...state.User, isFeatching: action.isFeatching };



            return stateCopy;
        }
        case TOGGLE_SET_PROCESSING: {
            let stateCopy = { ...state };

            if (action.isProcessing) {


                stateCopy.User = { ...state.User, isProcessing: [...state.User.isProcessing, action.userId], }

            }
            else {

                stateCopy.User = {
                    ...state.User, isProcessing: state.User.isProcessing.filter((item, index, array) => {

                        if (!(item == action.userId)) {
                            return item;
                        }
                    })
                };
                /* for (let i = 0; i < stateCopy.User.isProcessing.length; i++) {
                    let idUser = stateCopy.User.isProcessing[i];
                    if (action.userId == idUser) {
                        delete stateCopy.User.isProcessing[i];
                    }

                } */
            }

            return stateCopy;
        }

        default:
            return state;
    }
}


export const follow = function (userId) {

    return ({
        type: FOLLOW, id: userId,
    });
}
export const unFollow = function (userId) {

    return ({
        type: unFOLLOW, id: userId,
    });
}
export const updateUsers = function (usersArray) {
    return {
        type: SET_USERS, users: usersArray,
    };
}
export const changeListUsers = function (numberList) {
    return { type: SET_PAGE_ACTIVE, numberList };
}
export const setTotalUsers = function (totalItems) {
    return { type: SET_TOTAL_USERS, totalItems }
}
export const setFeatching = function (isActive) {
    return { type: TOGGLE_IS_FEATCHING, isFeatching: isActive, }
}
export const setProgressing = function (isProcessing, userId) {
    return { type: TOGGLE_SET_PROCESSING, isProcessing, userId, }
}




export const getUsers = (pageActive, pageSize) => {

    return async (dispatch) => {

        dispatch(changeListUsers(pageActive));
        dispatch(setFeatching(true));

        let data = await usersAPI.getUsers(pageActive, pageSize);

        dispatch(updateUsers(data.items));
        dispatch(setTotalUsers(data.totalCount));
        dispatch(setFeatching(false));



    }


}
export const doUnFollow = (userId) => {

    return async (dispatch) => {
        /*  dispatch(setProgressing(true, userId));
 
         let data = await usersAPI.userUnFollow(userId);
         if (data.resultCode === 0) {
             dispatch(unFollow(userId));
         }
         dispatch(setProgressing(false, userId)); */

        followUnfollowFlow(dispatch, userId, usersAPI.userUnFollow.bind(usersAPI), unFollow);


    }
};



export const doFollow = (userId) => {
    return async (dispatch) => {
        /* dispatch(setProgressing(true, userId));

        let data = await usersAPI.userFollow(userId);
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(setProgressing(false, userId)); */

        followUnfollowFlow(dispatch, userId, usersAPI.userFollow.bind(usersAPI), follow);
    }

}




const followUnfollowFlow = async (dispatch, userId, method, AC) => {

    dispatch(setProgressing(true, userId));

    let data = await method(userId);
    if (data.resultCode === 0) {
        dispatch(AC(userId));
    }

    dispatch(setProgressing(false, userId));

}



export default UsersReducer;
