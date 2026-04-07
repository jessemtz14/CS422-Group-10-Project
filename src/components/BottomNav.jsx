import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.png";
import cameraIcon from "../assets/camera.png";
import searchIcon from "../assets/search.png";
import placesIcon from "../assets/places.png";
import profileIcon from "../assets/profile.png";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink className="nav-item" to="/">
        <img src={homeIcon} alt="Home" />
        Home
      </NavLink>

      <NavLink className="nav-item" to="/scan">
        <img src={cameraIcon} alt="Scan" />
        Scan
      </NavLink>

      <NavLink className="nav-item" to="/search">
        <img src={searchIcon} alt="Search" />
        Search
      </NavLink>

      <NavLink className="nav-item" to="/places">
        <img src={placesIcon} alt="Places" />
        Places
      </NavLink>

      <NavLink className="nav-item" to="/profile">
        <img src={profileIcon} alt="Profile" />
        Profile
      </NavLink>
    </nav>
  );
}
