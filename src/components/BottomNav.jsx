import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink className="nav-item" to="/">
        <img src="/src/assets/home.png" alt="Home screen icon" />
        Home
      </NavLink>

      <NavLink className="nav-item" to="/scan">
        <img src="/src/assets/camera.png" alt="Camera icon" />
        Scan
      </NavLink>

      <NavLink className="nav-item" to="/search">
        <img src="/src/assets/search.png" alt="Search icon" />
        Search
      </NavLink>

      <NavLink className="nav-item" to="/places">
        <img src="/src/assets/places.png" alt="Map pin icon" />
        Places
      </NavLink>

      <NavLink className="nav-item" to="/profile">
        <img src="/src/assets/profile.png" alt="Profile icon" />
        Profile
      </NavLink>
    </nav>
  );
}
