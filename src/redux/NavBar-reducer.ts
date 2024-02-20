let initialState:initialStateType = {
    NavBarLinks: [
        'Profile',
        'Dialogs',
        'Users',
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

};
type initialStateType = {
    NavBarLinks:Array<string>,
    friends:Array<friendsItemType>,
};
type friendsItemType = {
    id: number,
    name: string,
    photo: string|null,
};


const NavBarReducer = function(state=initialState,active:any):initialStateType{

    return state;
}

export default NavBarReducer;