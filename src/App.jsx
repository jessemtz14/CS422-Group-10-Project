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
      <BrowserRouter basename="/CS422-Group-10-Project/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/search" element={<Search />} />
          <Route path="/places" element={<Places />} />
          <Route path="/profile" element={<Profile />} />
          {/* is inside Profile section */}
          <Route path="/edit-allergy" element={<EditAllergy />} />{" "}
          {/* is inside Profile section */}
          <Route path="/allergy-card" element={<AllergyCard />} />{" "}
        </Routes>
      </BrowserRouter>
    </AllergyProvider>
  );
}
