const add_Message_User = `add-Message-User`;
const add_Symbol = `add-Symbol`;

let initialState = {
    myPosts: {/////

        /////
        postArr: [
            { id: 1, message: 'lorem lorem lorem1', likes: 15, name: `jora` },
            { id: 2, message: 'lorem lorem lorem2', likes: 25, name: `jopa` },
            { id: 3, message: 'lorem lorem lorem3', likes: 35, name: `жора` },
            { id: 4, message: 'lorem lorem lorem4', likes: 45, name: `Жопа` },
            { id: 5, message: 'lorem lorem lorem5', likes: 55, name: `Писька` },



        ],

        textareaValue: '',
    },
};
const profileReducer = function (state = initialState, active) {
    switch (active.type) {
        case add_Symbol: {

            let stateCopy = { ...state };

            stateCopy.myPosts = { ...state.myPosts };
            stateCopy.myPosts.textareaValue = { ...state.myPosts.textareaValue };
            stateCopy.myPosts.textareaValue = active.textAreaValue;

            return stateCopy;
        }


        case add_Message_User: {

            let stateCopy = { ...state };

            stateCopy.myPosts = { ...state.myPosts };
            stateCopy.myPosts.postArr = [ ...state.myPosts.postArr ];
            let messageUser = { id: 5, message: stateCopy.myPosts.textareaValue, likes: 0, name: `ЧлениськаВжух` };
            stateCopy.myPosts.postArr.push(messageUser);

            stateCopy.myPosts.textareaValue = '';

            return stateCopy;

        }

        default:
            return state;

    }



}







export const addMessageUserActiveCreator = function () {
    return (
        { type: add_Message_User }
    );
}
export const addLetterActiveCreator = function (text) {
    return (
        { type: add_Symbol, textAreaValue: text, }
    );
}

export default profileReducer;