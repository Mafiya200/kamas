import styleMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";





const MyPosts = function (props) {

  let newMyPosts = props.postArr.map(function (item, index, array) {

    return (
      <Post key={item.id} message={item.message} like={item.likes} name={item.name} />

    )
  });


  return (
    <div className={styleMyPosts.content}>
      <h2>My posts</h2>

      <div className={styleMyPosts.content__body}>

        <textarea className={styleMyPosts.content__textarea} name="posts" placeholder="your news..."></textarea>
        <div className={styleMyPosts.content__BlockButton}>
          <button className={styleMyPosts.content__button}>Send</button>

        </div>
        <div className={styleMyPosts.content__posts}>

          {newMyPosts}

        </div>
      </div>
    </div>
  );
}

export default MyPosts;