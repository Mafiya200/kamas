import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import axios from "axios";
import { authMe, setAuthUserData } from "../../../redux/auth-reducer";






class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    };
};



export default connect(mapStateToProps, { setAuthUserData, authMe, })(HeaderContainer);

