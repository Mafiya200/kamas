import styleMyPosts from "./MyPosts.module.css";

const MyPosts = function () {
  return (
    <div className={styleMyPosts.content}>
      <div className={styleMyPosts.content__body}>
        <h2>My posts</h2>

        <textarea className={styleMyPosts.content__textarea} name="posts" placeholder="your news..."></textarea>
        <button className={styleMyPosts.content__button}>Send</button>
        <div className={styleMyPosts.content__posts}>

          <div className={styleMyPosts.content__post}>asd</div>

          <div className={styleMyPosts.content__post}>bbbbbb</div>

          <div className={styleMyPosts.content__post}>vcvvvv</div>

          <div className={styleMyPosts.content__post}>a44</div>

          <div className={styleMyPosts.content__post}>hghg</div>

        </div>
      </div>
    </div>
  );
}

export default MyPosts;