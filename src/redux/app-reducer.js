import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initiaState = {
    initialized: false,
};


const AppReducer = (state = initiaState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            let stateCopy = { ...state, initialized: true, };

            return stateCopy

        default:
            return state
    }
}

export const initializedSuccess = () => {
    return { type: INITIALIZED_SUCCESS }
}
export const initializeApp = () => {
    return function (dispatch) {
        let resultDispatch = dispatch(getAuthUserData());
        Promise.all([resultDispatch,]).then(() => {

            dispatch(initializedSuccess());
        });
    }
}
export default AppReducer;


