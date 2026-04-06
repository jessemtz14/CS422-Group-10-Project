import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import AllergyList from "../components/AllergyList";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero eyebrow="Class Project" title="My Profile">
        <div className="card card-highlight">
          <div className="profile-container">
            <img
              src="https://static.thenounproject.com/png/638636-200.png"
              width="100"
              alt="Profile"
              className="profile-icon"
            />
            <div>
              <h2>John Doe</h2>
              <h3>johndoe@gmail.com</h3>
            </div>
          </div>
        </div>
      </Hero>

      <section className="content">
        <article className="card card-highlight">
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ddd" }}>
            <h3 className="card-label">My Allergies</h3>
            <Link to="/edit-allergy" style={{ marginLeft: "auto" }}>
              <button className="warn-notice">Edit✏️</button>
            </Link>
          </div>

          <AllergyList />
        </article>
        <article className="card card-highlight">
            <div style={{display: "flex", alignItems: "center", padding: "0px", borderBottom: "1px solid #ddd"}}>
                  <h3 className="card-label">Emergency Contact</h3>
                   <Link to="/profile" style={{ marginLeft: "auto" }}>
              <button className="warn-notice">Edit✏️</button>
            </Link>
            </div>
            <div className="feature-list">
              <h3 className="card-label-hard">Sarah Doe (Mother)</h3>
              <h3 className="card-label">(773) 123-4567</h3>
            </div>
          </article>
        <Link to="/allergy-card">
          <button className="primary-button">View Allergy Card</button>
        </Link>
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
