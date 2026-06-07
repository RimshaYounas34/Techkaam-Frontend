import { Link } from "react-router-dom";
import {
  FileText,
  QrCode,
  Receipt,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

function FBRIntegration() {
  const features = [
    {
      icon: <FileText className="text-blue-500" size={28} />,
      title: "Real-Time FBR Invoices",
      desc: "Automatically generate and submit invoices to FBR system instantly.",
    },
    {
      icon: <QrCode className="text-green-500" size={28} />,
      title: "QR Code Verification",
      desc: "Each invoice includes secure QR code for customer verification.",
    },
    {
      icon: <Receipt className="text-orange-500" size={28} />,
      title: "Digital Billing System",
      desc: "Fast and accurate billing with tax calculation included.",
    },
    {
      icon: <BarChart3 className="text-purple-500" size={28} />,
      title: "Tax Reports",
      desc: "Monthly and yearly tax reports for business insights.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#0F2E74] text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            FBR Integration
            <span className="block text-blue-300 mt-3">
              Smart Tax Compliance System
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A complete FBR integrated POS solution for Pakistani businesses
            with real-time tax reporting, secure billing, and automated compliance.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Link
              to="/contact"
              className="bg-white text-[#0F2E74] px-7 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get Demo
            </Link>

            <Link
              to="/services"
              className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
            >
              Explore More
            </Link>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Key Features
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need for FBR compliant digital business system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition"
              >
                <div className="mb-5">{item.icon}</div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SIMPLE WORKFLOW ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">1. Generate Bill</h3>
              <p className="text-gray-600">Customer checkout se invoice create hota hai.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">2. Auto Tax Apply</h3>
              <p className="text-gray-600">System automatically tax calculate karta hai.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">3. FBR Submit</h3>
              <p className="text-gray-600">Invoice real-time FBR system mein send hota hai.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0F2E74] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready for FBR Integration?
        </h2>

        <p className="text-gray-300 mb-8">
          Start your compliant business system today.
        </p>

        <Link
          to="/contact"
          className="bg-white text-[#0F2E74] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}

export default FBRIntegration;