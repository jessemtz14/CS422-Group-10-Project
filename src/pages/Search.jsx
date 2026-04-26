import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";
import { useState } from "react";
import { FOODS } from "../data/foods";
import ExpandableText from "../components/ExpandableText";
// Food database

export default function Search() {
  const [query, setQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [recentSearches, setRecentSearches] = useState(["Praline", "Marzipan"]);
  const { addActivity, allergies } = useAllergies();
  function isSafe(food) {
      return food.risks.filter(x => allergies.includes(x.allergen)).length == 0;
    }
  function isHighRisk(food) {
    return food.risks.filter(x => allergies.includes(x.allergen) && x.risk === "High Risk").length > 0;
  }
  const results = query.length > 0
    ? FOODS.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  
  function openDetail(food) {
    setSelectedFood(food);
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s !== food.name);
      return [food.name, ...filtered].slice(0, 5);
    });
    
    const statusLabel = isSafe(food) ? "Safe" : isHighRisk(food) ? "Avoid" : "Caution";
    const statusColor = isSafe(food)  ? "#2E7D32" : isHighRisk(food) ? "firebrick" : "#7B6B00";
    const statusBg = isSafe(food)  ? "#C8E6C9" : isHighRisk(food) === "unsafe" ? "#FF9191" : "#FFF9C4";
    addActivity("🔍", `Searched: ${food.name}`, statusLabel, statusColor, statusBg);
  }

  // Detail view
  if (selectedFood) {
    const food = selectedFood;
    const safe = isSafe(food)
    const hasHighRisk = isHighRisk(food)
    const bannerClass =
      safe ? "scan-banner-safe" :
      hasHighRisk ? "scan-banner-unsafe" :
      "scan-banner-caution";
    const labelColor =
      safe  ? "#2E7D32" :
      hasHighRisk  ? "#fff" :
      "#7B6B00";
    const noteColor =
      safe ? "rgba(255,255,255,0.85)" :
      hasHighRisk  ? "var(--muted)" :
      "#7B6B00";
    
    return (
      <PhoneFrame>
        <StatusBar />
        <section className="hero">
          <h1 style={{ textAlign: "left" }}>
            <span onClick={() => setSelectedFood(null)} style={{ cursor: "pointer" }}>← </span>
            {food.name}
          </h1>
        </section>

        <section className="content" style={{ overflow: "auto" }}>
          <div className={`scan-banner ${bannerClass}`}>
            <span style={{ fontSize: "2rem" }}>
              {safe ? "✅" : hasHighRisk ? "⛔" : "⚠️"}
            </span>
            <h2 style={{ margin: "4px 0 0", color: labelColor }}>{safe ? "SAFE FOR YOU" : hasHighRisk ? "UNSAFE" : "USE CAUTION"}</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: noteColor }}>
              {food.safetyNote}
            </p>
          </div>

          <article className="card card-highlight">
            
            <ExpandableText food={food.name} text= {food.about} />
          </article>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 8 }}>Risk Breakdown</h3>
            {food.risks.filter(x => allergies.includes(x.allergen)).length == 0 
            ? <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}> No risks found.</p> 
            : food.risks.filter(x => allergies.includes(x.allergen)).map((r, i) => (
              <div
                key={i}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "8px 0",
                  borderTop: i > 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{r.flavor}</span>
                <span
                  className="warn-notice"
                  style={{ color: r.color, background: r.bg, fontSize: "0.75rem", padding: "4px 10px" }}
                >
                  {r.risk}
                </span>
              </div>
            ))}

             

          </article>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>Safe Alternatives</h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem" }}>
              {food.alternatives}
            </p>
          </article>
        </section>

      </PhoneFrame>
    );
  }

  // Search list view
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Search Foods" />

      <section className="content" style={{ overflow: "auto" }}>
        <div className="search-bar-container" style={{ height: 48 }}>
          <span style={{ fontSize: "1.1rem" }}>🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search foods..."
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

        {results.length > 0 && (
          <div>
            <p className="card-label" style={{ marginBottom: 8 }}>Results</p>
            {results.map((item, i) => (
              <div
                key={i}
                onClick={() => openDetail(item)}
                className="card"
                style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}
              >
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: "0.9rem" }}>{item.name}</strong>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.8rem" }}>{item.desc}</p>
                </div>
                
                <span
                  className="warn-notice"
                  style={{
                    fontSize: "0.65rem",
                    padding: "3px 8px",
                    color: isSafe(item) ? "#2E7D32" : isHighRisk(item) ? "firebrick" : "#7B6B00",
                    background: isSafe(item)  ? "#C8E6C9" : isHighRisk(item) ? "#FF9191" : "#FFF9C4",
                  }}
                >
                  {isSafe(item) ? "Safe" :  isHighRisk(item) ? "Unsafe" : "Caution"}
                </span>
              </div>
            ))}
          </div>
        )}

        {query.length > 0 && results.length === 0 && (
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", textAlign: "center", padding: 20 }}>
            No results found for "{query}"
          </p>
        )}

        {!query && (
          <div>
            <p className="card-label" style={{ marginBottom: 8 }}>Recent Searches</p>
            {recentSearches.map((s, i) => {
              const food = FOODS.find((f) => f.name === s);
              return (
                <div
                  key={i}
                  onClick={() => {
                    if (food) openDetail(food);
                    else setQuery(s);
                  }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{food ? food.icon : "🕐"}</span>
                  <span style={{ fontSize: "0.9rem", flex: 1 }}>{s}</span>
                  {food && (
                    <span
                      className="warn-notice"
                      style={{
                        fontSize: "0.65rem",
                        padding: "3px 8px",
                        color: isSafe(food) ? "#2E7D32" : isHighRisk(food)? "firebrick" : "#7B6B00",
                        background: isSafe(food) ? "#C8E6C9" :  isHighRisk(food)? "#FF9191" : "#FFF9C4",
                      }}
                    >
                      {isSafe(food)  ? "Safe" :  isHighRisk(food) ? "Unsafe" : "Caution"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

    </PhoneFrame>
  );
}
