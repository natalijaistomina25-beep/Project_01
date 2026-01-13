// import { NavLink } from "react-router-dom";
// import s from "./NavBar.module.css";

// export default function NavBar() {
//   return (
//     <nav className={s.container}>
//       <NavLink to={"/"} className={s.link}>
//         Home
//       </NavLink>
//       <NavLink to={"/counter"} className={s.link}>
//         Counter
//       </NavLink>
//       <NavLink to={"/nationalityReveal"} className={s.link}>
//         NationalityReveal
//         </NavLink>
//          <NavLink to={"/space-mission"} className={s.link}>
//         SpaceMissionForm
//       </NavLink>
//     </nav>
//   );
// }

import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink to="/" end className={({ isActive }) => isActive ? s.activeLink : s.link}>
        Home
      </NavLink>

      <NavLink to="/counter" className={({ isActive }) => isActive ? s.activeLink : s.link}>
        Counter
      </NavLink>

      <NavLink to="/nationality-reveal" className={({ isActive }) => isActive ? s.activeLink : s.link}>
        Nationality Reveal
      </NavLink>

      <NavLink to="/space-mission" className={({ isActive }) => isActive ? s.activeLink : s.link}>
        Space Mission
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => isActive ? s.activeLink : s.link}>
        About
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? s.activeLink : s.link}>
        Contact
      </NavLink>
    </nav>
  );
}