import { Link } from "react-router-dom";
import apiImg from "../../assets/api.jpg";

function ApiIntegration() {
  const features = [
    "WhatsApp Business API",
    "Bulk Messaging",
    "Automated Notifications",
    "OTP Verification",
    "Transactional Emails",
    "Email Marketing Integration",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2E74] text-white min-h-[90vh] flex items-center pt-36 pb-28">

  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

    <div>
      <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
        COMMUNICATION AUTOMATION
      </span>

      <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
        WhatsApp & Email
        <span className="block text-blue-300">
          API Integration
        </span>
      </h1>

      <p className="text-gray-200 text-lg leading-8 mt-6 mb-8">
        Automate customer communication with WhatsApp Business API and Email API solutions. Send notifications, invoices, OTPs, promotions and customer updates instantly.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to="/contact"
          className="bg-white text-[#0F2E74] px-8 py-3 rounded-xl font-bold hover:scale-105 transition duration-300"
        >
          Get Consultation
        </Link>

        <Link
          to="/portfolio"
          className="border border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-[#0F2E74] transition"
        >
          View Projects
        </Link>
      </div>
    </div>

    <div>
      <img
        src={apiImg}
        alt="WhatsApp API Integration"
        className="rounded-3xl shadow-2xl border border-white/10 hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</section>

      {/* Features */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Powerful Features
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        API Integration Features
      </h2>

      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
        Connect your business systems with modern communication channels,
        automate customer interactions and improve engagement through
        secure API integrations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {features.map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition">
            {index + 1}
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            {item}
          </h3>

          <p className="text-gray-600 leading-7">
            Automate workflows, improve customer communication and
            integrate your business applications with reliable APIs.
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
      {/* WhatsApp API */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold mb-5">
                WhatsApp Business API
              </h3>

              <p className="text-gray-600 leading-8">
                Send automated order confirmations, delivery updates,
                appointment reminders, invoices, promotional offers,
                and customer support messages directly through WhatsApp.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold mb-5">
                Email API Integration
              </h3>

              <p className="text-gray-600 leading-8">
                Deliver transactional emails, OTP verification,
                newsletters, payment receipts, and business alerts
                using secure email delivery systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Business Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">
                Instant Communication
              </h3>
              <p className="text-gray-600">
                Reach customers instantly.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">
                Automation
              </h3>
              <p className="text-gray-600">
                Reduce manual work.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">
                Better Engagement
              </h3>
              <p className="text-gray-600">
                Improve customer experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">
                Scalable
              </h3>
              <p className="text-gray-600">
                Grow without communication limits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2E74] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Automate Communication?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Let TeachKaam integrate WhatsApp and Email APIs into your
            business systems for seamless customer communication.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#0F2E74] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Today
          </Link>

        </div>
      </section>
    </>
  );
}

export default ApiIntegration;