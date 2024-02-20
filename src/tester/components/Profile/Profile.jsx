import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileShow from "./MyPosts/ProfileShow/ProfileShow";
import ProfilePicture from "./ProfilePicture/ProfilePicture";

import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks.tsx";




const Profile = function (props) {
  return (
    <div >
     
      <ProfilePicture  />
      <ProfileStatusWithHooks isAuth={props.isAuth} userId={ props.match.params.userId}  updateProfileStatus={props.updateProfileStatus}  getProfileStatus={props.getProfileStatus} profileStatus={props.profileStatus} status={props.userStatus} /> {/* props.status */}
      <ProfileShow errorMessage={props.errorMessage} saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} isAuth={props.isAuth} profileUser={props.profileUser} />
      <MyPostsContainer />
      
    </div>
  );
}
export default Profile;