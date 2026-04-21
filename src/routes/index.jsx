import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../component/layout/MainLayout";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import VisiMisiPage from "../page/VisiMisiPage";
import HistoryPage from "../page/HistoryPage";
import NilaiPerusahaanPage from "../page/NilaiPerusahaanPage";
import LegalitasPage from "../page/LegalitasPage";

function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perusahaan/tentang-kami" element={<AboutPage />} />
          <Route path="/perusahaan/visi-misi" element={<VisiMisiPage />} />
          <Route path="/perusahaan/sejarah" element={<HistoryPage />} />
          <Route path="/perusahaan/nilai" element={<NilaiPerusahaanPage />} />
          <Route path="/perusahaan/legalitas" element={<LegalitasPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
