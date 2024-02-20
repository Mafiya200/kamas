import { MapStateToPropsParam, connect } from "react-redux";
import React from 'react';
import Users from './Users.tsx';
import { getUsers, doUnFollow, doFollow, UsersArrayType } from "../../../redux/Users-reduced.ts";
import Spiner from "../Generalis/Spiner/Spiner.jsx";
import { getIsFeatching, getIsProcessing, getPageActive, getPageSize, getTotalUsersCount, getUsersStateSelector } from "../../../redux/user-selectors.ts";
import { StateType } from "../../../redux/store-redux.ts";
import { compose } from "redux";



type PropsType = {
    UsersArray: Array<UsersArrayType>,
    totalItemsCount: number,
    pageSize: number,
    pageActive: number,
    sizeLengthPaginationUser?: number,
    isFeatching: boolean | null,

    isProcessing: Array<number>,

    /*  updateList: (e: object) => void, */
    doFollow: (userId: number) => void,
    doUnFollow: (userId: number) => void,
    getUsers: (pageActive: number, pageSize: number) => void;
};



type mapDispatchToPropsType = {
    /* updateList: (e: object) => void, */
    doUnFollow: (userId: number) => void,
    doFollow: (userId: number) => void,

    getUsers: (pageActive: number, pageSize: number) => void;
};
type ownPropsType = {};
class UsersContainer extends React.Component<PropsType,{}> {




    componentDidMount() {
        console.log(this.props);
        /*     this.props.setFeatching(true);
            usersAPI.getUsers(this.props.pageActive, this.props.pageSize)
                .then(data => {
                    this.props.updateUsers(data.items);
                    this.props.setTotalUsers(data.totalCount);
                    this.props.setFeatching(false);
    
                });
     */
        let { pageActive, pageSize } = this.props;
        this.props.getUsers(pageActive, pageSize);
    }

    updateList = (e) => {
        if (!e.target.closest(`li`)) {
            return;
        }
        let numberListActive = +e.target.innerHTML;
        let { pageSize, getUsers } = this.props;
        getUsers(numberListActive, pageSize);




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
            <Users isFeatching={this.props.isFeatching} updateList={this.updateList} sizeLengthPaginationUser={this.props.sizeLengthPaginationUser}
                totalItemsCount={this.props.totalItemsCount} pageSize={this.props.pageSize} pageActive={this.props.pageActive}
                UsersArray={this.props.UsersArray} doUnFollow={this.props.doUnFollow} doFollow={this.props.doFollow}
                isProcessing={this.props.isProcessing} />
        </>
        );



    };
};


/* let mapStateToProps = function (state) {
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

}; */

let mapStateToProps =  (state:StateType) => {
    return ({

        pageSize: getPageSize(state),
        UsersArray: getUsersStateSelector(state),
        pageActive: getPageActive(state),
        isFeatching: getIsFeatching(state),
        isProcessing: getIsProcessing(state),
        /* userProcessing: getUserProcessing(state), */
        totalItemsCount: getTotalUsersCount(state),
        /*   userIdProcessing: getUserIdProcessing(state), */
        sizeLengthPaginationUser: state.Users.User.sizeLengthPaginationUser,
    });
};
type mapStateToPropsType = {
    totalItemsCount: number,
    pageSize: number,
    pageActive: number,
    sizeLengthPaginationUser?: number,
    isFeatching: boolean|null,
    isProcessing: Array<number>,
    UsersArray: Array<UsersArrayType>,
};


export default connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, StateType> (mapStateToProps,
    //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    {
        getUsers,
        doUnFollow,
        doFollow,
    })(UsersContainer);
