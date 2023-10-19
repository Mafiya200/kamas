import { NavLink } from "react-router-dom";
import styleNavBar from "./NavBar.module.css";



const NavBar = function (props) {

  let newNavBar = props.NavBarLinksNames.map(function (item, index, array) {
    return (

    <div className={styleNavBar.item} key={item}>
        <NavLink className={({ isActive }) => isActive ? styleNavBar.active : ' '} to={`/${item.toLowerCase()}`} >{item}</NavLink>
    </div>
    )
  });




  return (
    <nav className={styleNavBar.nav}>

     {newNavBar}
    </nav>
  );
}
export default NavBar;
