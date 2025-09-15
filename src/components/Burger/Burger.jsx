import { Link, NavLink } from "react-router-dom";
import s from "./Burger.module.css";
import { useContext } from "react";
import { MyContext } from "../../Context";

const Burger = () => {
  const { isBurger, switchBurger } = useContext(MyContext);

  return (
    <div
      className={`${s.burger} ${isBurger ? s.active : ""}`}
      onClick={switchBurger}
    >
      <div className={s.container} onClick={(e) => e.stopPropagation()}>
        <img
          className={s.close}
          src="/close.png"
          alt="close"
          onClick={switchBurger}
        />

        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to={"/"}
          onClick={switchBurger}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to={"/About_Me"}
          onClick={switchBurger}
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to={"/Services"}
          onClick={switchBurger}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to={"/Blog"}
          onClick={switchBurger}
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to={"/Contact_Me"}
          onClick={switchBurger}
        >
          Contact Me
        </NavLink>
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to={"/Admin"}
          onClick={switchBurger}
        >
          Admin
        </NavLink>

        <Link className={s.btn} to={"/Contact_Me"} onClick={switchBurger}>
          Let’s chat
        </Link>
      </div>
    </div>
  );
};

export default Burger;
