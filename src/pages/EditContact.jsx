import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const editLabelStyle = {
  display: "inline-block",
  width: "80px",
  fontWeight: "bold",
  fontSize: "0.9rem",
};

export default function EditContact() {
  const {
    contactName,
    setContactName,
    contactRole,
    setContactRole,
    contactNumber,
    setContactNumber,
  } = useAllergies();

  const [inputName, setInputName] = useState(contactName);
  const [inputRole, setInputRole] = useState(contactRole);
  const [inputNumber, setInputNumber] = useState(contactNumber);
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      <Hero title="Edit Contact" back="/profile" />

      <section className="content">
        <article className="card card-highlight">
          <h3 className="card-label">Emergency Contact</h3>
          <li className="allergen-item" style={{ padding: "8px 0" }}>
            <span style={editLabelStyle}>Name:</span>
            <input
              type="search"
              placeholder="Set name..."
              value={inputName}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid var(--line)",
                borderRadius: "8px",
              }}
              onChange={(e) => setInputName(e.target.value)}
            />
          </li>
          <li className="allergen-item" style={{ padding: "8px 0" }}>
            <span style={editLabelStyle}>Relation:</span>
            <input
              type="search"
              placeholder="Set role..."
              value={inputRole}
              style={{
                flex: 1,
                padding: "10p",
                border: "1px solid var(--line)",
                borderRadius: "8px",
              }}
              onChange={(e) => setInputRole(e.target.value)}
            />
          </li>
          <li className="allergen-item" style={{ padding: "8px 0" }}>
            <span style={editLabelStyle}> Phone: </span>
            <input
              type="search"
              placeholder="Set number..."
              value={inputNumber}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid var(--line)",
                borderRadius: "8px",
              }}
              onChange={(e) => setInputNumber(e.target.value)}
            />
          </li>
        </article>

        <button
          className="primary-button"
          style={{ background: "green", marginTop: "10px" }}
          onClick={() => {
            setContactName(inputName);
            setContactNumber(inputNumber);
            setContactRole(inputRole);
            navigate("/profile");
          }}
        >
          Save Changes
        </button>

        <button
          className="primary-button"
          style={{
            background: "var(--line)",
            color: "var(--text)",
            marginTop: "6px",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
          onClick={() => navigate("/profile")}
        >
          Cancel
        </button>
      </section>
    </PhoneFrame>
  );
}
