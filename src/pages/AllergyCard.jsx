import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import { useAllergies } from "../context/AllergyContext";

export default function AllergyCard() {
  const { allergies } = useAllergies();

  return (
    <PhoneFrame>
      <StatusBar />

      <section className="content">
        {/* frame 1: allergy alert */}
        <article
          className="card card-highlight-alert-2"
          style={{ border: "2px solid red" }}
        >
          <h2
            className="card card-highlight-alert"
            style={{ textAlign: "center", color: "white" }}
          >
            ALLERGY ALERT
          </h2>

          {/* <p className="card-label-hard">Patient Name</p> */}
          <p className="card-value">John Doe</p>

          <h3 className="card-label-hard">Date of Birth: Jan 15, 2007</h3>

          <h2
            className="card-label-hard"
            style={{ color: "red", marginTop: "10px" }}
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
            }}
          >
            {allergies.map((item, i) => (
              <li
                key={i}
                style={{
                  background: "#fee2e2",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          <h2 className="card-label-hard" style={{ marginBottom: "8px" }}>
            Must Avoid:
          </h2>
          <ul
            style={{
              paddingLeft: "20px",
              margin: 0,
              fontSize: "0.95rem",
              lineHeight: "1.6",
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
          style={{ border: "2px solid #1b1b1b", background: "#fff" }}
        >
          <h2 className="card-label-hard" style={{ marginBottom: "8px" }}>
            Emergency Contact
          </h2>
          <p className="card-value" style={{ margin: 0, fontSize: "1.1rem" }}>
            Sarah Doe (Mother)
          </p>
          <p
            className="card-value"
            style={{ color: "firebrick", fontSize: "1.2rem", fontWeight: 900 }}
          >
            (312) 522-0198
          </p>
          <p> </p>
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
