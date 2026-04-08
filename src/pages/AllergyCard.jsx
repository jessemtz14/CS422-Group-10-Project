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
        <article
          className="card card-highlight-gray"
          style={{ maxHeight: 650, overflow: "auto" }}
        >
          <h2
            className="card card-highlight-alert"
            style={{ textAlign: "center" }}
          >
            ALLERGY ALERT
          </h2>

          <h2 className="card-label-hard">John Doe</h2>
          <h3 className="card-label-hard">Date of Birth: Jan 15, 2007</h3>

          <h2 className="card-label-hard" style={{ color: "red" }}>
            ALLERGIC TO:
          </h2>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {allergies.map((item, i) => (
              <li key={i} className="card card-highlight-alert-2">
                <h2 className="card-label-hard" style={{ color: "red" }}>
                  {item}
                </h2>
              </li>
            ))}
          </ul>

          <h2 className="card-label-hard">Must Avoid:</h2>
          <p className="card-label-hard">
            Almonds, cashews, walnuts, pecans, pistachios, hazelnuts, macadamia
            nuts, Brazil nuts, peanuts, peanut oil, peanut butter, and any
            products processed in facilities that handle these items.
          </p>

          <h2 className="card-label-hard">Emergency Contact</h2>
          <p className="card-label-hard">
            Sarah Doe (Mother) –{" "}
            <span className="bold-italic">(312) 522-0198</span>
          </p>
        </article>
      </section>

    </PhoneFrame>
  );
}
