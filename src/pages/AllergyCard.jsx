import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";

export default function AllergyCard() {
  const { allergies, contactName, contactNumber, contactRole } = useAllergies();

  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Allergy Card" back="/profile" />

      <section className="content" style={{ padding: "16px", gap: "12px" }}>
        {/* frame 1: allergy alert */}
        <article
          className="card card-highlight-alert-2"
          style={{ border: "2px solid red", padding: "16px" }}
        >
          <h2
            className="card card-highlight-alert"
            style={{ textAlign: "center", color: "white", padding: "10px", margin: "0 0 12px" }}
          >
            ALLERGY ALERT
          </h2>

          <p className="card-value" style={{ margin: "0 0 6px", fontSize: "1.1rem" }}>John Doe</p>

          <h3 className="card-label-hard" style={{ fontSize: "0.85rem", margin: 0 }}>Date of Birth: Jan 15, 2007</h3>

          <h2
            className="card-label-hard"
            style={{ color: "red", marginTop: "12px", fontSize: "0.95rem" }}
          >
            ALLERGIC TO:
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              margin: "8px 0"
            }}
          >
            {allergies.map((item, i) => (
              <li
                key={i}
                style={{
                  background: "#fee2e2",
                  padding: "6px 16px",
                  borderRadius: "14px",
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "1.1rem"
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <h2 className="card-label-hard" style={{ marginBottom: "6px", fontSize: "0.95rem" }}>
            Must Avoid:
          </h2>
          <ul
            style={{
              paddingLeft: "20px",
              margin: 0,
              fontSize: "0.9rem",
              lineHeight: "1.4",
              color: "#333",
            }}
          >
            <li>Almonds, cashews, walnuts, pecans</li>
            <li>Pistachios, hazelnuts, macadamia nuts</li>
            <li>Brazil nuts, peanuts</li>
            <li>Peanut oil & peanut butter</li>
          </ul>
        </article>

        {/* frame 2: emergency contact */}
        <article
          className="card"
          style={{ border: "2px solid #1b1b1b", background: "#fff", padding: "16px" }}
        >
          <h2 className="card-label-hard" style={{ marginBottom: "6px", fontSize: "0.9rem" }}>
            Emergency Contact
          </h2>
          <p className="card-value" style={{ margin: 0, fontSize: "1.1rem" }}>
            {contactName} ({contactRole})
          </p>
          <p
            className="card-value"
            style={{ color: "firebrick", fontSize: "1.2rem", fontWeight: 900, margin: "4px 0 0" }}
          >
            {contactNumber}
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              marginTop: "10px",
              fontStyle: "italic",
            }}
          >
            In case of reaction, use Epipen and call 911.
          </p>
        </article>
      </section>
    </PhoneFrame>
  );
}
