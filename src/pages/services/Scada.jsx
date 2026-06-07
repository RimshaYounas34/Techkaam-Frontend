import { Link } from "react-router-dom";

function Scada() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0F2E74] text-white min-h-[85vh] flex items-center pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm">
              Industrial Automation
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              SCADA
              <span className="block text-blue-300">
                Solutions
              </span>
            </h1>

            <p className="text-gray-200 text-lg leading-8 mt-6">
              Monitor, control, and optimize industrial processes with
              TeachKaam SCADA Solutions. Gain real-time visibility into
              operations, improve productivity, reduce downtime, and make
              data-driven decisions.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-white text-[#0F2E74] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Request Demo
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <h3 className="text-3xl font-bold mb-8">
              Key Benefits
            </h3>

            <ul className="space-y-4 text-lg">
              <li>✓ Real-Time Monitoring</li>
              <li>✓ Industrial Automation</li>
              <li>✓ Equipment Performance Tracking</li>
              <li>✓ Alarm & Event Management</li>
              <li>✓ Production Optimization</li>
              <li>✓ Remote Access & Control</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900">
              Powerful SCADA Features
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
              Our SCADA platform provides complete industrial visibility,
              helping businesses improve operational efficiency and reduce
              production losses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600">
                Track machines, sensors and production lines in real time.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Data Analytics
              </h3>
              <p className="text-gray-600">
                Generate insights from production and operational data.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Alarm Management
              </h3>
              <p className="text-gray-600">
                Instant notifications for critical events and issues.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Remote Control
              </h3>
              <p className="text-gray-600">
                Access industrial systems securely from anywhere.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Energy Monitoring
              </h3>
              <p className="text-gray-600">
                Monitor energy consumption and reduce operational costs.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Production Reports
              </h3>
              <p className="text-gray-600">
                Detailed reports for better decision-making and planning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-xl font-bold">Manufacturing</h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-xl font-bold">Textile Industry</h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-xl font-bold">Food Processing</h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-xl font-bold">Power Plants</h3>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2E74] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Automate Your Operations?
          </h2>

          <p className="text-blue-200 text-lg leading-8 mb-10">
            Let TeachKaam help you implement a modern SCADA solution
            tailored to your industrial requirements.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#0F2E74] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Today
          </Link>

        </div>
      </section>
    </>
  );
}

export default Scada;