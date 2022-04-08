import s from "../css/Buttons.module.css";

function ButtonFill(props) {
  return (
    <div className={`${s.buttonFill} ${props.className}`}>
      {props.children}
    </div>
  );
}

function ButtonOutline(props) {
  return (
    <div className={`${s.buttonOutline} ${props.className}`}>
      {props.children}
    </div>
  );
}

export { ButtonFill, ButtonOutline };