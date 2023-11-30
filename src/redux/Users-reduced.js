const FOLLOW = `follow`;
const unFOLLOW = `unFollow`;
const SET_USERS = `set_users`;
const SET_PAGE_ACTIVE = `set_page_active`;
const SET_TOTAL_USERS=  `setTotalUsers`;
const TOGGLE_IS_FEATCHING = 'TOGGLE_IS_FEATCHING';
let initialState = {
    User: {
        UsersArray: [],
        pageSize:100,
        totalUsersCount:0,
        pageActive:1,
        isFeatching:false,
    },

    




};


const UsersReducer = function (state = initialState, action) {



    switch (action.type) {

        case FOLLOW: {
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

        case unFOLLOW: {
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
        case SET_PAGE_ACTIVE:{
            let stateCopy = {...state};
            stateCopy.User={...state.User,pageActive:action.numberList};

            return stateCopy;
        }
        case SET_TOTAL_USERS:{
           let stateCopy = {...state};
           stateCopy.User={...state.User,totalUsersCount:action.totalUsers};
           return stateCopy;
        }
        case TOGGLE_IS_FEATCHING:{
            let stateCopy = {...state};
            stateCopy.User = {...state.User, isFeatching:action.isFeatching};



            return stateCopy;
        } 

        default:
            return state;
    }
}

export default UsersReducer;



export const follow = function (userId) {

    return ({
        type: FOLLOW, id: userId,
    });
}
export const unFollow = function (userId) {

    return ({
        type: unFOLLOW, id: userId,
    });
}
export const updateUsers = function (usersArray) {
    return {
        type: SET_USERS, users: usersArray,
    };
}
 export const changeListUsers = function(numberList){
    return {type:SET_PAGE_ACTIVE,numberList};
} 
export const setTotalUsers = function(totalUsers){
return{type:SET_TOTAL_USERS,totalUsers}
}
export const setFeatching = function(isActive){
    return{type:TOGGLE_IS_FEATCHING,isFeatching:isActive,}
}