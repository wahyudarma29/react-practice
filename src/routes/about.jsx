import { Link, Outlet } from "react-router-dom";

export default function AboutPage() {
  return (
    <div>
      <h1>This is about page</h1>
      <p>Welcome</p>

      <Link to="karangasem">karangasem</Link>
      <Link to="denpasar">denpasar</Link>
      <Link to="singaraja">singaraja</Link>

      <Outlet />
    </div>
  );
}
