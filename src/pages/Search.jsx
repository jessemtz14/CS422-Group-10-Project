import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useState } from "react";

const SEARCH_ITEMS = [
  { name: "Gelato", desc: "Italian frozen dessert", icon: "🍨" },
  { name: "Gelato (Pistachio)", desc: "Pistachio-flavored gelato", icon: "🟢" },
  { name: "Gelato (Hazelnut)", desc: "Hazelnut-flavored gelato", icon: "🟤" },
];

const RECENT = ["Praline", "Marzipan"];

const RISK_BY_FLAVOR = [
  { flavor: "Pistachio", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
  { flavor: "Hazelnut / Nocciola", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
  { flavor: "Chocolate", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4" },
  { flavor: "Vanilla / Strawberry", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [showDetail, setShowDetail] = useState(false);

  const results = query.length > 0
    ? SEARCH_ITEMS.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  // Detail view for Gelato
  if (showDetail) {
    return (
      <PhoneFrame>
        <StatusBar />
        <section className="hero">
          <h1 style={{ textAlign: "left" }}>
            <span onClick={() => setShowDetail(false)} style={{ cursor: "pointer" }}>← </span>
            Gelato
          </h1>
        </section>

        <section className="content" style={{ overflow: "auto" }}>
          {/* Caution banner */}
          <div className="scan-banner scan-banner-caution">
            <span style={{ fontSize: "2rem" }}>⚠️</span>
            <h2 style={{ margin: "4px 0 0", color: "#7B6B00" }}>USE CAUTION</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "#7B6B00" }}>
              May contain allergens depending on flavor
            </p>
          </div>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>What is Gelato?</h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Gelato is an Italian-style frozen dessert made from milk, cream, sugar, and flavorings.
              While the base is typically nut-free, many popular flavors contain tree nuts or are
              produced alongside nut-based flavors.
            </p>
          </article>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 8 }}>Risk by Flavor</h3>
            {RISK_BY_FLAVOR.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "8px 0",
                  borderTop: i > 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{f.flavor}</span>
                <span
                  className="warn-notice"
                  style={{ color: f.color, background: f.bg, fontSize: "0.75rem", padding: "4px 10px" }}
                >
                  {f.risk}
                </span>
              </div>
            ))}
          </article>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>Alternatives</h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem" }}>
              Talenti Sorbetto, Fruit-based gelato
            </p>
          </article>
        </section>

        <BottomNav />
      </PhoneFrame>
    );
  }

  // Search list view
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Search Foods" />

      <section className="content">
        {/* Search bar */}
        <div className="search-bar-container">
          <span style={{ fontSize: "1.1rem" }}>🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search allergens..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <span
              onClick={() => setQuery("")}
              style={{ cursor: "pointer", color: "firebrick", fontWeight: 700, fontSize: "1.1rem" }}
            >
              ✕
            </span>
          )}
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div>
            <p className="card-label" style={{ marginBottom: 8 }}>Results</p>
            {results.map((item, i) => (
              <div
                key={i}
                onClick={() => setShowDetail(true)}
                className="card"
                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}
              >
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: "0.9rem" }}>{item.name}</strong>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.8rem" }}>{item.desc}</p>
                </div>
                <span style={{ color: "var(--muted)", fontSize: "1rem" }}>→</span>
              </div>
            ))}
          </div>
        )}

        {/* Recent searches */}
        {!query && (
          <div>
            <p className="card-label" style={{ marginBottom: 8 }}>Recent Searches</p>
            {RECENT.map((s, i) => (
              <div
                key={i}
                onClick={() => setQuery(s)}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "var(--muted)" }}>🕐</span>
                <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{s}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
