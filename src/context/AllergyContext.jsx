import { createContext, useContext, useState } from "react";

const AllergyContext = createContext();

const AllergyDataContext = createContext();

export function AllergyProvider({ children }) {
  // Allergies user has
  const [allergies, setAllergies] = useState(["Peanuts"]);
  // "DB" List of all allergies - TODO add more
  const [allergiesData] = useState(["Tree Nuts", "Peanuts", "Dairy", "Shellfish", "Eggs", "Wheat", "Soybeans", "Sesame", "Fish"]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  return (
    <AllergyContext.Provider value={{ allergies, setAllergies, allergiesData, selectedAllergies, setSelectedAllergies }}>
      {children}
    </AllergyContext.Provider>
  );
}

export function useAllergies() {
  return useContext(AllergyContext);
}

