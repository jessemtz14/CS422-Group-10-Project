import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import AllergyListMicro from "../components/AllergyListMicro";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Allergy Ward">
        <p className="hero-copy">Hi, John 👋🏻</p>
      </Hero>

      <div className="home-actions">
        <Link to="/scan" className="btn-action btn-scan">
          📸 Scan Item
        </Link>
        <Link to="/search" className="btn-action btn-lookup">
          🔍 Look Up
        </Link>
      </div>

      <section className="content">
        <article className="card card-highlight">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3 className="card-label">Active Allergies</h3>
            <Link to="/edit-allergy" style={{ marginLeft: "auto" }}>
              <button className="warn-notice">Edit✏️</button>
            </Link>
          </div>
          <AllergyListMicro />
        </article>

        <article className="card">
          <p className="card-label">Recent Activity</p>
          <ul className="feature-list">
            <li>Updated allergy profile</li>
            <li>Scanned: Peanut butter - Not Safe ❌</li>
            <li>Searched: Dairy products</li>

            <li>Scanned: Almond Milk - Contains allergens ⚠️</li>
            
          </ul>
        </article>
      </section>
      <div className="stats-card">
        <a className="stat" href="#scan">
          <span className="primary-button" type="button">
            Scan
          </span>
        </a>
        <a className="search" href="#search">
          <span className="primary-button" type="button">
            Search
          </span>
        </a>
      </div>

      <BottomNav />
    </PhoneFrame>
  );
}
