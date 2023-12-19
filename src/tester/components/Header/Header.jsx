
import { NavLink } from "react-router-dom";
import styleHeader from "./Header.module.css";


const Header = function (props) {

  const exitEvent = () => {

    props.logout();

  }

  return (
    <header className={styleHeader.header}>
      <a className={styleHeader.logo__link} href="https://yandex.ru/search/?text=%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF+%D1%81+%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%BC+%D1%84%D0%BE%D0%BD%D0%BE%D0%BC&lr=35">
        <img src='https://www.pinclipart.com/picdir/big/559-5592685_oxford-brookes-university-smiths-station-high-school-black.png' alt="123" /></a>
      <div className={styleHeader.header__container}></div>
      <div className={styleHeader.login__block}>{props.isAuth ? <div><NavLink to={`/profile`}>{props.login}</NavLink><div onClick={exitEvent} className={styleHeader.exit}>Выход</div></div> : <NavLink to={`/login`}>login</NavLink>}</div>

    </header>
  );

}

export default Header;