import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useState } from "react";

// Food database
const FOODS = [
  {
    name: "Gelato",
    desc: "Italian frozen dessert",
    icon: "🍨",
    safety: "caution",
    safetyLabel: "USE CAUTION",
    safetyNote: "May contain allergens depending on flavor",
    about: "Gelato is an Italian-style frozen dessert made from milk, cream, sugar, and flavorings. While the base is typically nut-free, many popular flavors contain tree nuts or are produced alongside nut-based flavors.",
    risks: [
      { flavor: "Pistachio", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Hazelnut / Nocciola", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Chocolate", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4" },
      { flavor: "Vanilla / Strawberry", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9" },
    ],
    alternatives: "Talenti Sorbetto, Fruit-based gelato, Coconut milk ice cream",
  },
  {
    name: "Gelato (Pistachio)",
    desc: "Pistachio-flavored gelato",
    icon: "🟢",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Contains tree nuts (pistachio)",
    about: "Pistachio gelato is made with real pistachio nuts blended into the cream base. It directly contains tree nuts and is unsafe for anyone with a tree nut allergy.",
    risks: [
      { flavor: "Pistachio Nut Content", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Cross-contact", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
    ],
    alternatives: "Vanilla gelato, Strawberry sorbet, Lemon sorbet",
  },
  {
    name: "Gelato (Hazelnut)",
    desc: "Hazelnut-flavored gelato",
    icon: "🟤",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Contains tree nuts (hazelnut)",
    about: "Hazelnut gelato, also called Nocciola, is made with real hazelnuts. It contains tree nuts and is not safe for those with nut allergies.",
    risks: [
      { flavor: "Hazelnut Content", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Cross-contact", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
    ],
    alternatives: "Chocolate sorbet, Vanilla bean gelato, Fruit gelato",
  },
  {
    name: "Praline",
    desc: "Sugar-coated nut confection",
    icon: "🍬",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Made primarily from nuts and sugar",
    about: "Pralines are a confection made from nuts (typically almonds, pecans, or hazelnuts) cooked in boiling sugar. They are fundamentally a nut-based product and are not safe for those with nut allergies.",
    risks: [
      { flavor: "Almonds / Pecans", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Hazelnuts", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Peanut varieties", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
    ],
    alternatives: "Caramel candies (nut-free), Toffee (check label), Hard candies",
  },
  {
    name: "Marzipan",
    desc: "Almond-based confection",
    icon: "🟡",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Primary ingredient is almonds (tree nut)",
    about: "Marzipan is a confection made from ground almonds, sugar, and often egg whites. Since almonds are the main ingredient, marzipan is not safe for anyone with a tree nut allergy.",
    risks: [
      { flavor: "Almond Content", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Cross-contact in bakeries", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
    ],
    alternatives: "Fondant, Modeling chocolate, Bean paste (Japanese wagashi)",
  },
  {
    name: "Nougat",
    desc: "Chewy candy with nuts",
    icon: "🍫",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Typically contains almonds, pistachios, or other nuts",
    about: "Nougat is a chewy confection made from sugar, honey, egg whites, and typically mixed with roasted nuts. Most traditional nougat recipes include almonds or pistachios.",
    risks: [
      { flavor: "Almonds", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Pistachios", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Peanuts (some brands)", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4" },
    ],
    alternatives: "Marshmallows, Turkish delight (nut-free), Fruit leather",
  },
  {
    name: "Pesto",
    desc: "Italian basil sauce",
    icon: "🌿",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Traditional recipe contains pine nuts",
    about: "Pesto is a sauce made from basil, garlic, parmesan cheese, olive oil, and pine nuts. While pine nuts are technically seeds, they are classified as tree nuts for allergy purposes and can trigger reactions.",
    risks: [
      { flavor: "Pine Nuts", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Cross-contact", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4" },
    ],
    alternatives: "Nut-free pesto (sunflower seed based), Marinara sauce, Chimichurri",
  },
  {
    name: "Hummus",
    desc: "Chickpea-based dip",
    icon: "🫘",
    safety: "safe",
    safetyLabel: "SAFE FOR ALLERGY",
    safetyNote: "Typically nut-free, made from chickpeas and tahini",
    about: "Hummus is made from chickpeas, tahini (sesame paste), lemon juice, and garlic. Traditional hummus does not contain tree nuts or peanuts, though some flavored varieties may add them.",
    risks: [
      { flavor: "Plain / Classic", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9" },
      { flavor: "Flavored varieties", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4" },
    ],
    alternatives: "Baba ganoush, Tzatziki, Bean dip",
  },
  {
    name: "Granola",
    desc: "Oat-based cereal mix",
    icon: "🥣",
    safety: "caution",
    safetyLabel: "USE CAUTION",
    safetyNote: "Many brands contain tree nuts or peanuts",
    about: "Granola is made from rolled oats, honey or sugar, and often includes nuts, seeds, and dried fruits. Many commercial granola products contain almonds, walnuts, or peanuts, or are processed in facilities that handle nuts.",
    risks: [
      { flavor: "Most commercial brands", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Nut-free labeled brands", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9" },
    ],
    alternatives: "Nut-free granola (Made Good brand), Plain oatmeal, Rice cereal",
  },
  {
    name: "Pad Thai",
    desc: "Thai stir-fried noodle dish",
    icon: "🍜",
    safety: "caution",
    safetyLabel: "USE CAUTION",
    safetyNote: "Often topped with crushed peanuts",
    about: "Pad Thai is a stir-fried rice noodle dish commonly served with crushed peanuts on top. While the noodles and sauce may be nut-free, the peanut topping is standard. Always request no peanuts when ordering.",
    risks: [
      { flavor: "Peanut topping", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Peanut in sauce (some recipes)", risk: "Medium Risk", color: "#7B6B00", bg: "#FFF9C4" },
      { flavor: "Without peanuts (request)", risk: "Low Risk", color: "#2E7D32", bg: "#C8E6C9" },
    ],
    alternatives: "Pho (Vietnamese noodle soup), Lo Mein (check sauce), Rice dishes",
  },
  {
    name: "Nutella",
    desc: "Hazelnut chocolate spread",
    icon: "🫙",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Contains hazelnuts (tree nut)",
    about: "Nutella is a chocolate hazelnut spread. Hazelnuts are a primary ingredient, making it unsafe for anyone with tree nut allergies.",
    risks: [
      { flavor: "Hazelnut content", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
    ],
    alternatives: "SunButter (sunflower seed), Biscoff spread, Chocolate syrup",
  },
  {
    name: "Trail Mix",
    desc: "Mixed nuts, seeds, and dried fruit",
    icon: "🥜",
    safety: "unsafe",
    safetyLabel: "NOT SAFE",
    safetyNote: "Contains multiple types of nuts",
    about: "Trail mix is a snack blend typically containing peanuts, almonds, cashews, walnuts, and other nuts along with dried fruits and sometimes chocolate. It is not safe for nut allergy sufferers.",
    risks: [
      { flavor: "Peanuts", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
      { flavor: "Tree nuts (various)", risk: "High Risk", color: "firebrick", bg: "#FF9191" },
    ],
    alternatives: "Seed-based trail mix, Dried fruit mix, Pretzels and raisins",
  },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);
  const [recentSearches, setRecentSearches] = useState(["Praline", "Marzipan"]);

  const results = query.length > 0
    ? FOODS.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  function openDetail(food) {
    setSelectedFood(food);
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s !== food.name);
      return [food.name, ...filtered].slice(0, 5);
    });
  }

  // Detail view
  if (selectedFood) {
    const food = selectedFood;
    const bannerClass =
      food.safety === "safe" ? "scan-banner-safe" :
      food.safety === "unsafe" ? "scan-banner-unsafe" :
      "scan-banner-caution";
    const labelColor =
      food.safety === "safe" ? "#2E7D32" :
      food.safety === "unsafe" ? "#fff" :
      "#7B6B00";
    const noteColor =
      food.safety === "unsafe" ? "rgba(255,255,255,0.85)" :
      food.safety === "safe" ? "var(--muted)" :
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
              {food.safety === "safe" ? "✅" : food.safety === "unsafe" ? "⛔" : "⚠️"}
            </span>
            <h2 style={{ margin: "4px 0 0", color: labelColor }}>{food.safetyLabel}</h2>
            <p style={{ margin: "4px 0 0", fontSize: "0.85rem", color: noteColor }}>
              {food.safetyNote}
            </p>
          </div>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>What is {food.name}?</h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              {food.about}
            </p>
          </article>

          <article className="card card-highlight">
            <h3 style={{ fontSize: "0.95rem", marginBottom: 8 }}>Risk Breakdown</h3>
            {food.risks.map((r, i) => (
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

        <BottomNav />
      </PhoneFrame>
    );
  }

  // Search list view
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Search Foods" />

      <section className="content" style={{ overflow: "auto" }}>
        <div className="search-bar-container">
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
                    color: item.safety === "safe" ? "#2E7D32" : item.safety === "unsafe" ? "firebrick" : "#7B6B00",
                    background: item.safety === "safe" ? "#C8E6C9" : item.safety === "unsafe" ? "#FF9191" : "#FFF9C4",
                  }}
                >
                  {item.safety === "safe" ? "Safe" : item.safety === "unsafe" ? "Unsafe" : "Caution"}
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
                        color: food.safety === "safe" ? "#2E7D32" : food.safety === "unsafe" ? "firebrick" : "#7B6B00",
                        background: food.safety === "safe" ? "#C8E6C9" : food.safety === "unsafe" ? "#FF9191" : "#FFF9C4",
                      }}
                    >
                      {food.safety === "safe" ? "Safe" : food.safety === "unsafe" ? "Unsafe" : "Caution"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
