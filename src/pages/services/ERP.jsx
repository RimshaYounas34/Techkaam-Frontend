import { Link } from "react-router-dom";
import {
  Cpu,
  Boxes,
  BarChart3,
  Users,
  Cog,
  Truck,
  ShieldCheck,
  LineChart,
} from "lucide-react";

function ERP() {
  const features = [
    {
      icon: <Cpu className="text-blue-500" size={32} />,
      title: "AI Production Control",
      desc: "Smart AI system that optimizes manufacturing processes automatically.",
    },
    {
      icon: <Boxes className="text-blue-500" size={32} />,
      title: "Inventory Management",
      desc: "Real-time stock tracking with intelligent alerts and forecasting.",
    },
    {
      icon: <BarChart3 className="text-blue-500" size={32} />,
      title: "Finance Analytics",
      desc: "Advanced financial reporting with AI-driven insights.",
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "HR Management",
      desc: "Manage employees, payroll, attendance and performance easily.",
    },
    {
      icon: <Truck className="text-blue-500" size={32} />,
      title: "Supply Chain",
      desc: "Optimize logistics and supply chain with automation.",
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Security System",
      desc: "Enterprise-level data security with role-based access control.",
    },
    {
      icon: <Cog className="text-blue-500" size={32} />,
      title: "Automation Tools",
      desc: "Automate repetitive tasks to increase productivity.",
    },
    {
      icon: <LineChart className="text-blue-500" size={32} />,
      title: "Smart Reporting",
      desc: "Generate real-time reports and business insights.",
    },
  ];

  return (
    <div className="bg-white">

{/* ================= HERO SECTION ================= */}
<section className="bg-[#0F2E74] text-white w-full min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center w-full">

    {/* Left Content */}
    <div>
      <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm tracking-widest uppercase">
        Industrial ERP AI System
      </span>

      <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
        Smart Industrial ERP
        <span className="block text-blue-300">
          AI Based Solution
        </span>
      </h1>

      <p className="text-gray-200 text-lg leading-8 mb-8 max-w-xl">
        Automate your manufacturing, inventory, HR, finance and supply chain
        with an intelligent AI-powered ERP system designed for modern industries.
      </p>

      <div className="flex gap-4">
        <Link
          to="/contact"
          className="bg-white text-[#0F2E74] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Demo
        </Link>

        <Link
          to="/services"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
        >
          Explore Features
        </Link>
      </div>
    </div>

    {/* Right Content */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-10 shadow-2xl">
      <h3 className="text-xl font-semibold mb-6 text-blue-200">
        AI ERP Dashboard Preview
      </h3>

      <div className="space-y-5 text-gray-100">

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
          Inventory Management
        </div>

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
          Production Automation
        </div>

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
          Finance Analytics
        </div>

        <div className="bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
          HR & Workforce System
        </div>

      </div>
    </div>

  </div>
</section>
      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              ERP AI Features
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our intelligent ERP system includes all essential modules for modern industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300"
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

    </div>
  );
}

export default ERP;