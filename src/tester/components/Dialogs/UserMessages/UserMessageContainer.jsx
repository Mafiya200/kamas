/* 
import UserMessages from "./UserMessages";

import { addUserMessageActionCreator, createMessageActionCreator } from '../../../../redux/dialogs-reducer';
import { connect } from "react-redux";




let mapStateToProps = function (state) {
    return ({
        userMessages: state.dialogs.userMessages,
        names: state.dialogs.namesArray
    });
};



let mapDispatchToProps = function (dispatch) {
    return ({


        addMessage: function (nameItem) {
            dispatch(createMessageActionCreator(nameItem));
        },
        addLetter: function (text) {
            dispatch(addUserMessageActionCreator(text));
        },
    });
};

const UserMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(UserMessages);


export default UserMessagesContainer; */