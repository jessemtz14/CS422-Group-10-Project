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
          <Route path="/CS422-Group-10-Project/" element={<Home />} />
          <Route path="/CS422-Group-10-Project/scan" element={<Scan />} />
          <Route path="/CS422-Group-10-Project/search" element={<Search />} />
          <Route path="/CS422-Group-10-Project/places" element={<Places />} />
          <Route path="/CS422-Group-10-Project/profile" element={<Profile />} />
          {/* is inside Profile section */}
          <Route path="/CS422-Group-10-Project/edit-allergy" element={<EditAllergy />} />{" "}
          {/* is inside Profile section */}
          <Route path="/CS422-Group-10-Project/allergy-card" element={<AllergyCard />} />{" "}
        </Routes>
      </BrowserRouter>
    </AllergyProvider>
  );
}
