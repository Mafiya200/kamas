import { stopSubmit } from "redux-form";
import { authAPI, usersAPI } from "../api/api";

///var
const SET_USER_DATA = "SET_USER_DATA";
const SET_DEFAULT_DATA = "SET_DEFAULT_DATA";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";








let initialState = {

    id: '',
    email: '',
    login: '',
    isAuth: false,
    isFetching: false,
    errorMessage: '',
};


const authReducer = function (state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA: {

            let { email, id, login } = action.data; ////вместо этого
            let stateCopy = { ...state, email, id, login, isAuth: true, }; ///...data

            return stateCopy;
        }
        case SET_DEFAULT_DATA: {
            let stateCopy = { ...state, ...action.data };

            return stateCopy;
        }
        case SET_ERROR_MESSAGE: {

            let stateCopy = { ...state, errorMessage: action.message };

            return stateCopy;
        }
        default:
            return state;

    }
}

export const setAuthUserData = function (data) {
    return { type: SET_USER_DATA, data, };
}
export const setDefaultData = function (data) {
    return { type: SET_DEFAULT_DATA, data, };
}
export const getAuthUserData = function () {
    return function (dispatch) {
        return authAPI.me()
            .then(data => {

                if (data.resultCode == 0) {

                    dispatch(setAuthUserData(data.data));
                }
            });

    }

}
export const login = (email, password, rememberMe) => {
    return (function (dispatch) {
        authAPI.login(email, password, rememberMe).then((data) => {

            if (data.resultCode == 0) {
                dispatch(getAuthUserData());
                dispatch(setErrorMessage(''));
            }
            else {

                if (data.messages.length > 0) {
                    dispatch(stopSubmit('login', { _error: `${data.messages}` }));
                    dispatch(setErrorMessage(data.messages));
                }
                else {
                    dispatch(stopSubmit('login', { _error: 'some warning' }));
                    dispatch(setErrorMessage('some warning'));

                }

            }
        });
    });
}
export const logout = () => {
    return (function (dispatch) {
        authAPI.logout().then((data) => {
            if (data.resultCode == 0) {
                dispatch(setDefaultData({
                    id: '',
                    email: '',
                    login: '',
                    isAuth: false,
                    isFetching: false,
                }));
            }

        });
    });
}
export const setErrorMessage = (message) => {
    return { type: SET_ERROR_MESSAGE, message };
}

export default authReducer;