import { useAllergies } from "../context/AllergyContext";

export default function AllergyListMicro() {
  const { allergies } = useAllergies();

  return (
    <ul
      className="grid-container2"
      style={{ listStyle: "d", padding: 0, maxHeight: 150 }}
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
}
