let initialState = {
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

};


const NavBarReducer = function(state=initialState,active){

    return state;
}

export default NavBarReducer;