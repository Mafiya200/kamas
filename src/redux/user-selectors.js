import { createSelector } from "reselect";

const getUsersState = (state) => {///////
    return state.Users.User.UsersArray;
}

export const getUsersStateSelector = createSelector(getUsersState, function (UsersArray) {/////
    return UsersArray;
 
});



export const getPageSize = (state) => {
    return state.Users.User.pageSize;

}
export const getTotalUsersCount = (state) => {
    return state.Users.User.totalUsersCount;

}
export const getPageActive = (state) => {
    return state.Users.User.pageActive;

}
export const getIsFeatching = (state) => {
    return state.Users.User.isFeatching;

}
export const getIsProcessing = (state) => {
    return state.Users.User.isProcessing;

}
export const getUserProcessing = (state) => {
    return state.Users.User.userProcessing;

}
export const getUserIdProcessing = (state) => {
    return state.Users.User.userIdProcessing;

}

