import { connect } from "react-redux";
import Users from "./Users";




let mapStateToProps =function(state) {
    return({
        UsersArray:state.Users.UsersArray,
        
    });

};

let mapDispatchToProps =function(dispatch) {
    return {}
   /*  return({

      addPost:function(text){
        dispatch(actionCreator(text));
      }

     }); */
};



let UserContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UserContainer;
