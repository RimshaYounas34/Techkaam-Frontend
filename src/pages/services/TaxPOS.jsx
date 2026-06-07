import { Link } from "react-router-dom";
import {
  FileText,
  Landmark,
  ShoppingCart,
  ReceiptText,
} from "lucide-react";

const posServices = [
  {
    icon: <FileText className="text-blue-500" size={28} />,
    title: "FBR Integration",
    desc: "Real-time sales reporting, FBR invoices, and QR verification for customers.",
    link: "/fbr-integration",
  },
  {
    icon: <Landmark className="text-emerald-500" size={28} />,
    title: "PRA Integration",
    desc: "Punjab Revenue Authority compliance for retail and restaurant billing.",
    link: "/pra-integration",
  },
  {
    icon: <ShoppingCart className="text-orange-500" size={28} />,
    title: "Cloud POS System",
    desc: "Retail and restaurant POS with inventory, reporting, and multi-branch control.",
    link: "/pos-system",
  },
  {
    icon: <ReceiptText className="text-purple-500" size={28} />,
    title: "Tax Integration",
    desc: "Complete tax, sales, and compliance workflow in one platform.",
    link: "/tax-integration",
  },
];

function TaxPOS() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
<section className="bg-gradient-to-b from-[#0F2E74] to-[#081a3a] text-white min-h-screen flex items-center py-32">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      Tax, PRA, POS & FBR
      <span className="block text-blue-300 mt-2">
        Integration System
      </span>
    </h1>

    <p className="text-gray-300 mt-8 text-lg leading-8 max-w-2xl mx-auto">
      Fully compliant POS ecosystem for Pakistani businesses with automated tax reporting,
      real-time FBR integration, and smart billing system.
    </p>

    <div className="mt-10 flex justify-center gap-5">
      <Link
        to="/contact"
        className="bg-white text-[#0F2E74] px-7 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Get Demo
      </Link>

      <Link
        to="/pos-system"
        className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
      >
        Explore POS
      </Link>
    </div>

  </div>
</section>
      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Compliance Solutions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose a solution designed for modern retail and business automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {posServices.map((s, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="mb-5">{s.icon}</div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  {s.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-7">
                  {s.desc}
                </p>

                <Link
                  to={s.link}
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  View Details →
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0F2E74] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready for FBR Integrated POS?
        </h2>

        <p className="text-gray-300 mb-8">
          Start your digital billing and tax compliance system today.
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

export default TaxPOS;