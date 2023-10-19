
import UserMessage from '../tester/components/Dialogs/UserMessages/UserMessage/UserMessage';
 


let messages = ['Делегируйте вопрос написания качественных тек',
        'ные статьи на сайт, продающие', 'Зарабатывайте на текстах удаленно',
        'спам, воду и другие важные параметры качества.',
        'ого контента. Ежедневно на Сервисе проверяются и создаются разные форматы: описания карточек товара, статьи и письменные работы. Мы создали пр',
        'нителями, чтобы к',];


let state = {

    NavBarLinksNames: [
        'Profile',
        'Dialogs',
        'News',
        'Music',
        'Settings',
    ],

    postArr: [
        { id: 1, message: 'lorem lorem lorem1', likes: 15, name: `jora` },
        { id: 2, message: 'lorem lorem lorem2', likes: 25, name: `jopa` },
        { id: 3, message: 'lorem lorem lorem3', likes: 35, name: `жора` },
        { id: 4, message: 'lorem lorem lorem4', likes: 45, name: `Жопа` },
        { id: 5, message: 'lorem lorem lorem5', likes: 55, name: `Писька` },
        { id: 7, message: 'lorem lorem lorem6', likes: 65, name: `Члениська` },
        { id: 8, message: 'lorem lorem lorem6', likes: 65, name: `Члениська` },
        { id: 9, message: 'lorem lorem lorem6', likes: 65, name: `Члениська` },
        { id: 10, message: 'lorem lorem lorem6', likes: 65, name: `Члениська` },


    ],
    messageArr: {
        'andrew': (
            <>
            
            <UserMessage key='0' message={messages[0]} />
            </>
        ),
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

export default state;