import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink className="nav-item" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item" to="/scan">
        Scan
      </NavLink>
      <NavLink className="nav-item" to="/search">
        Search
      </NavLink>
      <NavLink className="nav-item" to="/places">
        Places
      </NavLink>
      <NavLink className="nav-item" to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}
