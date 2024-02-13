import { getAuthUserData } from "./auth-reducer.ts";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initiaState:initiaStateType = {
    initialized: false,
};
type initiaStateType = {
    initialized: boolean|null,
};

const AppReducer = (state = initiaState, action):initiaStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            let stateCopy = { ...state, initialized: true, };

            return stateCopy

        default:
            return state
    }
}

export const initializedSuccess = ():initializedSuccessType => {
    return { type: INITIALIZED_SUCCESS }
}
type initializedSuccessType = {
    type:typeof INITIALIZED_SUCCESS,
};
export const initializeApp = () => {
    return function (dispatch) {
        let resultDispatch = dispatch(getAuthUserData());
        Promise.all([resultDispatch,]).then(() => {

            dispatch(initializedSuccess());
        });
    }
}
export default AppReducer;


