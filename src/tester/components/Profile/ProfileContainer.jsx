import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import { useParams } from 'react-router-dom';
import { getMyProfile, getProfileStatus, getUserProfile, profileStatus, updateProfileStatus } from "../../../redux/profile-reducer";
import { withAuthRedirect, withRouter } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileComponent extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;

    if (!userId) {
      this.props.getMyProfile();//////////
    }
   /*  else if (!(this.props.profileUser.id)) {
    this.props.getUserProfile(2);

    }
    else{
      this.props.getUserProfile(this.props.profileUser.id);
    } */

    userId && this.props.getUserProfile(userId);

    
    userId && this.props.getProfileStatus(userId);

  }

  render() {


    return <>

      < Profile  {...this.props} />
    </>
  }
}












let mapStateToProps = function (state) {
  return ({
    profileUser: state.profile.profileUser,
    myPosts: state.profile.myPosts,
    userStatus: state.profile.userStatus,
    isAuth:state.auth.isAuth,

  });
}



















export default compose(connect(mapStateToProps, { getProfileStatus, updateProfileStatus, getUserProfile, getMyProfile, }),
  withRouter,
/* withAuthRedirect */)(ProfileComponent);