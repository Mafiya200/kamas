import MyPosts from "./MyPosts/MyPosts";
import styleProfile from "./Profile.module.css";

const Profile = function(){
    return(
<div className={styleProfile.content}>
        <div className={styleProfile.content__image}>
          <img src='https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206262_37-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-37.jpg' />
        </div>
        <MyPosts />
      </div>
    );
}
export default Profile;