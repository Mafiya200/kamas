import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import { getAuthUserData, logout } from "../../../redux/auth-reducer";







class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
        /* authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data);
                }
            });
     */
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



export default connect(mapStateToProps, { getAuthUserData,logout, })(HeaderContainer);

