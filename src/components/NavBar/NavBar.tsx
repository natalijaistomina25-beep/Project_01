import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to={"/"} className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to={"/counter"} className={navLinkClass}>
        Counter
      </NavLink>
      <NavLink to={"/nationalize"} className={navLinkClass}>
        Nationalize
      </NavLink>
      <NavLink to={"/space-mission"} className={navLinkClass}>
        Space Mission
      </NavLink>
      <NavLink to={"/contacts"} className={navLinkClass}>
        Contacts
      </NavLink>
      <NavLink to={"/about"} className={navLinkClass}>
        About
      </NavLink>
      <NavLink to={"/profile"} className={navLinkClass}>
        Profile
      </NavLink>
    </nav>
  );
}