import { useAllergies } from "../context/AllergyContext";

export default function AllergyListMicro() {
  const { allergies } = useAllergies();
  if(allergies.length != 0) {
  return (
    <ul
      className="grid-container2"
      style={{ listStyle: "d", padding: 0, maxHeight: 200 }}
    >
      {allergies.map((item, i) => (
        <li key={i} className="allergen-item">
          <span
            className="warn-notice"
            style={{ color: "firebrick", background: "#FF9191" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
    } else {
    return (
    <p>No allergies selected.</p>
    )
  }
}
