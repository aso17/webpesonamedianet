import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
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
import ServiceManage from "../page/ServicePage/ServiceManage";
import ServiceBusiness from "../page/ServicePage/ServiceBusiness";
import ServiceCorporate from "../page/ServicePage/ServiceCorporate";
import ServiceReseller from "../page/ServicePage/ServiceReseller";
import ServiceBroadband from "../page/ServicePage/ServiceBroadband";

// Pages - Career
import CareerPage from "../page/CareerPage";

// Pages - support
import FAQPage from "../page/supportPage/FAQPage";
import MRTGPage from "../page/supportPage/MRTGPage";
import SpeedTestPage from "../page/supportPage/SpeedTestPage";
import LookingGlassPage from "../page/supportPage/LookingGlassPage";
import RPKIPage from "../page/supportPage/RPKIPage";

import LocationPage from "../page/LocationPage";
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
          <Route path="/company">
            <Route path="about-us" element={<AboutPage />} />
            <Route path="vision-mission" element={<VisiMisiPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="values" element={<NilaiPerusahaanPage />} />
            <Route path="legal" element={<LegalitasPage />} />
          </Route>

          {/* Service Routes */}
          <Route path="/services">
            <Route
              path="dedicated-internet"
              element={<ServiceInternetDedicated />}
            />
            <Route path="managed-services" element={<ServiceManage />} />
            <Route path="business" element={<ServiceBusiness />} />
            <Route path="corporate" element={<ServiceCorporate />} />
            <Route path="reseller" element={<ServiceReseller />} />
            <Route path="broadband" element={<ServiceBroadband />} />
          </Route>
          <Route path="Careers" element={<CareerPage />} />

          <Route path="/support">
            <Route path="faq" element={<FAQPage />} />
            <Route path="mrtg" element={<MRTGPage />} />
            <Route path="speed-test" element={<SpeedTestPage />} />
            <Route path="looking-glass" element={<LookingGlassPage />} />
            <Route path="rpki-validator" element={<RPKIPage />} />
          </Route>
          <Route path="locations" element={<LocationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRouter;
