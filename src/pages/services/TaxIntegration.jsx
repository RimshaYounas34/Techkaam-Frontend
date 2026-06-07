import { Link } from "react-router-dom";
import {
  DollarSign,
  FileText,
  Landmark,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";

function TaxIntegration() {
  const features = [
    {
      icon: <DollarSign className="text-emerald-500" size={28} />,
      title: "Auto Tax Calculation",
      desc: "Sales tax aur GST automatically calculate hota hai every transaction par.",
    },
    {
      icon: <FileText className="text-blue-500" size={28} />,
      title: "Digital Invoices",
      desc: "Professional invoices generate hoti hain with tax breakdown.",
    },
    {
      icon: <Landmark className="text-purple-500" size={28} />,
      title: "FBR / PRA Sync",
      desc: "Government systems ke sath real-time tax reporting integration.",
    },
    {
      icon: <BarChart3 className="text-orange-500" size={28} />,
      title: "Tax Reports",
      desc: "Monthly and yearly tax reports with full analytics dashboard.",
    },
    {
      icon: <Zap className="text-yellow-500" size={28} />,
      title: "Instant Processing",
      desc: "Fast billing system with instant tax computation and submission.",
    },
    {
      icon: <ShieldCheck className="text-red-500" size={28} />,
      title: "Secure Compliance",
      desc: "Encrypted tax data with full audit-ready system.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#0F2E74] text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Tax Integration
            <span className="block text-blue-300 mt-3">
              Smart Compliance System
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto leading-8">
            A complete tax automation system for businesses with real-time
            calculation, digital invoices, and FBR/PRA compliance integration.
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
              Tax Integration Features
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Complete automated tax system for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition"
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

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            How Tax Integration Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">1. Bill Generate</h3>
              <p className="text-gray-600">
                Customer purchase par system invoice create karta hai.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">2. Tax Apply</h3>
              <p className="text-gray-600">
                System automatically GST / Sales tax calculate karta hai.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">3. Compliance Sync</h3>
              <p className="text-gray-600">
                Data FBR / PRA system ke sath real-time sync hota hai.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0F2E74] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready for Tax Automation?
        </h2>

        <p className="text-gray-300 mb-8">
          Simplify your business tax system with smart integration.
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

export default TaxIntegration;