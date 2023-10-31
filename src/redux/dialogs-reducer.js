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
        ///function

        ///function
        /////

        messageArr: {
            'andrew': [{ key: 0, message: '0000' },],    /* [{ key: 0, message: messages[0] },] */


            'vova': [{ key: 0, message: '0000' }, { key: 1, message: '1111' },],

            'roma': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' },],
            'vika': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' },],
            'golubika': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' }, { key: 4, message: '4444' },],
            'rewert': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' }, { key: 4, message: '4444' }, { key: 5, message: '5555' },],


        },

        message: '',
    },



};


const dialogsReducer = function (state = initialState, active) {


    switch (active.type) {
        case create_Message:
            let add = { id: 0, key: 0, message: state.userMessages.message };
            state.userMessages.messageArr[active.nameItem].push(add);
            /* this._state.dialogs.userMessages.message = ''; */
            state.userMessages.message = '';
            return state;

        case add_User_Message:
            state.userMessages.message = active.text;
            return state;

        default:
            return state;

    }





}









export const addUserMessageActionCreator = function (text) {
    return ({ type: add_User_Message, text: text, });
}

export const createMessageActionCreator = function (nameItem) {
    return ({ type: create_Message, nameItem: nameItem, });
}
export default dialogsReducer;