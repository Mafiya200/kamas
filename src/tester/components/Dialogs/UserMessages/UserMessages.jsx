import { Route, Router, Routes } from 'react-router-dom';
import styleUserMessages from './UserMessages.module.css';
import React from 'react';
import UserMessage from './UserMessage/UserMessage';
import { addUserMessageActionCreator, createMessageActionCreator } from '../../../../redux/dialogs-reducer';



const UserMessages = function (props) {
         /* let textarLink = React.createRef(); */




    ////1///
    const onAddLetter = function (event) {

        let text = event.target.value;
        props.addLetter(text);



    }







    let newAllMesages = props.names.map(function (item) {


        let nameItem = item.name;
        //2//////
        const onAddMessage = function () {



            props.addMessage(nameItem);






        }




        let createMessage = props.userMessages.messageArr[nameItem].map(function (item) {
            return (<UserMessage message={item.message} name={nameItem} />);
        })


        return (

            <Route key={1} path={nameItem} element={
                <>

                    <div className={styleUserMessages.messageBlock}>
                        {createMessage}


                       


                    </div>

                    <div className={styleUserMessages.userMessages__message}>
                        <textarea placeholder='your news...' value={props.userMessages.message} onInput={onAddLetter}  /* ref={textarLink} */  className="content__textarea" name="textareaMessage" ></textarea>
                        <div className="content__BlockButton">
                            <button onClick={onAddMessage} className="content__button">Send</button>

                        </div>

                    </div>

                </>}>
            </Route>

        );
    });




    return (
        <div className={styleUserMessages.userMessages}>
            <div className={styleUserMessages.userMessages__body}>


                <Routes>


                    {newAllMesages}


                </Routes>


            </div>


        </div>
    );
}


export default UserMessages;