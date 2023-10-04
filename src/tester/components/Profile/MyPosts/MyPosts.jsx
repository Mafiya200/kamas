import styleMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = function () {
  return (
    <div className={styleMyPosts.content}>
              <h2>My posts</h2>

      <div className={styleMyPosts.content__body}>

        <textarea className={styleMyPosts.content__textarea} name="posts" placeholder="your news..."></textarea>
        <div className={styleMyPosts.content__BlockButton}>
        <button className={styleMyPosts.content__button}>Send</button>

        </div>
        <div className={styleMyPosts.content__posts}>

          <Post />
          <Post />
          <Post />

        </div>
      </div>
    </div>
  );
}

export default MyPosts;