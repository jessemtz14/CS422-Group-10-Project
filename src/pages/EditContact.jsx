import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditContact() {
  const { 
    contactName, 
    setContactName,
    contactRole,
    setContactRole,
    contactNumber,
    setContactNumber 
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
          <li className="allergen-item">
                <span> Name:  </span>
                <input
                  type="search"
                  placeholder="Set name..."
                  value={inputName}
                  style={{ width: "100%" }}
                  onChange={(e) => setInputName(e.target.value)}
                />
            </li>
            <li className="allergen-item">
                <span> Relation:  </span>
                <input
                type="search"
                placeholder="Set role..."
                value={inputRole}
                style={{ width: "100%" }}
                onChange={(e) => setInputRole(e.target.value)}
              />
            </li>
            <li className="allergen-item">
                <span> Phone:  </span>
                <input
                  type="search"
                  placeholder="Set number..."
                  value={inputNumber}
                  style={{ width: "100%" }}
                  onChange={(e) => setInputNumber(e.target.value)}
                />
            </li>
          
          
          
        </article>

        

        <button
          className="primary-button"
          style={{ background: "green" }}
          onClick={() => {
            setContactName(inputName)
            setContactNumber(inputNumber)
            setContactRole(inputRole)
            navigate("/profile");
          }}
        >
          Save Changes
        </button>
      </section>
    </PhoneFrame>
  );
}
