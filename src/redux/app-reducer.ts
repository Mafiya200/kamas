import { getAuthUserData } from "./auth-reducer.ts";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState:initialStateType = {
    initialized: false,
};
type initialStateType = {
    initialized: boolean|null,
};

const AppReducer = (state = initialState, action:any):initialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            let stateCopy = { ...state, initialized: true, };

            return stateCopy

        default:
            return state
    }
}

export const initializedSuccess = ():initializedSuccessActionType => {
    return { type: INITIALIZED_SUCCESS }
}
type initializedSuccessActionType = {
    type:typeof INITIALIZED_SUCCESS,
};
export const initializeApp = () => {
    return function (dispatch:any) {
        let resultDispatch = dispatch(getAuthUserData());
        Promise.all([resultDispatch,]).then(() => {

            dispatch(initializedSuccess());
        });
    }
}
export default AppReducer;


