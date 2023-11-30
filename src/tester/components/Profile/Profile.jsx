import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileShow from "./MyPosts/ProfileShow/ProfileShow";
import styleProfile from "./Profile.module.css";
import ProfilePicture from "./ProfilePicture/ProfilePicture";




const Profile = function (props) {
  return (
    <div >
      
        

      <ProfilePicture  />
      <ProfileShow profileUser={props.profileUser} />
      <MyPostsContainer />
      
    </div>
  );
}
export default Profile;