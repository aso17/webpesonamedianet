import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// Layout
import MainLayout from "../component/layout/MainLayout";

// Pages - Home
import HomePage from "../page/HomePage";

// Pages - Company
import AboutPage from "../page/companyPage/AboutPage";
import VisiMisiPage from "../page/companyPage/VisiMisiPage";
import HistoryPage from "../page/companyPage/HistoryPage";
import NilaiPerusahaanPage from "../page/companyPage/NilaiPerusahaanPage";
import LegalitasPage from "../page/companyPage/LegalitasPage";

// Pages - Services
import ServiceInternetDedicated from "../page/ServicePage/ServiceInternetDedicated";

/**
 * Komponen Helper untuk update Title & Scroll ke atas otomatis
 */
function ScrollAndTitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Auto Scroll ke atas setiap pindah page
    window.scrollTo(0, 0);

    // 2. Logic Title Dinamis (Fallback jika di page tsb tidak pakai useDocumentTitle)
    const pathSegments = pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];

    if (!lastSegment) {
      document.title = "Pesonanet | Internet Fiber Optik High Speed";
    } else {
      const formattedTitle = lastSegment
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      document.title = `${formattedTitle} | Pesonanet`;
    }
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <Router>
      {/* Manager diletakkan di dalam Router agar useLocation bekerja */}
      <ScrollAndTitleManager />

      <MainLayout>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<HomePage />} />

          {/* Company Routes */}
          <Route path="/perusahaan">
            <Route path="tentang-kami" element={<AboutPage />} />
            <Route path="visi-misi" element={<VisiMisiPage />} />
            <Route path="sejarah" element={<HistoryPage />} />
            <Route path="nilai" element={<NilaiPerusahaanPage />} />
            <Route path="legalitas" element={<LegalitasPage />} />
          </Route>

          {/* Service Routes */}
          <Route path="/layanan">
            <Route
              path="internet-dedicated"
              element={<ServiceInternetDedicated />}
            />
            {/* Mas bisa tambah route layanan lain di bawah sini nanti */}
          </Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
