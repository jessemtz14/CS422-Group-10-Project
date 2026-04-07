import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import { useState } from "react";

const PRODUCTS = [
  {
    id: "unsafe",
    name: "Nature Valley Crunchy Granola Bar",
    subtitle: "Oats 'n Honey — 1.49 oz (42g)",
    safe: false,
    ingredients: "Whole Grain Oats, Sugar, Canola Oil, Rice Flour, Honey, Salt, Brown Sugar Syrup, Baking Soda, Soy Lecithin, Natural Flavor.",
    detected: [
      { name: "Almonds", detail: "Tree Nut — listed in ingredients" },
      { name: "Peanut Butter", detail: "Peanut — listed in ingredients" },
    ],
  },
  {
    id: "safe",
    name: "Lay's Classic Potato Chips",
    subtitle: "Potato Chips — 2.0 oz (42g)",
    safe: true,
    ingredients: "Potatoes, Vegetable Oil, Salt, Sugar",
    detected: [],
  },
];

export default function Scan() {
  const [scanResult, setScanResult] = useState(null);

  // Camera view
  if (!scanResult) {
    return (
      <PhoneFrame>
        <StatusBar />
        <section className="scan-container">
          <p className="camera-label">Align barcode or ingredient label here</p>
          <div className="camera-frame">
            <div className="camera-viewfinder">
              <div className="hex-icon">◆</div>
            </div>
          </div>
          <p className="scan-instructions">
            Point your camera at a product's barcode or ingredient label to scan it.
          </p>
          <div className="camera-button-container">
            <button className="camera-button"></button>
          </div>

          <p style={{ fontWeight: 700, fontSize: "0.9rem", marginTop: 8 }}>Demo: Tap to simulate scan</p>
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              onClick={() => setScanResult(p)}
              className="card"
              style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                <strong style={{ fontSize: "0.9rem" }}>{p.name}</strong>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.8rem" }}>{p.subtitle}</p>
              </div>
              <span
                className="warn-notice"
                style={{
                  background: p.safe ? "#C8E6C9" : "#FF9191",
                  color: p.safe ? "#2E7D32" : "firebrick",
                  fontSize: "0.75rem",
                }}
              >
                {p.safe ? "Safe" : "Unsafe"}
              </span>
            </div>
          ))}
        </section>
        <BottomNav />
      </PhoneFrame>
    );
  }

  // Scan result view
  const p = scanResult;
  return (
    <PhoneFrame>
      <StatusBar />
      <section className="hero">
        <h1 style={{ textAlign: "left" }}>
          <span onClick={() => setScanResult(null)} style={{ cursor: "pointer" }}>← </span>
          Scan Result
        </h1>
      </section>

      <section className="content" style={{ overflow: "auto" }}>
        {/* Safe / Unsafe banner */}
        {p.safe ? (
          <div className="scan-banner scan-banner-safe">
            <span style={{ fontSize: "2rem" }}>✅</span>
            <h2 style={{ margin: "4px 0 0", color: "#2E7D32" }}>SAFE FOR ALLERGY</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "var(--muted)" }}>
              This product is free from allergens in your profile.
            </p>
          </div>
        ) : (
          <div className="scan-banner scan-banner-unsafe">
            <span style={{ fontSize: "2rem" }}>⛔</span>
            <h2 style={{ margin: "4px 0 0", color: "#fff" }}>NOT SAFE</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>
              This product contains allergens in your profile
            </p>
          </div>
        )}

        {/* Product info */}
        <article className="card card-highlight">
          <p className="card-label">Product</p>
          <h2 style={{ margin: "4px 0 2px", fontSize: "1.1rem" }}>{p.name}</h2>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem" }}>{p.subtitle}</p>
        </article>

        {/* Detected allergens or safe confirmation */}
        {p.safe ? (
          <article className="card" style={{ border: "2px solid #C8E6C9" }}>
            <h3 style={{ color: "#2E7D32", fontSize: "0.95rem", marginBottom: 8 }}>✅ No Allergens Detected</h3>
            <p className="card-label" style={{ marginBottom: 4 }}>Ingredients</p>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.5 }}>{p.ingredients}</p>
          </article>
        ) : (
          <>
            <article className="card" style={{ background: "#FFF3F3", border: "1px solid #FFCDD2" }}>
              <h3 style={{ color: "firebrick", fontSize: "0.95rem", marginBottom: 8 }}>⚠️ Detected Allergens</h3>
              {p.detected.map((d, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderTop: i > 0 ? "1px solid #FFCDD2" : "none" }}>
                  <span style={{ fontSize: "1.2rem" }}>🚫</span>
                  <div>
                    <strong style={{ color: "firebrick", fontSize: "0.9rem" }}>{d.name}</strong>
                    <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.8rem" }}>{d.detail}</p>
                  </div>
                </div>
              ))}
            </article>
            <article className="card card-highlight">
              <p className="card-label" style={{ marginBottom: 4 }}>Full Ingredients</p>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>
                {p.ingredients} <span style={{ color: "firebrick", fontWeight: 700 }}>Contains: {p.detected.map(d => d.name).join(", ")}</span>.
              </p>
            </article>
          </>
        )}

        <button
          className="primary-button"
          style={{ background: "#027a26" }}
          onClick={() => setScanResult(null)}
        >
          Scan Another Item
        </button>
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
