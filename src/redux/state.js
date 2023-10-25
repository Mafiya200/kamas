

let state = {

    NavBar: {
        NavBarLinks: [
            'Profile',
            'Dialogs',
            'News',
            'Music',
            'Settings',
        ],
        friends: [
            { id: 1, name: 'Lera', photo: 'https://zamena-lobovogo-stekla.ru/img/otziv/1.jpg', },
            { id: 2, name: 'Andrew', photo: 'https://cojo.ru/wp-content/uploads/2022/12/pepe-retroveiv-3.webp', },
            { id: 3, name: 'Vova', photo: 'https://pichold.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', },
            { id: 4, name: 'Vova', photo: 'https://pichold.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg', },
        ],

    },


    dialogs: {



        message: '',
    },



    myPosts: {
        postArr: [
            { id: 1, message: 'lorem lorem lorem1', likes: 15, name: `jora` },
            { id: 2, message: 'lorem lorem lorem2', likes: 25, name: `jopa` },
            { id: 3, message: 'lorem lorem lorem3', likes: 35, name: `жора` },
            { id: 4, message: 'lorem lorem lorem4', likes: 45, name: `Жопа` },
            { id: 5, message: 'lorem lorem lorem5', likes: 55, name: `Писька` },



        ],

        textareaValue: '',
    },

    messageArr: {
        'andrew': [{ key: 0, message: '0000' },],    /* [{ key: 0, message: messages[0] },] */


        'vova': [{ key: 0, message: '0000' }, { key: 1, message: '1111' },],

        'roma': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' },],
        'vika': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' },],
        'golubika': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' }, { key: 4, message: '4444' },],
        'rewert': [{ key: 0, message: '0000' }, { key: 1, message: '1111' }, { key: 2, message: '2222' }, { key: 3, message: '3333' }, { key: 4, message: '4444' }, { key: 5, message: '5555' },],


    },

    namesArray: [
        { name: 'andrew', id: 1, },
        { name: 'vova', id: 2, },
        { name: 'roma', id: 3, },
        { name: 'vika', id: 4, },
        { name: 'golubika', id: 5, },



    ],


};





export let addSymbol = function (textAreaValue) {
    state.myPosts.textareaValue = textAreaValue;

    renderion(state);
}
export let addMessageUser = function () {
    let messageUser = { id: 5, message: state.myPosts.textareaValue, likes: 0, name: `ЧлениськаВжух` };
    state.myPosts.postArr.push(messageUser);
    addSymbol('');

    renderion(state);
}



////////////////////////
let renderion = function () {
    alert(`error`);
}
/////////////////////////////////////


export let activeFunction = function (func) {
    renderion = func;
}



export const addMessageDialog = function (message) {



    state.dialogs.message = message;



}





export const createMessage = function (nameItem) {
    let messes = state.dialogs.message;
    console.log(state.dialogs.message);
    let add = { id: 0, key: 0, message: messes };
    state.messageArr[nameItem].push(add);
    state.dialogs.message = '';
    

    renderion(state);
}



export const addUserMessage = function (text) {
    state.dialogs.message = text;
    renderion(state);
}



export default state;