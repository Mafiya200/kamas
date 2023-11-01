import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styleProfile from "./Profile.module.css";




const Profile = function (props) {
  return (
    <div className={`${styleProfile.content}`}>
      <div className={styleProfile.content__image}>
        <img src='https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206262_37-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-37.jpg' />
      </div>
      
      <MyPostsContainer store={props.store} /*addSymbol={props.addSymbol} dispatch={props.dispatch}  addMessageUser={props.addMessageUser}*/ /* dispatch={props.dispatch} myPosts={props.profile.myPosts} */ />
      
    </div>
  );
}
export default Profile;