
/* import { renderion } from '../render';
 */import UserMessage from '../tester/components/Dialogs/UserMessages/UserMessage/UserMessage';


let messages = ['Делегируйте вопрос написания качественных тек',
    'ные статьи на сайт, продающие', 'Зарабатывайте на текстах удаленно',
    'спам, воду и другие важные параметры качества. спам, воду и другие важные параметры качества. спам, воду и другие важные параметры качества. спам, воду и другие важные параметры качества. спам, воду и другие важные параметры качества.',
    'ого контента. Ежедневно на Сервисе проверяются и создаются разные форматы: описания карточек товара, статьи и письменные работы. Мы создали пр',
    'нителями, чтобы к',];


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

        textareaValue: '123',
    },

    messageArr: {
        'andrew': (<>
            <UserMessage key='0' message={messages[0]} />
        </>),    /* [{ key: 0, message: messages[0] },] */


        'vova': (<>
            <UserMessage key='0' message={messages[0]} />
            <UserMessage key='1' message={messages[1]} />

        </>),

        'roma': (<>
            <UserMessage key='0' message={messages[0]} />
            <UserMessage key='1' message={messages[1]} />
            <UserMessage key='2' message={messages[2]} />
        </>),
        'vika': (<>
            <UserMessage key='0' message={messages[0]} />
            <UserMessage key='1' message={messages[1]} />
            <UserMessage key='2' message={messages[2]} />
            <UserMessage key='3' message={messages[3]} />

        </>),
        'golubika': (<>
            <UserMessage key='0' message={messages[0]} />
            <UserMessage key='1' message={messages[1]} />
            <UserMessage key='2' message={messages[2]} />
            <UserMessage key='3' message={messages[3]} />
            <UserMessage key='4' message={messages[4]} />

        </>),
        'rewert': (<>
            <UserMessage key='0' message={messages[0]} />
            <UserMessage key='1' message={messages[1]} />
            <UserMessage key='2' message={messages[2]} />
            <UserMessage key='3' message={messages[3]} />
            <UserMessage key='4' message={messages[4]} />
            <UserMessage key='5' message={messages[5]} />

        </>),


    },

    namesArray: [
        { name: 'andrew', id: 1, },
        { name: 'vova', id: 2, },
        { name: 'roma', id: 3, },
        { name: 'vika', id: 4, },
        { name: 'golubika', id: 5, },
        /* { name: 're44', id: 6, },
        { name: 'rewe31rt', id: 7, },
        { name: 'rewe55rt', id: 8, },
        { name: 'rewer7t', id: 9, }, */


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
let renderion = function() {
    alert(`error`);
}
/////////////////////////////////////


export let activeFunction = function (func) {
    renderion = func;
}



export const addMessageDialog = function (message) {



    state.dialogs.message = message;



}
export const createMessage = function () {

}




export default state;