import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileShow from "./MyPosts/ProfileShow/ProfileShow";
import ProfilePicture from "./ProfilePicture/ProfilePicture";
import ProfileStatus from "./ProfileStatus/ProfileStatus";




const Profile = function (props) {
  
  return (
    <div >
      
        

      <ProfilePicture  />
      <ProfileStatus isAuth={props.isAuth} userId={ props.match.params.userId}  updateProfileStatus={props.updateProfileStatus}  getProfileStatus={props.getProfileStatus} profileStatus={props.profileStatus} status={props.userStatus} /> {/* props.status */}
      <ProfileShow profileUser={props.profileUser} />
      <MyPostsContainer />
      
    </div>
  );
}
export default Profile;