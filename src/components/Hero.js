import s from "../css/Hero.module.css";
import computer from "../img/svg/computer.svg";
import { ButtonFill, ButtonOutline } from "./Buttons";

function Hero() {
  return (
    <div className={s.hero}>
      <img src={computer} alt="Computer with Taptcha" className={s.computer} />

      <h1 className={s.bigHeading}>Tap, wait, <strong>done</strong>.</h1>

      <p className={s.description}>Taptcha slows down bots by making your browser bruteforce a hash. Just tap the checkbox and you’re done.</p>

      <div className={s.buttonContainer}>
        <ButtonFill className={s.button}>Documentation</ButtonFill>
        <ButtonOutline className={s.button}>Try it out</ButtonOutline>
      </div>
    </div>
  );
}

export default Hero;