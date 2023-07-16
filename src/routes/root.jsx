import { Link, Outlet } from "react-router-dom";
import s from "../styles/root.module.css";

export default function Root() {
  return (
    <div>
      {/* always use link to navigate, DO NOT use button */}
      <header className={s.header}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>

      <Outlet />
    </div>
  );
}
