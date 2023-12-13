import { authAPI, usersAPI } from "../api/api";

///var
const SET_USER_DATA = "SET_USER_DATA";








let initialState = {

    id: '',
    email: '',
    login: '',
    isAuth: false,
    isFetching: false,
};


const authReducer = function (state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA:
            let stateCopy = { ...state, ...action.data, isAuth: true, };
            
            return stateCopy;


        default:
            return state;

    }
}

export const setAuthUserData = function (data) {
    return { type: SET_USER_DATA, data, };
}
export const getAuthUserData = function () {
    return function (dispatch) {
        authAPI.me()
            .then(data => {
                
                if (data.resultCode == 0) {
                    
                    dispatch(setAuthUserData(data.data));
                }
            });

    }

}


export default authReducer;