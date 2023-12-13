import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import React from "react";
import { checkInputData } from "../../../redux/loginPage-reducer";

class LoginPageContainer extends React.Component {

    render() {
        return (
            <LoginPage {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {

    return {
        message:state.LoginPage.message,
    };
};




export default connect(mapStateToProps, { checkInputData, })(LoginPageContainer);