import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import WhyTeachKaam from "./pages/WhyTeachKaam";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Demo from "./pages/Demo";
import TryNow from "./pages/TryNow";

// Services Pages
import ERP from "./pages/services/ERP";
import TaxPOS from "./pages/services/TaxPOS";
import FBRIntegration from "./pages/services/FBRIntegration";
import PRAIntegration from "./pages/services/PRAIntegration";
import POSSystem from "./pages/services/POSSystem";
import TaxIntegration from "./pages/services/TaxIntegration";
import Scada from "./pages/services/Scada";
import WebDev from "./pages/services/WebDev";
import AppDev from "./pages/services/AppDev";
import ApiIntegration from "./pages/services/ApiIntegration";

// Admin Pages ⭐ ADDED
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ProtectedRoute from "./pages/admin/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WhyTeachKaam />} />
        <Route path="/why-teachkaam" element={<WhyTeachKaam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/try-now" element={<TryNow />} />

        {/* SERVICES DETAIL PAGES */}
        <Route path="/industrial-erp" element={<ERP />} />
        <Route path="/tax-pra-pos-fbr" element={<TaxPOS />} />
        <Route path="/fbr-integration" element={<FBRIntegration />} />
        <Route path="/pra-integration" element={<PRAIntegration />} />
        <Route path="/pos-system" element={<POSSystem />} />
        <Route path="/tax-integration" element={<TaxIntegration />} />
        <Route path="/scada" element={<Scada />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/app-development" element={<AppDev />} />

        {/* API INTEGRATION */}
        <Route path="/whatsapp-api" element={<ApiIntegration />} />
        <Route path="/email-api" element={<ApiIntegration />} />

        {/* ADMIN ROUTES ⭐ ADDED */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;