import { stopSubmit } from "redux-form";
import { authAPI, securityAPI, usersAPI } from "../api/api";

///var
const SET_USER_DATA = "kamas/auth/SET_USER_DATA";
const SET_DEFAULT_DATA = "kamas/auth/SET_DEFAULT_DATA";
const SET_ERROR_MESSAGE = "kamas/auth/SET_ERROR_MESSAGE";
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';







let initialState: initialStateType = {

    id: null,
    email: '',
    login: '',
    isAuth: false,
    isFetching: false,
    errorMessage: '',
    captchaUrl: '1',
};
export type initialStateType = {

    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    isFetching: boolean | null,
    errorMessage: string | null,
    captchaUrl: string | null,
};

const authReducer = function (state = initialState, action: any): initialStateType {

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
        case SET_CAPTCHA_URL: {
            let stateCopy = { ...state, captchaUrl: action.urlCaptcha, };
            return stateCopy;

        }

        default:
            return state;

    }
}


type setAuthUserDataType = {
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean|null,
    isFetching: boolean|null,
};
export const setAuthUserData = function (data: setAuthUserDataType): setAuthUserDataActionType {



    return { type: SET_USER_DATA, data, };
}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: object,
};


export const setDefaultData = function (data:setAuthUserDataType): setDefaultDataActionType {    
    return { type: SET_DEFAULT_DATA, data, };
}
type setDefaultDataActionType = {
    type: typeof SET_DEFAULT_DATA,
    data: object,
};

export const getAuthUserData = function () {
    return function (dispatch:any) {
        return authAPI.me()
            .then(data => {

                if (data.resultCode == 0) {

                    dispatch(setAuthUserData(data.data));
                }
            });

    }

}

export const login = (email:string, password:string, rememberMe:boolean, captcha:any) => {
    return (async (dispatch:any) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);

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
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                dispatch(stopSubmit('login', { _error: 'some warning' }));
                dispatch(setErrorMessage('some warning'));
            }

        }

    });
}
export const getCaptchaUrl = () => {
    return (async (dispatch:any) => {


        let response = await securityAPI.getSecurityCaptchaUrl();

        const captchaUrl = response.data.url;

        if (captchaUrl) {
            dispatch(setCaptchaUrl(captchaUrl));
        }


    });
}
export const setCaptchaUrl = (url:string): setCaptchaActionUrl => {

    return { type: SET_CAPTCHA_URL, urlCaptcha: url, };

}
type setCaptchaActionUrl = {
    type: typeof SET_CAPTCHA_URL,
    urlCaptcha: string,
};
export const logout = () => {
    return (function (dispatch:any) {
        authAPI.logout().then((data) => {
            if (data.resultCode == 0) {
                dispatch(setDefaultData({
                    id: null,
                    email: '',
                    login: '',
                    isAuth: false,
                    isFetching: false,
                }));
            }

        });
    });
}
export const setErrorMessage = (message:string): setErrorMessageActionType => {
    return { type: SET_ERROR_MESSAGE, message };
}
type setErrorMessageActionType = {
    type: typeof SET_ERROR_MESSAGE,
    message: string,
};
export default authReducer;