import { Link } from "react-router-dom";
import {
  FileText,
  Landmark,
  Receipt,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

function PRAIntegration() {
  const features = [
    {
      icon: <Landmark className="text-emerald-500" size={28} />,
      title: "PRA Tax Compliance",
      desc: "Punjab Revenue Authority rules ke mutabiq automatic tax reporting system.",
    },
    {
      icon: <Receipt className="text-blue-500" size={28} />,
      title: "Digital Invoicing",
      desc: "Service-based businesses ke liye smart invoice generation.",
    },
    {
      icon: <FileText className="text-orange-500" size={28} />,
      title: "Monthly Tax Reports",
      desc: "Automated monthly tax summary and submission reports.",
    },
    {
      icon: <BarChart3 className="text-purple-500" size={28} />,
      title: "Business Analytics",
      desc: "Sales aur tax data ka complete analysis dashboard.",
    },
    {
      icon: <ShieldCheck className="text-red-500" size={28} />,
      title: "Secure Compliance",
      desc: "Secure system jo PRA audit requirements meet karta hai.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#0F2E74] text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            PRA Integration
            <span className="block text-blue-300 mt-3">
              Smart Tax Compliance System
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Complete Punjab Revenue Authority (PRA) integration for service-based businesses
            with automated tax reporting and digital compliance system.
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
              PRA Integration Features
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Service businesses ke liye complete tax automation system
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

      {/* ================= WORKFLOW ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            How PRA Integration Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">1. Service Billing</h3>
              <p className="text-gray-600">Customer service ka bill generate hota hai.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">2. Tax Calculation</h3>
              <p className="text-gray-600">System PRA tax automatically calculate karta hai.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-lg mb-2">3. Report Submit</h3>
              <p className="text-gray-600">Data PRA system ko automatically send hota hai.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0F2E74] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready for PRA Compliance?
        </h2>

        <p className="text-gray-300 mb-8">
          Start your automated tax system for service business today.
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

export default PRAIntegration;