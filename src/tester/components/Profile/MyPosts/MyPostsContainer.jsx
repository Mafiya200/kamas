import { /* addLetterActiveCreator, */ addMessageUserActionCreator } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { compose } from "redux";




const mapStateToProps = function (state) {
  return ({
    myPosts: state.profile.myPosts,
  });
}
const mapDispatchToProps = function (dispatch) {
  return ({
    addPost: function (textNewMessage) {
      dispatch(addMessageUserActionCreator(textNewMessage));
    },

   /*  addLetter: function (text) {
      dispatch(addLetterActiveCreator(text));
    }, */
  });
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);