const add_User_Message = `add-User-Message`;
const create_Message = `create-Message`;


let initialState = {

    namesArray: [
        { name: 'andrew', id: 1, },
        { name: 'vova', id: 2, },
        { name: 'roma', id: 3, },
        { name: 'vika', id: 4, },
        { name: 'golubika', id: 5, },



    ],

    userMessages: {


        messageArr: {
            'andrew': [{ key: 0, message: '0000' },],


            'vova': [{ key: 0, message: '0000' }, { key: 1, message: '1111' },],

            'roma': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' },],
            'vika': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' },],
            'golubika': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' }, { key: 4, message: '4444' },],
            'rewert': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' }, { key: 4, message: '4444' }, { key: 5, message: '5555' },],


        },

        message: '',
    },



};


const dialogsReducer = function (state = initialState, action) {

    switch (action.type) {

        
        case create_Message: {
            let stateCopy= { ...state,
                userMessages:{...state.userMessages,messageArr:{ ...state.userMessages.messageArr }, message:''},
            
            };

            /* let add = { id: 0, key: 0, message: state.userMessages.message }; */
            /* state.userMessages.messageArr[action.nameItem].push(add); */
            /* stateCopy.userMessages = {...state.userMessages};
            stateCopy.userMessages.messageArr = { ...state.userMessages.messageArr }; */
            console.log(action.textareaMessage);
            stateCopy.userMessages.messageArr[action.nameItem] = [ ...state.userMessages.messageArr[action.nameItem],{ id: 0, key: 0, message: action.textareaMessage } ];
           /*  stateCopy.userMessages.messageArr[action.nameItem].push(add); */
            /* stateCopy.userMessages.message = ''; */

            return stateCopy;
        }
        case add_User_Message: {
            let stateCopy = { ...state };
            stateCopy.userMessages = {...state.userMessages};
            stateCopy.userMessages.message = action.text;
            return stateCopy;

        }

        default:
            return state;

    }





}








export const addUserMessageActionCreator = function (text) {
    return ({ type: add_User_Message, text: text, });
}

export const createMessageActionCreator = function (nameItem,textareaMessage) {
    
    return ({ type: create_Message, nameItem: nameItem, textareaMessage, });
}
export default dialogsReducer;