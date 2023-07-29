import { NavLink, Outlet } from "react-router-dom";
import s from "../styles/root.module.css";

export default function Root() {
  function setActive(isActive) {
    return isActive ? s.active : "";
  }

  return (
    <div>
      {/* always use link to navigate, DO NOT use button */}
      <header className={s.header}>
        <NavLink className={({ isActive }) => setActive(isActive)} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => setActive(isActive)} to="/about">
          About
        </NavLink>
      </header>

      <Outlet />
    </div>
  );
}
