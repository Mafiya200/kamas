
import styleHeader from "./Header.module.css";


const Header = function () {


  return (
    <header className={styleHeader.header}>
      <img src='https://63.img.avito.st/640x480/5773791863.jpg' alt="123" />
      <div className={styleHeader.header__container}></div>
    </header>
  );

}

export default Header;