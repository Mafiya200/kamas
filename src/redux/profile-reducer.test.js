import profileReducer, { addMessageUserActionCreator, deleteMessageUserActionCreator, deletePost } from "./profile-reducer";

let state = {
    profileUser: {},
    myPosts: {


        postArr: [
            { id: 1, message: 'lorem lorem lorem1', likes: 15, name: `Андрей` },
            { id: 2, message: 'lorem lorem lorem2', likes: 25, name: `Вова` },
            { id: 3, message: 'lorem lorem lorem3', likes: 35, name: `Жека` },
            { id: 4, message: 'lorem lorem lorem4', likes: 45, name: `Вероника` },
            { id: 5, message: 'lorem lorem lorem5', likes: 55, name: `Катрина` },



        ],


    },
};


test('test new post', () => {


    let action = addMessageUserActionCreator('tracker');
    let newState = profileReducer(state, action);


    ///3
    expect(newState.myPosts.postArr.length > state.myPosts.postArr.length).toBe(true);
});


it(`test new postasd`, () => {


    let action = addMessageUserActionCreator('tracker');
    let newState = profileReducer(state, action);


    ///3
    expect(newState.myPosts.postArr.length).toBe(6);

});

it('delete post', () => {

    let action = deleteMessageUserActionCreator();

    let newState = profileReducer(state, action);

    expect(newState.myPosts.postArr.length).toBe(4);
}); 
it('delete post id', () => {

    let action = deletePost(2);

    let newState = profileReducer(state, action);

    expect(newState.myPosts.postArr.length).toBe(4);
});