import { connect } from "react-redux";
import Users from "./Users";
import { UsersAC, followeAC, unfolloweAC } from "../../../redux/Users-reduced";




let mapStateToProps = function (state) {
    return ({
        UsersArray: state.Users.User.UsersArray,

    });

};

let mapDispatchToProps = function (dispatch) {
    return ({
        checkFollowe: function (userId) {

            dispatch(followeAC(userId));
        },
        checkUnFollowe: function (userId) {

            dispatch(unfolloweAC(userId));
        },
        updateUsers: function (usersArray) {
            dispatch(UsersAC(usersArray));
        },
    });
};



export default connect(mapStateToProps, mapDispatchToProps)(Users);
