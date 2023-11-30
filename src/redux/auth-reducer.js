///var
const SET_USER_DATA = "SET_USER_DATA";




let initialState = {

    id: '',
    email: '',
    login: '',
    isAuth:false,
    isFetching: false,
};


const authReducer = function (state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA:
            let stateCopy = { ...state, ...action.data,isAuth:true, };
            return stateCopy;


        default:
            return state;

    }
}

export function setAuthUserData(data) {
    return { type: SET_USER_DATA, data, };
}


export default authReducer;