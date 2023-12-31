import { connect } from "react-redux";
import React from 'react';
import Users from './Users';
import { updateUsers, follow, setTotalUsers, unFollow, setProgressing, getUsers, doUnFollow, doFollow } from "../../../redux/Users-reduced";
import Spiner from "../Generalis/Spiner/Spiner";

class UsersContainer extends React.Component {


    componentDidMount() {

        /*     this.props.setFeatching(true);
            usersAPI.getUsers(this.props.pageActive, this.props.pageSize)
                .then(data => {
                    this.props.updateUsers(data.items);
                    this.props.setTotalUsers(data.totalCount);
                    this.props.setFeatching(false);
    
                });
     */
        this.props.getUsers(this.props.pageActive, this.props.pageSize);
    }

    updateList = (e) => {
        if (!e.target.closest(`li`)) {
            return;
        }
        let numberListActive = +e.target.innerHTML;
        
        this.props.getUsers(numberListActive, this.props.pageSize);




        /*  this.props.setFeatching(true);
         this.props.changeListUsers(numberListActive,);
         usersAPI.getUsers(+e.target.innerHTML, this.props.pageSize)
             .then(data => {
                 this.props.updateUsers(data.items);
                 this.props.setFeatching(false);
 
             }); */

    }

    render() {



        return (<>

            {this.props.isFeatching ? <Spiner /> : ""}
            <Users isFeatching={this.props.isFeatching} updateList={this.updateList} setTotalUsers={this.props.setTotalUsers}
                updateUsers={this.props.updateUsers} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} pageActive={this.props.pageActive}
                UsersArray={this.props.UsersArray} userIdProcessing={this.props.userIdProcessing} doUnFollow={this.props.doUnFollow} doFollow={this.props.doFollow}
                follow={this.props.follow} unFollow={this.props.unFollow} setProgressing={this.props.setProgressing} isProcessing={this.props.isProcessing} />
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
        isProcessing: state.Users.User.isProcessing,
        userProcessing: state.Users.User.userProcessing,
        userIdProcessing: state.Users.User.userIdProcessing,

    });

};




export default connect(mapStateToProps, {
    follow,
    unFollow,
    updateUsers,
    setTotalUsers,
    setProgressing,
    getUsers,
    doUnFollow,
    doFollow,
})(UsersContainer);
