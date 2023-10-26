import React from "react";
import styleMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";


let link = React.createRef();



const MyPosts = function (props) {
  let addPost = function () {


    props.addMessageUser();
  }




  let addLetter = function () {
    props.addSymbol(link.current.value);
  }



  let newMyPosts = props.myPosts.postArr.map(function (item, index, array) {

    return (
      <Post key={item.id} message={item.message} like={item.likes} name={item.name} />

    )
  });


  return (
    <div className={styleMyPosts.content}>
      <h2>My posts1</h2>

      <div className={styleMyPosts.content__body}>

        <textarea value={props.myPosts.textareaValue} onChange={addLetter} ref={link} className='content__textarea' name="posts" placeholder="your news..."></textarea>
        <div className="content__BlockButton">
          <button onClick={addPost} className="content__button">Send</button>

        </div>
        <div className={styleMyPosts.content__posts}>

          {newMyPosts}

        </div>
      </div>
    </div>
  );
}

export default MyPosts;