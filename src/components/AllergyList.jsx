import { useAllergies } from "../context/AllergyContext";

export default function AllergyList() {
  const { allergies } = useAllergies();
  if(allergies.length != 0) {
  return (
    <ul
      style={{ listStyle: "none", padding: 0, maxHeight: 100, overflow: "auto" }}
    >
      {allergies.map((item, i) => (
        <li key={i} className="allergen-item">
          <span>{item}</span>
          <span
            className="warn-notice"
            style={{
              marginLeft: "auto",
              color: "firebrick",
              background: "#FF9191",
            }}
          >
            Severe
          </span>
        </li>
      ))
      }
      
    </ul>
  );
  } else {
    return (
    <p>No allergies selected.</p>
    )
  }
}
