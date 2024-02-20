import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/validators/object-helpers";
import { userProfileType } from "./profile-reducer";

const FOLLOW = `follow`;
const unFOLLOW = `unFollow`;
const SET_USERS = `set_users`;
const SET_PAGE_ACTIVE = `set_page_active`;
const SET_TOTAL_USERS = `setTotalUsers`;
const TOGGLE_IS_FEATCHING = 'TOGGLE_IS_FEATCHING';
const TOGGLE_SET_PROCESSING = `TOGGLE_SET_PROCESSING`;


let initialState = {
    User: {
        UsersArray: [] as Array<UsersArrayType>,

        pageSize: 100,
        totalItemsCount: 0,
        pageActive: 1,
        isFeatching: false as boolean | null,
        ///сюда 10
        sizeLengthPaginationUser: 5 as number|undefined,///сколько цифр в строке навигации
        isProcessing: [] as Array<number>,
        /* userProcessing:[] as Array<number>,
        userIdProcessing:[] as Array<number>, */
        /* userProcessing:[], */
    },
};

type initialStateType = {
    User: UserType,
};

type UserType = typeof initialState.User;


export type UsersArrayType = {
    followed: boolean,
    id: number,
    name: string,
    photos: { small: null | string, large: null | string, },
    status: null | string,
    uniqueUrlName: null | string,

    userCity?: string | null,
    userCountry?: string | null,
    userAboutMe?: string | null,



};




const UsersReducer = function (state = initialState, action: any): initialStateType {



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
                    ...state.User, isProcessing: state.User.isProcessing.filter((item) => {

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


export const follow = function (userId: number | null): followActionType {

    return ({
        type: FOLLOW, id: userId,
    });
}
type followActionType = {
    type: typeof FOLLOW, id: number | null,
};

export const unFollow = function (userId: number | null): unFollowActionType {

    return ({
        type: unFOLLOW, id: userId,
    });
}
type unFollowActionType = {
    type: typeof unFOLLOW,
    id: number | null,
};

export const updateUsers = function (usersArray: Array<UsersArrayType>): updateUsersActionType {



    return {
        type: SET_USERS, users: usersArray,
    };
}

type updateUsersActionType = {
    type: typeof SET_USERS,
    users: Array<object>,
};

export const changeListUsers = function (numberList: number): changeListUsersActionType {


    return { type: SET_PAGE_ACTIVE, numberList };
}
type changeListUsersActionType = {
    type: typeof SET_PAGE_ACTIVE,
    numberList: number,
};



//////////////////////////////
//////////////////////////////
export const setTotalUsers = function (totalItems: number): setTotalUsersType {

    return { type: SET_TOTAL_USERS, totalItems }
}
type setTotalUsersType = {
    type: typeof SET_TOTAL_USERS,
    totalItems: number,
};
export const setFeatching = function (isActive: boolean | null): setFeatchingType {
    return { type: TOGGLE_IS_FEATCHING, isFeatching: isActive, }
}
type setFeatchingType = {
    type: typeof TOGGLE_IS_FEATCHING,
    isFeatching: boolean | null,
};


export const setProgressing = function (isProcessing: boolean, userId: number): setProgressingType {


    return { type: TOGGLE_SET_PROCESSING, isProcessing, userId, }
}
type setProgressingType = {
    type: typeof TOGGLE_SET_PROCESSING,
    isProcessing: boolean,
    userId: number,
};



export const getUsers = (pageActive: number, pageSize: number) => {

    return async (dispatch: any) => {

        dispatch(changeListUsers(pageActive));
        dispatch(setFeatching(true));

        let data = await usersAPI.getUsers(pageActive, pageSize);

        dispatch(updateUsers(data.items));


        dispatch(setTotalUsers(data.totalCount));


        dispatch(setFeatching(false));



    }


}
export const doUnFollow = (userId: number) => {

    return async (dispatch: any) => {
        /*  dispatch(setProgressing(true, userId));
 
         let data = await usersAPI.userUnFollow(userId);
         if (data.resultCode === 0) {
             dispatch(unFollow(userId));
         }
         dispatch(setProgressing(false, userId)); */

        followUnfollowFlow(dispatch, userId, usersAPI.userUnFollow.bind(usersAPI), unFollow);


    }
};



export const doFollow = (userId: number) => {
    return async (dispatch: any) => {
        /* dispatch(setProgressing(true, userId));

        let data = await usersAPI.userFollow(userId);
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(setProgressing(false, userId)); */

        followUnfollowFlow(dispatch, userId, usersAPI.userFollow.bind(usersAPI), follow);
    }

}




const followUnfollowFlow = async (dispatch: any, userId: number, method: any, AC: any) => {

    dispatch(setProgressing(true, userId));

    let data = await method(userId);
    if (data.resultCode === 0) {
        dispatch(AC(userId));
    }

    dispatch(setProgressing(false, userId));

}



export default UsersReducer;
