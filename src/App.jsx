import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllergyProvider } from "./context/AllergyContext";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import EditAllergy from "./pages/EditAllergy";
import AllergyCard from "./pages/AllergyCard";
import Scan from "./pages/Scan";
import Search from "./pages/Search";
import Places from "./pages/Places";

export default function App() {
  return (
    <AllergyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-allergy" element={<EditAllergy />} />
          <Route path="/allergy-card" element={<AllergyCard />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/search" element={<Search />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </BrowserRouter>
    </AllergyProvider>
  );
}
