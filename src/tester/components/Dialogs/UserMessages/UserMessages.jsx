import { Route, Router, Routes } from 'react-router-dom';
import styleUserMessages from './UserMessages.module.css';
import React from 'react';
import UserMessage from './UserMessage/UserMessage';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { TextArea } from '../../Common/FormsControls/FormsControls';



const UserMessages = function (props) {

    /* let textarLink = React.createRef(); */


    const DialogsForm = (props) => {
        let maxLength = maxLengthCreator(3);
        return (
            <form onSubmit={props.handleSubmit} >
                <div className={styleUserMessages.textareaBlock}>
                    <Field validate={[required, maxLength]} component={TextArea} placeholder='your news...'  /* onInput={onAddLetter} */  /* ref={textarLink} */ className={styleUserMessages.content__textarea} name="textareaMessage" />

                </div>
                <div className="content__BlockButton">
                    <button /* onClick={onAddMessage} */ className="content__button">Send</button>
                </div>
            </form>
        );
    }
    const DialogsReduxForm = reduxForm({ form: 'dialogsForm' })(DialogsForm);




    ////1///
    /* const onAddLetter = function (event) {

        let text = event.target.value;
        props.addUserMessageActionCreator(text);



    } */







    let newAllMesages = props.names.map(function (item) {


        let nameItem = item.name;
        //2//////
        const onAddMessage = function (data) {




            props.createMessageActionCreator(nameItem, data.textareaMessage);






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

                        <DialogsReduxForm onSubmit={onAddMessage} />

                    </div>

                </>} >
            </Route >

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