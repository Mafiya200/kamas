import React from "react";
import styleMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";


let link = React.createRef();



const MyPosts = function (props) {

  let addPost = function () {
props.addMessageUser(link.current.value);

  }
  let newMyPosts = props.postArr.map(function (item, index, array) {
    
    return (
      <Post key={item.id} message={item.message} like={item.likes} name={item.name} />

    )
  });


  return (
    <div className={styleMyPosts.content}>
      <h2>My posts</h2>

      <div className={styleMyPosts.content__body}>

        <textarea ref={link} className='content__textarea' name="posts" placeholder="your news..."></textarea>
        <div className="content__BlockButton">
          <button  onClick={addPost} className="content__button">Send</button>

        </div>
        <div className={styleMyPosts.content__posts}>

          {newMyPosts}

        </div>
      </div>
    </div>
  );
}

export default MyPosts;