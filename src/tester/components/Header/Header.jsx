
import { NavLink } from "react-router-dom";
import styleHeader from "./Header.module.css";


const Header = function (props) {

  const exitEvent = () => {

    props.logout();

  }

  return (
    <header className={styleHeader.header}>
      <NavLink className={styleHeader.logo__link} to='/mainPage'> <img src='https://fastclip.ru/wp-content/uploads/2017/02/glopphy151000006.jpg' alt="123" /></NavLink>
     
      <div className={styleHeader.header__container}></div>
      <div className={styleHeader.login__block}>{props.isAuth ? <div><NavLink to={`/profile`}>{props.login}</NavLink><div onClick={exitEvent} className={styleHeader.exit}>Выход</div></div> : <NavLink to={`/login`}>login</NavLink>}</div>

    </header>
  );

}

export default Header;