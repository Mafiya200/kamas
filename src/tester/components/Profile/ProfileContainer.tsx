import { connect } from "react-redux";
import Profile from "./Profile.jsx";
import React from "react";
import { getMyProfile, saveProfile, getProfileStatus, getUserProfile, updateProfileStatus, savePhoto, userProfileType, profileUserType, postArrItemType } from "../../../redux/profile-reducer.ts";
import { withRouter } from "../../../hoc/withAuthRedirect.js";
import { compose } from "redux";
import { StateType } from "../../../redux/store-redux.ts";



type propsType = {
  /*  status?: string,////////// */
 /*  userId: number | undefined, */
  profileStatus: string | undefined,
  match: {
    params: {
      '*'?: string,
      userId?: number,
    },

  },
  userStatus?: string,
  isAuth: boolean,
  errorMessage: string | null,
  myPosts: { postArr: Array<postArrItemType> },
  profileUser: profileUserType,



  savePhoto: (photo: string) => void,
  saveProfile: (formData: userProfileType) => void,
  updateProfileStatus: (status: string | undefined | null) => void,
  getMyProfile: () => void;
  getProfileStatus: (userId: number) => void;
  getUserProfile: (userId: number) => void;



};






type stateType = {

};
class ProfileContainer extends React.Component<propsType, {}> {
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
    console.log(this.props);

    this.resetUser();
  }
  componentDidUpdate(prevProps) {


    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.resetUser();
    }






  }
  render() {

    return <>

      < Profile isOwner={!this.props.match.params.userId}  {...this.props} />
    </>
  }
}







let mapStateToProps =  (state: StateType) => {
  return ({
    profileUser: state.profile.profileUser,
    myPosts: state.profile.myPosts,
    userStatus: state.profile.userStatus,
    isAuth: state.auth.isAuth,
    errorMessage: state.profile.errorMessage,
  });
}
type mapStateToPropsType = {////должны совпасть по типам с initialStateType в reducer
  /* userId: number | undefined, */

  userStatus?: string|null,
  isAuth: boolean,
  errorMessage: string | null,
  myPosts: { postArr: Array<postArrItemType> },
  profileUser: profileUserType,
};

type mapDispatchToPropsType = {
  savePhoto: (photo: string) => void,
  saveProfile: (formData: userProfileType) => void,
  updateProfileStatus: (status: string | undefined | null) => void,
  getMyProfile: () => void;
  getProfileStatus: (userId: number) => void;
  getUserProfile: (userId: number) => void;
};

type ownPropsType = {
  profileStatus: string | undefined,
  match: {
    params: {
      '*'?: string,
      userId?: number,
    },

  },
};


export default compose(connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, StateType> (mapStateToProps,
  {
    getProfileStatus,
  updateProfileStatus,
  getUserProfile,
  getMyProfile,
  savePhoto,
  saveProfile,
}),withRouter,)(ProfileContainer);