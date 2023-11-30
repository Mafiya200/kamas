import { connect } from "react-redux";
import React from 'react';
import Users from './Users';
import { updateUsers, changeListUsers, follow, setFeatching, setTotalUsers, unFollow } from "../../../redux/Users-reduced";
import Spiner from "../Generalis/Spiner/Spiner";
import { usersAPI } from "../../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFeatching(true);
        usersAPI.getUsers(this.props.pageActive, this.props.pageSize)
            .then(data => {
                this.props.updateUsers(data.items);
                this.props.setTotalUsers(data.totalCount);
                this.props.setFeatching(false);

            });


    }

    updateList = (e) => {
        if (!e.target.closest(`li`)) {
            return;
        }
        this.props.setFeatching(true);
        let numberListActive = +e.target.innerHTML;
        this.props.changeListUsers(numberListActive,);
        usersAPI.getUsers(+e.target.innerHTML, this.props.pageSize)
            .then(data => {
                this.props.updateUsers(data.items);
                this.props.setFeatching(false);

            });

    }

    render() {



        return (<>

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




export default connect(mapStateToProps, {
    follow,
    unFollow,
    updateUsers,
    changeListUsers,
    setTotalUsers,
    setFeatching,
})(UsersContainer);
