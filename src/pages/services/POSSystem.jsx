import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Cloud,
  Boxes,
  BarChart3,
  Users,
  Smartphone,
} from "lucide-react";

function POSSystem() {
  const features = [
    {
      icon: <Cloud className="text-sky-500" size={28} />,
      title: "Cloud Based Access",
      desc: "Anywhere, anytime access to your POS system securely on cloud.",
    },
    {
      icon: <ShoppingCart className="text-emerald-500" size={28} />,
      title: "Smart Billing System",
      desc: "Fast billing with real-time inventory deduction.",
    },
    {
      icon: <Boxes className="text-orange-500" size={28} />,
      title: "Inventory Control",
      desc: "Auto stock updates and low stock alerts system.",
    },
    {
      icon: <BarChart3 className="text-purple-500" size={28} />,
      title: "Sales Analytics",
      desc: "Detailed reports of daily, weekly and monthly sales.",
    },
    {
      icon: <Users className="text-pink-500" size={28} />,
      title: "Multi-User System",
      desc: "Role-based access for cashiers, managers and admins.",
    },
    {
      icon: <Smartphone className="text-blue-500" size={28} />,
      title: "Mobile Friendly",
      desc: "Run your POS system on mobile, tablet and desktop.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#0F2E74] via-[#1d4ed8] to-[#081a3a] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm tracking-widest">
              CLOUD POS SYSTEM
            </span>

            <h1 className="text-5xl font-bold leading-tight mt-6">
              Next Gen
              <span className="block text-cyan-300">
                Cloud POS Solution
              </span>
            </h1>

            <p className="text-gray-200 mt-6 text-lg leading-8 max-w-xl">
              A modern cloud-based POS system for retail & restaurants with
              real-time billing, inventory control, and smart analytics dashboard.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0F2E74] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Get Demo
              </Link>

              <Link
                to="/services"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6 text-cyan-200">
              Live POS Dashboard
            </h3>

            <div className="space-y-5">

              <div className="bg-white/10 p-4 rounded-xl">
                Daily Sales Tracking
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                Inventory Updates
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                Cashier Management
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                Real-time Reports
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Cloud POS Features
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Powerful tools for retail, restaurants and multi-branch businesses
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

      {/* ================= CTA ================= */}
      <section className="bg-[#0F2E74] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Upgrade to Cloud POS System
        </h2>

        <p className="text-gray-300 mb-8">
          Manage your business anywhere, anytime with smart cloud technology.
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

export default POSSystem;