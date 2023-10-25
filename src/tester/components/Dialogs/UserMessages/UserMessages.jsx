import { Route, Router, Routes } from 'react-router-dom';
import styleUserMessages from './UserMessages.module.css';
import React from 'react';











const UserMessages = function (props) {




    let newAllMesages = props.namesArray.map(function (item) {


        let nameItem = String(item.name);

        let textarLink = React.createRef();
       function showTextarea() {
            alert(textarLink.current.value);
        }
        return (

            <Route key={1} path={nameItem} element={
                <>

                    <div className={styleUserMessages.messageBlock}>
                        {props.messageArr[nameItem]}
                    </div>

                    <div className={styleUserMessages.userMessages__message}>
                        <textarea ref={textarLink} className="content__textarea" name="textareaMessage" placeholder='your news...'></textarea>
                        <div className="content__BlockButton">
                            <button onClick={showTextarea} className="content__button">Send</button>

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