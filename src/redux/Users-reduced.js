


let initialState = {

    UsersArray: [{
        userName: 'Dmitry K.',
        userCountry: 'Belarus',
        userCity: 'Minsk',
        userAvatar: 'https://papik.pro/grafic/uploads/posts/2023-04/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg',
        userAboutMe: 'i am looking for a Job right now... i am looking for a Job right now... i am looking for a Job right now... i am looking for a Job right now... i am looking for a Job right now... i am looking for a Job right now... i am looking for a Job right now...',
    },
    
    {
        userName: 'Svetlana D.',
        userCountry: 'Belarus',
        userCity: 'Minsk',
        userAvatar: 'https://papik.pro/grafic/uploads/posts/2023-04/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg',
        userAboutMe: 'i am looking for a Job right now...',
    },
    {
        userName: 'Andrew SH.',
        userCountry: 'Russian',
        userCity: 'Krasnodar',
        userAvatar: 'https://papik.pro/grafic/uploads/posts/2023-04/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg',
        userAboutMe: 'i am not looking for a Job right now...',
    },
    {
        userName: 'Sergey S.',
        userCountry: 'Belarus',
        userCity: 'Minsk',
        userAvatar: 'https://papik.pro/grafic/uploads/posts/2023-04/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg',
        userAboutMe: 'i am right now...',
    },
    {
        userName: 'Andrew SH.',
        userCountry: 'Russian',
        userCity: 'Krasnodar',
        userAvatar: 'https://papik.pro/grafic/uploads/posts/2023-04/1682520890_papik-pro-p-smaili-skobkami-i-tochkami-png-27.jpg',
        userAboutMe: 'i am not looking for a Job right now...',
    },],



};


const UsersReducer = function (state = initialState, action) {



    switch (action.type) {
       
        default:
            return state;
    }
}


export default UsersReducer;





