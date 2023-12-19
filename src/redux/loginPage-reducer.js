import { Navigate } from "react-router-dom";
import { authAPI } from "../api/api";
const SET_MESSAGE = 'SET_MESSAGE';
const initialState = {
    message: ``,
};

const LoginPageReducer = function (state = initialState, action) {

    switch (action.type) {
        case SET_MESSAGE:
            let stateCopy = { ...state, message: action.message };
            return stateCopy;

        default:
            return state;
    }
}

export const setMessage = (message) => {
    
    return { type: SET_MESSAGE, message, }
}

/* export const checkInputData = (email, pass, rememberMe) => {
    return function (dispatch) {
        authAPI.login(email, pass, rememberMe).then((data) => {


                if(data.resultCode == 0){
                      dispatch(setMessage(data.messages));
                }
          

        });
    }

} */

export default LoginPageReducer;