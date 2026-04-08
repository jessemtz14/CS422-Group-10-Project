import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import AllergyListMicro from "../components/AllergyListMicro";
import { Link } from "react-router-dom";
import { useAllergies } from "../context/AllergyContext";

export default function Home() {
  const { allergies, recentActivity } = useAllergies();

  return (
    <PhoneFrame>
      <StatusBar />

      <section className="hero">
        <h1 style={{ textDecoration: "underline", fontStyle: "italic" }}>Allergy Ward</h1>
        <p className="hero-copy" style={{ fontSize: "1.4rem", fontWeight: 700 }}>Hi, John 👋</p>
        <p className="hero-copy" style={{ fontSize: "0.85rem" }}>
          Your allergies:{" "}
          {allergies.map((a, i) => (
            <span key={a} style={{ color: "firebrick", fontWeight: 700 }}>
              {i > 0 ? ", " : ""}{a}
            </span>
          ))}
        </p>
      </section>

      <div className="home-actions">
        <Link to="/scan" className="btn-action btn-scan">
          📸 Scan Item
        </Link>
        <Link to="/search" className="btn-action btn-lookup">
          🔍 Look Up
        </Link>
      </div>

      <section className="content">
        <article className="card" style={{ background: "rgba(255, 200, 200, 0.35)", border: "1px solid rgba(255, 145, 145, 0.4)" }}>
          <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ddd", paddingBottom: 8, marginBottom: 8 }}>
            <span style={{ fontSize: "1rem", marginRight: 6 }}>⚠️</span>
            <span style={{ color: "firebrick", fontWeight: 700, fontSize: "0.9rem" }}>Active Allergies</span>
            <Link to="/edit-allergy" style={{ marginLeft: "auto" }}>
              <span className="warn-notice" style={{ fontSize: "0.8rem", padding: "4px 12px", background: "rgba(255,255,255,0.6)" }}>Edit ✏️</span>
            </Link>
          </div>
          <AllergyListMicro />
        </article>

        <div>
          <p style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 10 }}>Recent Activity</p>
          {recentActivity.map((item, i) => (
            <article
              key={i}
              className="card"
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, padding: "12px 14px" }}
            >
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: "0.85rem", display: "block" }}>{item.text}</strong>
                <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{item.time}</span>
              </div>
              <span
                className="warn-notice"
                style={{
                  color: item.statusColor,
                  background: item.statusBg,
                  fontSize: "0.72rem",
                  padding: "4px 10px",
                }}
              >
                {item.status}
              </span>
            </article>
          ))}
        </div>
      </section>

    </PhoneFrame>
  );
}
