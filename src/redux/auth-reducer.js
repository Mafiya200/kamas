import { authAPI, usersAPI } from "../api/api";

///var
const SET_USER_DATA = "SET_USER_DATA";
const SET_DEFAULT_DATA = "SET_DEFAULT_DATA";








let initialState = {

    id: '',
    email: '',
    login: '',
    isAuth: false,
    isFetching: false,
};


const authReducer = function (state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA: {

            let { email, id, login } = action.data; ////вместо этого
            let stateCopy = { ...state, email, id, login, isAuth: true, }; ///...data

            return stateCopy;
        }
        case SET_DEFAULT_DATA: {
            let stateCopy = { ...state, ...action.data};

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
        authAPI.me()
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

export default authReducer;