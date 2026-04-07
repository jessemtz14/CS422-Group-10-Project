import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink className="nav-item" to="/">
        <img src="/CS422-Group-10-Project/src/assets/home.png" alt="Home screen icon" />
        Home
      </NavLink>

      <NavLink className="nav-item" to="/scan">
        <img src="/CS422-Group-10-Project/src/assets/camera.png" alt="Camera icon" />
        Scan
      </NavLink>

      <NavLink className="nav-item" to="/search">
        <img src="/CS422-Group-10-Project/src/assets/search.png" alt="Search icon" />
        Search
      </NavLink>

      <NavLink className="nav-item" to="/places">
        <img src="/CS422-Group-10-Project/src/assets/places.png" alt="Map pin icon" />
        Places
      </NavLink>

      <NavLink className="nav-item" to="/profile">
        <img src="/CS422-Group-10-Project/src/assets/profile.png" alt="Profile icon" />
        Profile
      </NavLink>
    </nav>
  );
}
