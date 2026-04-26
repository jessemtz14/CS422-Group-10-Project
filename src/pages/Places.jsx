import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";
import { useState } from "react";
import { RESTAURANTS } from "../data/places";

export default function Places() {
  const [selected, setSelected] = useState(null);
  const [activePin, setActivePin] = useState(null);
  const { addActivity } = useAllergies();

  const getPinStyle = () => {
    return {
      container: {
        flexDirection: "column-reverse",
        transform: "translate(-50%, 0)",
      },
      callout: { marginRight: "12px", marginBottom: 0 },
    };
  };

  function selectRestaurant(r) {
    setSelected(r);
    const statusLabel =
      r.safety === "Safe" ? "Safe"
      : r.safety === "Caution" ? "Caution"
      : "Unsafe";
    addActivity(
      "📍",
      `Viewed: ${r.name}`,
      statusLabel,
      r.safetyColor,
      r.safetyBg,
    );
  }

  // Restaurant detail view
  if (selected) {
    const r = selected;
    const isSafe = r.safety === "Safe";
    const bannerStyle =
      isSafe ? { background: "#E8F5E9", border: "1px solid #C8E6C9" }
      : r.safety === "Caution" ?
        { background: "#FFF9C4", border: "1px solid #F9A825" }
      : { background: "#FFF3F3", border: "1px solid #FFCDD2" };
    const bannerTextColor =
      isSafe ? "#2E7D32"
      : r.safety === "Caution" ? "#7B6B00"
      : "#D32F2F";

    return (
      <PhoneFrame>
        <StatusBar />
        <section className="hero">
          <span
            className="hero-back-button"
            onClick={() => setSelected(null)}
            style={{ cursor: "pointer" }}
          >
            ←
          </span>
          <h1>{r.name}</h1>
        </section>

        <section className="content" style={{ overflow: "auto" }}>
          {/* Safety banner */}
          <div className="scan-banner" style={{ ...bannerStyle }}>
            <span style={{ fontSize: "2rem" }}>{isSafe ? "✅" : "⚠️"}</span>
            <h2 style={{ margin: "4px 0 0", color: bannerTextColor }}>
              {isSafe ?
                "SAFE FOR YOU"
              : r.safety === "Caution" ?
                "USE CAUTION"
              : "NOT RECOMMENDED"}
            </h2>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "0.85rem",
                color: "var(--muted)",
              }}
            >
              {isSafe ? "This restaurant accommodates your allergies" : r.note}
            </p>
          </div>

          {/* Info */}
          <article className="card card-highlight">
            <p style={{ margin: "0 0 4px", fontSize: "0.85rem" }}>
              📍 {r.address}
            </p>
            <p
              style={{
                margin: "0 0 4px",
                fontSize: "0.85rem",
                color: "var(--muted)",
              }}
            >
              ⭐ {r.stars} ({r.reviews}) · {r.price}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#2E7D32",
                fontWeight: 600,
              }}
            >
              🕐 {r.hours}
            </p>
          </article>

          {/* Accommodations */}
          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 10 }}>
              Allergy Accommodations
            </h3>
            {r.accommodations.map((a, i) => (
              <div
                key={i}
                style={{
                  padding: "6px 0",
                  borderTop: i > 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                  {a}
                </span>
              </div>
            ))}
          </article>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="primary-button"
              style={{ flex: 1, background: "#027a26", marginTop: 0 }}
            >
              📞 Call
            </button>
            <button
              className="primary-button"
              style={{
                flex: 1,
                background: "transparent",
                border: "2px solid #027a26",
                color: "#027a26",
                marginTop: 0,
              }}
            >
              🗺️ Directions
            </button>
          </div>
        </section>
      </PhoneFrame>
    );
  }

  // Map + list view
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Nearby Places" />

      <section className="content" style={{ overflow: "auto" }}>
        {/* Map */}
        <div className="places-map">
          {/* Grid lines for map feel */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`h${i}`}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${i * 25}px`,
                height: 1,
                background: "rgba(0,0,0,0.05)",
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={`v${i}`}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${i * 55}px`,
                width: 1,
                background: "rgba(0,0,0,0.05)",
              }}
            />
          ))}

          {/* Pins */}
          {RESTAURANTS.map((r) => {
            const styleConfig = getPinStyle();
            return (
              <div
                key={r.letter}
                className="map-pin"
                style={{ top: r.top, left: r.left, ...styleConfig.container }}
                onClick={() =>
                  setActivePin(activePin === r.letter ? null : r.letter)
                }
              >
                {activePin === r.letter && (
                  <div
                    className="pin-callout"
                    style={{ ...styleConfig.callout, cursor: "default" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <strong>{r.name}</strong>
                    <div style={{ color: r.safetyColor, fontWeight: 600 }}>
                      {r.safety} · {r.dist}
                    </div>
                  </div>
                )}
                <div className="pin-dot" style={{ background: r.safetyColor }}>
                  {r.letter}
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div className="map-legend">
            <div className="legend-row">
              <div
                className="legend-circle"
                style={{ background: "#2E7D32" }}
              ></div>{" "}
              Safe
            </div>
            <div className="legend-row">
              <div
                className="legend-circle"
                style={{ background: "#F9A825" }}
              ></div>{" "}
              Caution
            </div>
            <div className="legend-row">
              <div
                className="legend-circle"
                style={{ background: "#D32F2F" }}
              ></div>{" "}
              Unsafe
            </div>
          </div>
        </div>

        {/* Restaurant list */}
        {RESTAURANTS.map((r) => (
          <div
            key={r.letter}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => selectRestaurant(r)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong style={{ fontSize: "0.9rem" }}>
                  {r.name} ({r.letter})
                </strong>
                <p
                  style={{
                    margin: "2px 0 0",
                    color: "var(--muted",
                    fontSize: "0.8rem",
                  }}
                >
                  {r.dist} · ⭐ {r.stars}
                </p>
              </div>
              <span
                className="warn-notice"
                style={{
                  color: r.safetyColor,
                  background: r.safetyBg,
                  fontSize: "0.75rem",
                  padding: "4px 10px",
                }}
              >
                {r.safety}
              </span>
            </div>
            <p
              style={{
                margin: "4px 0 0",
                color: "var(--muted)",
                fontSize: "0.8rem",
              }}
            >
              {r.note}
            </p>
          </div>
        ))}
      </section>
    </PhoneFrame>
  );
}
