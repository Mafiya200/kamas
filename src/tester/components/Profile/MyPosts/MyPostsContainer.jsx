import React from "react";
import { addLetterActiveCreator, addMessageUserActiveCreator } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";










const MyPostsContainer = function (props) {

    let state = props.store.getState().profile.myPosts;

  let addPostContainer = function () { 

    props.store.dispatch(addMessageUserActiveCreator());
  }



  let addLetterContainer = function (text) {
    /* props.addSymbol(link.current.value); */
    props.store.dispatch(addLetterActiveCreator(text));
  }




  return (<MyPosts addPost={addPostContainer} addLetter={addLetterContainer} myPosts={state}/>);

}

export default MyPostsContainer;