import { connect } from "react-redux";
import NavBar from "./NavBar";



const mapStateToProps = function(state){
    return({
        NavBar:state.NavBar,

    });
}


const NavBarContainer = connect(mapStateToProps,{})(NavBar);

export default NavBarContainer;