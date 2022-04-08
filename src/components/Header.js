import s from "../css/Header.module.css";
import taptcha from "../img/svg/taptcha.svg";

function Header() {

  return (
    <div className={s.header}>
      <div className={s.content}>
        <img src={taptcha} className={s.logo} alt="Logo" />

        <div className={s.menu}>
          <p className={`${s.item} ${s.selected}`}>Home</p>
          <p className={s.item}>Documentation</p>
        </div>
      </div>
    </div>
  );
}

export default Header;