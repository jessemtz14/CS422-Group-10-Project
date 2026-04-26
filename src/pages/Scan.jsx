import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";
import { useState } from "react";
import { PRODUCTS } from "../data/scans";

export default function Scan() {
  const [scanResult, setScanResult] = useState(null);
  const { addActivity, allergies } = useAllergies();
  function isSafe(item) {
    return (
      item.detected.filter((x) => allergies.includes(x.allergen)).length == 0
    );
  }
  function handleScan(product) {
    setScanResult(product);
    if (product.safe) {
      addActivity(
        "📷",
        `Scanned: ${product.name}`,
        "Safe",
        "#2E7D32",
        "#C8E6C9",
      );
    } else {
      addActivity(
        "📷",
        `Scanned: ${product.name}`,
        "Unsafe",
        "firebrick",
        "#FF9191",
      );
    }
  }

  // Camera view
  if (!scanResult) {
    return (
      <PhoneFrame>
        <StatusBar />
        <Hero title="Scan Product" />

        <section className="scan-container" style={{ paddingTop: 0 }}>
          <div className="camera-frame" style={{ marginTop: "10px" }}>
            <div className="camera-viewfinder">
              <div className="hex-icon">◆</div>
            </div>
          </div>
          <p
            className="scan-instructions"
            style={{ textAlign: "center", marginTop: "4px", fontWeight: 700 }}
          >
            Align barcode or ingredient label here
          </p>
          <p
            className="scan-instructions"
            style={{
              textAlign: "center",
              color: "var(--muted)",
              fontSize: "0.85rem",
              margin: 0,
            }}
          >
            Point your camera at a product to scan it.
          </p>
          <div className="camera-button-container">
            <button className="camera-button"></button>
          </div>

          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              onClick={() => handleScan(p)}
              className="card"
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong style={{ fontSize: "0.9rem" }}>{p.name}</strong>
                <p
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    fontSize: "0.8rem",
                  }}
                >
                  {p.subtitle}
                </p>
              </div>
              <span
                className="warn-notice"
                style={{
                  background: isSafe(p) ? "#C8E6C9" : "#FF9191",
                  color: isSafe(p) ? "#2E7D32" : "firebrick",
                  fontSize: "0.75rem",
                }}
              >
                {isSafe(p) ? "Safe" : "Unsafe"}
              </span>
            </div>
          ))}
        </section>
      </PhoneFrame>
    );
  }

  // Scan result view
  const p = scanResult;

  return (
    <PhoneFrame>
      <StatusBar />
      <section className="hero">
        <span
          className="hero-back-button"
          onClick={() => setScanResult(null)}
          style={{
            cursor: "pointer",
          }}
        >
          ←
        </span>
        <h1>Scan Result</h1>
      </section>

      <section className="content" style={{ overflow: "auto" }}>
        {isSafe(p) ?
          <div className="scan-banner scan-banner-safe">
            <span style={{ fontSize: "2rem" }}>✅</span>
            <h2 style={{ margin: "4px 0 0", color: "#2E7D32" }}>
              SAFE FOR ALLERGY
            </h2>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "0.85rem",
                color: "var(--muted)",
              }}
            >
              This product is free from allergens in your profile.
            </p>
          </div>
        : <div className="scan-banner scan-banner-unsafe">
            <span style={{ fontSize: "2rem" }}>⛔</span>
            <h2 style={{ margin: "4px 0 0", color: "#fff" }}>NOT SAFE</h2>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              This product contains allergens in your profile
            </p>
          </div>
        }

        <article className="card card-highlight">
          <p className="card-label">Product</p>
          <h2 style={{ margin: "4px 0 2px", fontSize: "1.1rem" }}>{p.name}</h2>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem" }}>
            {p.subtitle}
          </p>
        </article>

        {isSafe(p) ?
          <article className="card" style={{ border: "2px solid #C8E6C9" }}>
            <h3
              style={{ color: "#2E7D32", fontSize: "0.95rem", marginBottom: 8 }}
            >
              ✅ No Allergens Detected
            </h3>
            <p className="card-label" style={{ marginBottom: 4 }}>
              Ingredients
            </p>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                fontSize: "0.85rem",
                lineHeight: 1.5,
              }}
            >
              {p.ingredients}
            </p>
          </article>
        : <>
            <article
              className="card"
              style={{ background: "#FFF3F3", border: "1px solid #FFCDD2" }}
            >
              <h3
                style={{
                  color: "firebrick",
                  fontSize: "0.95rem",
                  marginBottom: 8,
                }}
              >
                ⚠️ Detected Allergens
              </h3>
              {p.detected
                .filter((x) => allergies.includes(x.allergen))
                .map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      borderTop: i > 0 ? "1px solid #FFCDD2" : "none",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>🚫</span>
                    <div>
                      <strong
                        style={{ color: "firebrick", fontSize: "0.9rem" }}
                      >
                        {d.name}
                      </strong>
                      <p
                        style={{
                          margin: 0,
                          color: "var(--muted)",
                          fontSize: "0.8rem",
                        }}
                      >
                        {d.detail}
                      </p>
                    </div>
                  </div>
                ))}
            </article>
            <article className="card card-highlight">
              <p className="card-label" style={{ marginBottom: 4 }}>
                Full Ingredients
              </p>
              <p
                style={{
                  margin: 0,
                  color: "var(--muted)",
                  fontSize: "0.8rem",
                  lineHeight: 1.5,
                }}
              >
                {p.ingredients}{" "}
                <span style={{ color: "firebrick", fontWeight: 700 }}>
                  Contains:{" "}
                  {p.detected
                    .filter((x) => allergies.includes(x.allergen))
                    .map((d) => d.name)
                    .join(", ")}
                </span>
                .
              </p>
            </article>
          </>
        }

        <button
          className="primary-button"
          style={{ background: "#027a26" }}
          onClick={() => setScanResult(null)}
        >
          Scan Another Item
        </button>
      </section>
    </PhoneFrame>
  );
}
