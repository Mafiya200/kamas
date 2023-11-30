import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import axios from "axios";
import { setAuthUserData } from "../../../redux/auth-reducer";






class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
           withCredentials:true,
        })
            .then(response => {
                if (!response.data.resultCode) {

                    this.props.setAuthUserData(response.data.data);
                }
            });
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



export default connect(mapStateToProps, { setAuthUserData, })(HeaderContainer);

