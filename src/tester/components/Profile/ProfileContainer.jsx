import { connect } from "react-redux";
import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { setUserProfile } from "../../../redux/profile-reducer";
import { useParams } from 'react-router-dom';

class ProfileComponent extends React.Component {
  componentDidMount() {




    let userId = this.props.match.params.userId;
    
    if (!userId) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true, }).then((response) => 
      { return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)}).then((response) => {
        this.props.setUserProfile(response.data);
      });


    }
    userId && axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);

      });


    /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);

      }); */
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

  });
}

let RouterContainer = withRouter(ProfileComponent);

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
} /* - добавить это перед классовой компонентой  */

export default connect(mapStateToProps, { setUserProfile, })(RouterContainer);