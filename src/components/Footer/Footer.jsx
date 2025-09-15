import { Link } from "react-router-dom";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.block_one}>
          <Link className={s.link} to="/">
            <img src="/logo_light.svg" alt="logo_light" />
            AeroVision
          </Link>

          <p className={s.text}>© Copyright 2023. All Rights Reserved.</p>
        </div>

        <div className={s.block_two}>
          <p className={s.text}>FOLLOW US:</p>

          <div className={s.box}>
            <a
              className={s.link}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img src="/facebook.png" alt="facebook" />
            </a>
            <a className={s.link} href="https://x.com/" target="_blank">
              <img src="/twitter.png" alt="twitter" />
            </a>
            <a
              className={s.link}
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <img src="/linkedin.png" alt="linkedin" />
            </a>
            <a className={s.link} href="https://www.gmail.com/" target="_blank">
              <img src="/email.png" alt="email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
