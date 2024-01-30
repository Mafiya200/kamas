import { NavLink } from "react-router-dom";
import styleNavBar from "./NavBar.module.css";
import Friend from "./Friend/Friend";


const NavBar = function (props) {

  let newNavBar = props.NavBar.NavBarLinks.map(function (item, index, array) {
    return (

      <div className={styleNavBar.item} key={item}>
        <NavLink  className={function ({isActive}) {return isActive ? styleNavBar.active : ' ';
        }} to={`/${item.toLowerCase()}`} >{item}</NavLink>
      </div>
    )
  });




  
  let friends = props.NavBar.friends.map(function (item, index, array) {
    const name = item.name;
    const photo = item.photo;
    const id = item.id;
    return (
      <Friend key={id} name={name} photo={photo} />

    );


  });





  return (
    <nav className={styleNavBar.nav}>
      <div className={styleNavBar.nav__body}>

        <div className={styleNavBar.nav__links}>

          {newNavBar}

        </div>
        <div className={`${styleNavBar.nav__friends} ${styleNavBar.friends}`}>
          <h3 className={styleNavBar.friends__title}>Друзья</h3>
          <div className={styleNavBar.friends__items}>
            {friends}


          </div>
        </div>
      </div>



    </nav>
  );

}


export default NavBar;
