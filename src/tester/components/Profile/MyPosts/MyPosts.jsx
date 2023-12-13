import React from "react";
import styleMyPosts from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";







let link = React.createRef();



const MyPosts = function (props) {


  const onSubmit = (data) => {
    props.addPost(data.posts);
  }


/* 
  let onAddPost = function () {

    props.addPost();
    
  }

  let onAddLetter = function (e) {


    let text = e.target.value;
    props.addLetter(text);
  } */

  let newMyPosts = props.myPosts.postArr.map(function (item, index, array) {

    return (
      <Post key={item.id} message={item.message} like={item.likes} name={item.name} />

    )
  });


  return (
    <div className={styleMyPosts.content}>
      <h2>My posts1</h2>

      <div className={styleMyPosts.content__body}>

        {/*  <MyPostForm onAddLetter={onAddLetter} onAddPost={onAddPost} textareaValue={props.myPosts.textareaValue} /> */}
        <MyPostReduxForm onSubmit={onSubmit} /*onAddLetter={onAddLetter} onAddPost={onAddPost} textareaValue={props.myPosts.textareaValue} */ />
        <div className={styleMyPosts.content__posts}>

          {newMyPosts}

        </div>
      </div>
    </div>
  );
}


const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name={'posts'} component={'textarea'} /* value={props.textareaValue} onChange={props.onAddLetter} ref={link} */ className='content__textarea' placeholder="your news..." />
      <div className="content__BlockButton">
        <button type="submit" /* onClick={props.onAddPost} */ className="content__button">Send</button>
      </div>
    </form>
  );
}

const MyPostReduxForm = reduxForm({ form: 'MyPost', })(MyPostForm);



export default MyPosts;