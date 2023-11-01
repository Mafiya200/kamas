
import UserMessages from "./UserMessages";

import { addUserMessageActionCreator, createMessageActionCreator } from '../../../../redux/dialogs-reducer';


const UserMessagesContainer = function (props) {
         
    let state = props.store.getState().dialogs;




    ////1///
    const addLetterContainer = function (text) {

        props.store.dispatch(addUserMessageActionCreator(text));



    }







  
    const addMessageContainer = function (nameItem) {



        props.store.dispatch(createMessageActionCreator(nameItem));






        }




        

        
    



    return ( <UserMessages userMessages={state.userMessages} names={state.namesArray} addMessage={addMessageContainer} addLetter={addLetterContainer}/> );
}


export default UserMessagesContainer;