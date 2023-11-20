const FOLLOWE = `followe`;
const unFOLLOWE = `unfollowe`;
const SET_USERS = `set_users`;

let initialState = {
    User: {
        UsersArray: [],
    },




};


const UsersReducer = function (state = initialState, action) {



    switch (action.type) {

        case FOLLOWE: {
            let stateCopy = {
                ...state,
                User: { ...state.User },

            };

            stateCopy.User.UsersArray = [...state.User.UsersArray].map(function (item, index, array) {

                if (item.id == action.id) {
                    let itemCopy = {
                        ...item,
                        followed: true,

                    };
                    return itemCopy;

                };
                return item;

            });



            return stateCopy;
        }

        case unFOLLOWE: {
            let stateCopy = {
                ...state,
                User: { ...state.User },

            };

            stateCopy.User.UsersArray = [...state.User.UsersArray].map(function (item, index, array) {

                if (item.id == action.id) {

                    let itemCopy = {
                        ...item,
                        followed: false,

                    };

                    return itemCopy;

                };
                return item;

            });



            return stateCopy;
        }
        case SET_USERS: {

            let stateCopy = { ...state };
            stateCopy.User = { ...state.User };
            stateCopy.User.UsersArray = action.users; 
            
            /* stateCopy.User.UsersArray = []; */
            return stateCopy;
        }
        default:
            return state;
    }
}

export default UsersReducer;



export const followeAC = function (userId) {

    return ({
        type: FOLLOWE, id: userId,
    });
}
export const unfolloweAC = function (userId) {

    return ({
        type: unFOLLOWE, id: userId,
    });
}

export const UsersAC = function (usersArray) {
    return {
        type: SET_USERS, users: usersArray,
    };
}