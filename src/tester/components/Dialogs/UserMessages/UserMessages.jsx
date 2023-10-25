import { Route, Router, Routes } from 'react-router-dom';
import styleUserMessages from './UserMessages.module.css';
import React from 'react';
import UserMessage from './UserMessage/UserMessage';











const UserMessages = function (props) {
    let textarLink = React.createRef();

    const addLetter = function () {
        let text = textarLink.current.value;
        props.addMessageDialogF(text);
    }

    
    const createMessage = function () {



    }


    let newAllMesages = props.namesArray.map(function (item) {


        let nameItem = String(item.name);

        


        

        return (

            <Route key={1} path={nameItem} element={
                <>

                    <div className={styleUserMessages.messageBlock}>
                        {props.messageArr[nameItem]}


                        {/* <UserMessage  id={props.id} message={props.message} /> */}
                    
                    
                    </div>

                    <div className={styleUserMessages.userMessages__message}>
                        <textarea onInput={addLetter} ref={textarLink} className="content__textarea" name="textareaMessage" placeholder='your news...'></textarea>
                        <div className="content__BlockButton">
                            <button onClick={createMessage} className="content__button">Send</button>

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