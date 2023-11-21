import { connect } from "react-redux";
import axios from 'axios';
import React from 'react';
import Users from './Users';
import { UsersAC, changeListAC, followeAC, setTotalUsersAC, unfolloweAC } from "../../../redux/Users-reduced";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.updateUsers(responce.data.items);
                this.props.setTotalUsers(responce.data.totalCount);
            });


    }

    updateList = (e) => {
        if (!e.target.closest(`li`)) {
            return;
        }
        this.props.changeListUsers(+e.target.innerHTML);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${+e.target.innerHTML}&count=${this.props.pageSize}`)
        .then(responce => {
            this.props.updateUsers(responce.data.items);
        });

    }

    render() {


        return ( <Users updateList={this.updateList} setTotalUsers={this.props.setTotalUsers} updateUsers={this.props.updateUsers} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} pageActive={this.props.pageActive} UsersArray={this.props.UsersArray} checkFollowe={this.props.checkFollowe} checkUnFollowe={this.props.checkUnFollowe} />

           
        );



    };
};


let mapStateToProps = function (state) {
    return ({
        UsersArray: state.Users.User.UsersArray,
        pageSize: state.Users.User.pageSize,
        totalUsersCount: state.Users.User.totalUsersCount,
        pageActive: state.Users.User.pageActive,
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
        changeListUsers: function (numberList) {
            dispatch(changeListAC(numberList));
        },
        setTotalUsers: function (totalUsers) {
            dispatch(setTotalUsersAC(totalUsers));
        }
    });
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
