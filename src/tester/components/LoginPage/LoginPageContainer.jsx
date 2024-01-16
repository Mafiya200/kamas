import { connect } from "react-redux";
import LoginPage from "./LoginPage";
import React from "react";
import { login,  } from "../../../redux/auth-reducer";



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
        isAuth:state.auth.isAuth,
        errorMessage:state.auth.errorMessage,
    };
};




export default connect(mapStateToProps, { login })(LoginPageContainer);