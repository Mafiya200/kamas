import { Route, Router, Routes } from 'react-router-dom';
import styleUserMessages from './UserMessages.module.css';
import React from 'react';
import UserMessage from './UserMessage/UserMessage';
import { addUserMessageActionCreator, createMessageActionCreator } from '../../../../redux/state';



const UserMessages = function (props) {
    let textarLink = React.createRef();





    ////1///
    const addLetter = function () {




        props.dispatch(addUserMessageActionCreator(textarLink.current.value));



    }







    let newAllMesages = props.names.map(function (item) {


        let nameItem = item.name;
        //2//////
        const addMessage = function () {



            props.dispatch(createMessageActionCreator(nameItem));






        }




        let createMessage = props.userMessages.messageArr[nameItem].map(function (item) {
            return (<UserMessage message={item.message} name={nameItem} />);
        })


        return (

            <Route key={1} path={nameItem} element={
                <>

                    <div className={styleUserMessages.messageBlock}>
                        {createMessage}


                        {/* <UserMessage  id={props.id} message={props.message} /> */}


                    </div>

                    <div className={styleUserMessages.userMessages__message}>
                        <textarea placeholder='your news...' value={props.userMessages.message} onInput={addLetter} ref={textarLink} className="content__textarea" name="textareaMessage" ></textarea>
                        <div className="content__BlockButton">
                            <button onClick={addMessage} className="content__button">Send</button>

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