import React from "react";
import { addLetterActiveCreator, addMessageUserActiveCreator } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";










/* const MyPostsContainer = function (props) {

    let state = props.store.getState().profile.myPosts;

  let addPostContainer = function () { 

    props.store.dispatch(addMessageUserActiveCreator());
  }



  let addLetterContainer = function (text) {
    
    props.store.dispatch(addLetterActiveCreator(text));
  }




  return (<MyPosts addPost={addPostContainer} addLetter={addLetterContainer} myPosts={state}/>);

} */

const mapStateToProps = function (state) {
  return ({
    myPosts: state.profile.myPosts,
  });
}
const mapDispatchToProps = function (dispatch) {
  return ({


    addPost: function () {
      dispatch(addMessageUserActiveCreator());
    },

    addLetter: function (text) {
      dispatch(addLetterActiveCreator(text));
    },
  });
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;