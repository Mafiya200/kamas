import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { setUserProfile } from "../../../redux/profile-reducer";



class ProfileComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/10`)
      .then(response => {
        this.props.setUserProfile(response.data);

      });
  }

  render() {
    return <>
      < Profile  {...this.props}  />
    </>
  }
}


let mapStateToProps = function (state) {
  return ({
    profileUser:state.profile.profileUser,
    myPosts: state.profile.myPosts,

  });
}



export default connect(mapStateToProps, {setUserProfile,})(ProfileComponent);