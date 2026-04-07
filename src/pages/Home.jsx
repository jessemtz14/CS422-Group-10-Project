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
          <p className="card-label">Screen Sections</p>
          <ul className="feature-list">
            <li>Header / branding area</li>
            <li>Main content card</li>
            <li>Action button</li>
            <li>Bottom navigation</li>
          </ul>
        </article>
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
