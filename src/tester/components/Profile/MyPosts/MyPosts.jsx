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

          <Post message = 'lorem1 lorem lorem lorem' like = '15' />
          <Post message = 'lorem2 lorem lorem lorem' like = '25' />
          <Post message = 'lorem3 lorem lorem lorem' like = '35' />

        </div>
      </div>
    </div>
  );
}

export default MyPosts;