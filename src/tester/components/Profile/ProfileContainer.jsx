import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import { getMyProfile, saveProfile, getProfileStatus, getUserProfile, updateProfileStatus, savePhoto } from "../../../redux/profile-reducer.ts";
import { withRouter } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {


  resetUser() {
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


  componentDidMount() {

    this.resetUser();
  }
  componentDidUpdate(prevProps) {


    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.resetUser();
    }






  }
  render() {

    return <>

      < Profile  isOwner={!this.props.match.params.userId}  {...this.props} />
    </>
  }
}







let mapStateToProps = function (state) {
  return ({
    profileUser: state.profile.profileUser,
    myPosts: state.profile.myPosts,
    userStatus: state.profile.userStatus,
    isAuth: state.auth.isAuth,
    errorMessage:state.profile.errorMessage,
  });
}





export default compose(connect(mapStateToProps, { getProfileStatus, updateProfileStatus, getUserProfile, getMyProfile, savePhoto, saveProfile, }),
  withRouter,
/* withAuthRedirect */)(ProfileContainer);