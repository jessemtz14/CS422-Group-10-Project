import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";
import { useAllergies } from "../context/AllergyContext";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditAllergy() {
  const { allergies, setAllergies } = useAllergies();
  const { selectedAllergies, setSelectedAllergies } = useAllergies();
  const { allergiesData } = useAllergies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedAllergies(allergies);
  }, [allergies, setSelectedAllergies]);
  const addAllergy = (e) => {
    if (!selectedAllergies.some((x) => x === e)) {
      setSelectedAllergies([...selectedAllergies, e]);
    } else {
      removeAllergy(e);
    }
  };

  function removeAllergy(item) {
    setSelectedAllergies(selectedAllergies.filter((a) => a !== item));
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <Hero eyebrow="Class Project" title="Edit Allergies" back="/profile" />

      <section className="content">
        <article className="card card-highlight">
          <h3 className="card-label">Current Allergies</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              maxHeight: 100,
              overflow: "auto",
            }}
          >
            {selectedAllergies.map((item, i) => (
              <li key={i} className="allergen-item">
                <span> {item}</span>
                <button
                  className="warn-notice"
                  style={{
                    marginLeft: "auto",
                    background: "#FF9191",
                    color: "firebrick",
                  }}
                  onClick={() => removeAllergy(item)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </article>

        <article className="card card-highlight">
          <h3 className="card-label">Add Allergy</h3>
          <input
            type="search"
            placeholder="Search..."
            value={input}
            style={{ width: "100%" }}
            onChange={(e) => setInput(e.target.value)}
          />
          <ul className="grid-container">
            {allergiesData
              .filter((x) => x.toLowerCase().includes(input.toLowerCase()))
              .map((item, i) => (
                <li key={i} className="allergen-item">
                  <button
                    className="warn-notice-fill"
                    style={{
                      marginLeft: "auto",
                      background:
                        selectedAllergies.some((x) => x === item) ? "green" : (
                          "white"
                        ),
                    }}
                    onClick={() => addAllergy(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
          </ul>
        </article>

        <button
          className="primary-button"
          style={{ background: "green" }}
          onClick={() => {
            setAllergies(selectedAllergies);
            navigate("/profile");
          }}
        >
          Save Changes
        </button>
      </section>

      <BottomNav />
    </PhoneFrame>
  );
}
