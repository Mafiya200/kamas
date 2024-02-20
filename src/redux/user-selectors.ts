import { createSelector } from "reselect";
import { StateType } from "./store-redux";

const getUsersState = (state:StateType) => {///////
    return state.Users.User.UsersArray;
}

export const getUsersStateSelector = createSelector(getUsersState, function (UsersArray) {/////
    return UsersArray;
 
});



export const getPageSize = (state:StateType) => {
    return state.Users.User.pageSize;

}
export const getTotalUsersCount = (state:StateType) => {
    return state.Users.User.totalItemsCount;

}
export const getPageActive = (state:StateType) => {
    return state.Users.User.pageActive;

}
export const getIsFeatching = (state:StateType) => {
    return state.Users.User.isFeatching;

}
export const getIsProcessing = (state:StateType) => {
    return state.Users.User.isProcessing;

}
/* export const getUserProcessing = (state:StateType) => {
    return state.Users.User.userProcessing;

} */
/* export const getUserIdProcessing = (state:StateType) => {
    console.log(state.Users.User.userIdProcessing);
    
    return state.Users.User.userIdProcessing;

} */

