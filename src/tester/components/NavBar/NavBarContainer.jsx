import { connect } from "react-redux";
import NavBar from "./NavBar";



const mapStateToProps = function(state){
    return({
        NavBar:state.NavBar,
    });
}
const mapDispatchToProps = function(dispatch){
    return({
       
    });
}

const NavBarContainer = connect(mapStateToProps,mapDispatchToProps)(NavBar);

export default NavBarContainer;