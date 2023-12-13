import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

let mapStateToPropsDirection = (state) => {
    return ({
      isAuth: state.auth.isAuth,
    });
  }

export const withAuthRedirect = (Component) => {

    let ComponentContainer = (props) => {


        if (!props.isAuth) {
            return (<Navigate to={`/login`} />);
        }
        return <Component {...props} />


    }
  
     let ConnectedAuthRedirectComponent = connect(mapStateToPropsDirection)(ComponentContainer);
    return (ConnectedAuthRedirectComponent);
} 



export const withRouter=function (Children) {
    return (props) => {
  
      const match = { params: useParams() };
      return <Children {...props} match={match} />
    }
  } /* - добавить это перед классовой компонентой  */