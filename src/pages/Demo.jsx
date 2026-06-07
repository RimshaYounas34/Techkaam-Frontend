import { Link } from "react-router-dom";
import TeachKaamDemoVideo from "../components/TeachKaamDemoVideo";

function Demo() {
  return (
    <>
      <section className="relative bg-[#0F2E74] text-white min-h-[85vh] flex items-center overflow-hidden pt-36 pb-24">

  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
        TeachKaam Software Solutions
      </span>

      <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
        Experience Our
        <span className="block text-blue-300 mt-2">
          Live Software Demo
        </span>
      </h1>

      <p className="text-gray-200 text-lg leading-8 mt-6">
        Discover how TeachKaam helps businesses streamline operations through
        Industrial ERP, POS Systems, FBR Integration, Inventory Management,
        Sales Reporting, HR Modules and Business Intelligence tools.
      </p>

      <p className="text-gray-300 mt-4 leading-7">
        Watch our software in action and see how modern technology can improve
        productivity, automate workflows, and provide real-time insights for
        better business decisions.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="#video"
          className="bg-white text-[#0F2E74] px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Watch Demo
        </a>

        <Link
          to="/contact"
          className="border border-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
        >
          Request Demo
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6">

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
        <h3 className="text-4xl font-bold text-blue-300">500+</h3>
        <p className="text-gray-200 mt-2">Business Users</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
        <h3 className="text-4xl font-bold text-blue-300">24/7</h3>
        <p className="text-gray-200 mt-2">Support Available</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
        <h3 className="text-4xl font-bold text-blue-300">ERP</h3>
        <p className="text-gray-200 mt-2">Smart Automation</p>
      </div>

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
        <h3 className="text-4xl font-bold text-blue-300">FBR</h3>
        <p className="text-gray-200 mt-2">Fully Integrated</p>
      </div>

    </div>

  </div>
</section>

      <section className="bg-white py-24" id="video">
  <div className="max-w-7xl mx-auto px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
        Product Walkthrough
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-6">
        See TeachKaam In Action
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-lg leading-8">
        Watch how TeachKaam ERP, POS, FBR Integration and Business Analytics
        help companies automate operations, manage inventory, track sales,
        and improve overall business performance.
      </p>
    </div>

    {/* Video */}
    <div className="bg-gradient-to-br from-slate-100 to-blue-50 p-4 rounded-3xl shadow-2xl border border-gray-200">
      <div className="overflow-hidden rounded-2xl">
        <TeachKaamDemoVideo />
      </div>
    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-4 gap-6 mt-16">

      <div className="bg-white border rounded-2xl p-8 text-center shadow-md">
        <h3 className="text-4xl font-bold text-blue-700">500+</h3>
        <p className="text-gray-600 mt-2">Active Users</p>
      </div>

      <div className="bg-white border rounded-2xl p-8 text-center shadow-md">
        <h3 className="text-4xl font-bold text-green-600">50+</h3>
        <p className="text-gray-600 mt-2">Business Clients</p>
      </div>

      <div className="bg-white border rounded-2xl p-8 text-center shadow-md">
        <h3 className="text-4xl font-bold text-purple-600">24/7</h3>
        <p className="text-gray-600 mt-2">Support Service</p>
      </div>

      <div className="bg-white border rounded-2xl p-8 text-center shadow-md">
        <h3 className="text-4xl font-bold text-orange-500">100%</h3>
        <p className="text-gray-600 mt-2">Cloud Based</p>
      </div>

    </div>

    {/* Highlights */}
    <div className="grid lg:grid-cols-3 gap-8 mt-16">

      <div className="bg-blue-50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          ERP Management
        </h3>

        <p className="text-gray-600 leading-8">
          Manage production, inventory, procurement, HR, payroll and finance
          from a single intelligent dashboard.
        </p>
      </div>

      <div className="bg-green-50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Smart POS System
        </h3>

        <p className="text-gray-600 leading-8">
          Faster billing, inventory control, customer management and
          real-time sales tracking for modern businesses.
        </p>
      </div>

      <div className="bg-purple-50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Business Analytics
        </h3>

        <p className="text-gray-600 leading-8">
          Powerful reports and dashboards provide valuable insights for
          smarter decision making and business growth.
        </p>
      </div>

    </div>

  </div>
</section>

      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Software Modules
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        What You'll See In The Demo
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
        Explore the powerful modules that help businesses automate operations,
        improve productivity and gain complete control over their daily processes.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-6">
          📊
        </div>
        <h3 className="text-xl font-bold mb-3">ERP Dashboard</h3>
        <p className="text-gray-600">
          Production, inventory, HR, finance and analytics on one intelligent platform.
        </p>
      </div>

      <div className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-6">
          🛒
        </div>
        <h3 className="text-xl font-bold mb-3">Cloud POS</h3>
        <p className="text-gray-600">
          Fast billing, inventory management and real-time sales reporting.
        </p>
      </div>

      <div className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-3xl mb-6">
          🧾
        </div>
        <h3 className="text-xl font-bold mb-3">FBR Integration</h3>
        <p className="text-gray-600">
          Digital invoicing, QR verification and tax-compliant transactions.
        </p>
      </div>

      <div className="bg-white border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-6">
          📈
        </div>
        <h3 className="text-xl font-bold mb-3">Business Reports</h3>
        <p className="text-gray-600">
          Detailed reports and analytics for smarter business decisions.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#0F2E74] text-white py-24">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-5xl font-bold mb-6">
      Ready To Transform Your Business?
    </h2>

    <p className="text-blue-200 text-lg leading-8 mb-10">
      Join businesses across Pakistan using TeachKaam ERP, POS and automation solutions
      to streamline operations, improve efficiency and accelerate growth.
    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <Link
        to="/contact"
        className="bg-white text-[#0F2E74] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
      >
        Book Free Consultation
      </Link>

      <a
        href="#video"
        className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0F2E74] transition"
      >
        Watch Demo Again
      </a>

    </div>

  </div>
</section>
    </>
  );
}

export default Demo;
