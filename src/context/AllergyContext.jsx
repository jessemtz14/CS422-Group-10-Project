/* eslint-disable react-refresh/only-export-components */ // fixes the warning in useAllergies function
import { createContext, useContext, useState } from "react";
import { allergyDatabase } from "../data/allergies";
const AllergyContext = createContext();

export function AllergyProvider({ children }) {
  const [allergies, setAllergies] = useState(["Peanuts"]);
  const [contactName, setContactName] = useState("Sarah Doe");
  const [contactRole, setContactRole] = useState("Mother");
  const [contactNumber, setContactNumber] = useState("(773) 123-4567");
  const [allergiesData] = useState(allergyDatabase);
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  // Activity tracking
  const [recentActivity, setRecentActivity] = useState([
    {
      icon: "📷",
      text: "Scanned: Nature Valley Granola",
      status: "Unsafe",
      statusColor: "firebrick",
      statusBg: "#FF9191",
      time: "2 hrs ago",
    },
    {
      icon: "🔍",
      text: "Searched: Praline",
      status: "Avoid",
      statusColor: "#7B6B00",
      statusBg: "#FFF9C4",
      time: "Yesterday",
    },
    {
      icon: "📍",
      text: "Viewed: Mediterranean Kitchen",
      status: "Safe",
      statusColor: "#2E7D32",
      statusBg: "#C8E6C9",
      time: "Yesterday",
    },
  ]);

  function addActivity(icon, text, status, statusColor, statusBg) {
    setRecentActivity((prev) => {
      // Don't add duplicate if same action is already the most recent
      if (prev.length > 0 && prev[0].text === text) return prev;
      return [
        { icon, text, status, statusColor, statusBg, time: "Just now" },
        ...prev,
      ].slice(0, 8);
    });
  }

  return (
    <AllergyContext.Provider
      value={{
        allergies,
        setAllergies,
        allergiesData,
        selectedAllergies,
        setSelectedAllergies,
        recentActivity,
        addActivity,
        contactName,
        setContactName,
        contactRole,
        setContactRole,
        contactNumber,
        setContactNumber,
      }}
    >
      {children}
    </AllergyContext.Provider>
  );
}

export function useAllergies() {
  return useContext(AllergyContext);
}
