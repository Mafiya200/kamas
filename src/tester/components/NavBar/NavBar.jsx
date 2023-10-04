import styleNavBar from "./NavBar.module.css";

const NavBar = function(){
    return(
<nav className={styleNavBar.nav}>
        <div className={styleNavBar.item}>
          <a href='#'> Profile </a>
        </div>
        <div className={styleNavBar.item}>
          <a href='#'>News</a>
        </div>
        <div className={styleNavBar.item}>
          <a href='#'>Music</a>
        </div>
        <div className={styleNavBar.item}>
          <a href='#'>Settings</a>
        </div>
      </nav>
    );
}
export default NavBar;
