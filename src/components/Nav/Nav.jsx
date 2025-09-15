import { Link, NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import Burger from "../Burger/Burger";
import { useContext } from "react";
import { MyContext } from "../../Context";

const Nav = () => {
  const { switchBurger } = useContext(MyContext);

  return (
    <nav className={s.nav}>
      <Link className={s.logo} to={"/"}>
        <img className={s.img} src="/logo.svg" alt="logo" />
        <h3 className={s.text}>AeroVision</h3>
      </Link>

      <div className={s.menu}>
        <div className={s.links}>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
            to={"/About_Me"}
          >
            About Me
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
            to={"/Services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
            to={"/Blog"}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ""}`
            }
            to={"/Contact_Me"}
          >
            Contact Me
          </NavLink>
        </div>

        <Link className={s.btn} to={"/Admin"}>
          Admin
        </Link>
      </div>

      <img
        className={s.burger}
        src="/burger.png"
        alt="burger"
        onClick={switchBurger}
      />

      <Burger />
    </nav>
  );
};

export default Nav;
