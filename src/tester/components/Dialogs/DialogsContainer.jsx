import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import React from "react";
import { addUserMessageActionCreator, createMessageActionCreator } from "../../../redux/dialogs-reducer.ts";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";




class DialogsContainer extends React.Component {


    render() {
        return (<Dialogs {...this.props} />);


    }
}



let mapStateToProps = (state) => {
    return ({
        names: state.dialogs.namesArray,
        userMessages: state.dialogs.userMessages,
    });
};


export default (compose(
    connect(mapStateToProps, { addUserMessageActionCreator, createMessageActionCreator, }),
    withAuthRedirect,
    )(DialogsContainer));