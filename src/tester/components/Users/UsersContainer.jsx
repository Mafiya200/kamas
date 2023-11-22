import { connect } from "react-redux";
import axios from 'axios';
import React from 'react';
import Users from './Users';
import { updateUsers, changeListUsers, follow, setFeatching, setTotalUsers, unFollow } from "../../../redux/Users-reduced";
import Spiner from "../Generalis/Spiner/Spiner";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFeatching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.updateUsers(responce.data.items);
                this.props.setTotalUsers(responce.data.totalCount);
                this.props.setFeatching(false);

            });


    }

    updateList = (e) => {
        if (!e.target.closest(`li`)) {
            return;
        }
        this.props.setFeatching(true);

        this.props.changeListUsers(+e.target.innerHTML);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${+e.target.innerHTML}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.updateUsers(responce.data.items);
                this.props.setFeatching(false);

            });

    }

    render() {
        


        return (
            <>

            {this.props.isFeatching ? <Spiner /> : ""}
            <Users isFeatching={this.props.isFeatching} updateList={this.updateList} setTotalUsers={this.props.setTotalUsers} updateUsers={this.props.updateUsers} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} pageActive={this.props.pageActive} UsersArray={this.props.UsersArray}
             follow={this.props.follow} unFollow={this.props.unFollow} />
            </>
            



        );



    };
};


let mapStateToProps = function (state) {
    return ({
        UsersArray: state.Users.User.UsersArray,
        pageSize: state.Users.User.pageSize,
        totalUsersCount: state.Users.User.totalUsersCount,
        pageActive: state.Users.User.pageActive,
        isFeatching: state.Users.User.isFeatching,
    });

};

/* let mapDispatchToProps = function (dispatch) {
    return ({
        follow: function (userId) {

            dispatch(followAC(userId));
        },
        unFollow: function (userId) {

            dispatch(unFollowAC(userId));
        },
        updateUsers: function (usersArray) {
            dispatch(updateUsersAC(usersArray));
        },
        changeListUsers: function (numberList) {
            dispatch(changeListAC(numberList));
        },
        setTotalUsers: function (totalUsers) {
            dispatch(setTotalUsersAC(totalUsers));
        },
        setFeatching:function(isActive){
            dispatch(setFeatchingAC(isActive));
        }
    });
}; */



export default connect(mapStateToProps, {
    follow,
    unFollow,
    updateUsers,
    /* changeListUsers, */
    setTotalUsers,
    setFeatching,
})(UsersContainer);
