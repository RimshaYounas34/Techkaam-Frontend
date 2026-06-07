
import { Link } from "react-router-dom";
import webImg from "../../assets/web.jpg";

function WebDev() {
  const features = [
    "Custom Business Websites",
    "E-Commerce Solutions",
    "MERN Stack Development",
    "Admin Dashboards",
    "API Integrations",
    "SEO Friendly Design",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2E74] text-white min-h-[90vh] flex items-center pt-36 pb-24">

        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <div>
            <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
              WEB DEVELOPMENT SERVICES
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              Modern &
              <span className="block text-blue-300">
                Scalable Websites
              </span>
            </h1>

            <p className="text-gray-200 text-lg leading-8 mt-6 mb-8">
              We build fast, secure and responsive websites using modern
              technologies. From business websites and e-commerce stores
              to custom web applications, we help businesses establish a
              strong digital presence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0F2E74] px-8 py-3 rounded-xl font-bold hover:scale-105 transition duration-300"
              >
                Start Your Project
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-[#0F2E74] transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div>
            <img
              src={webImg}
              alt="Web Development"
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
              Our Expertise
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Web Development Solutions
            </h2>

            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Delivering high-performance websites and web applications
              tailored to your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {item}
                </h3>

                <p className="text-gray-600">
                  Professional development with modern technologies,
                  responsive layouts and scalable architecture.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900">
              Why Choose TeachKaam?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-lg">
              <h3 className="font-bold text-xl mb-3">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized websites with fast loading speed.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-lg">
              <h3 className="font-bold text-xl mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Perfect experience across all devices.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-lg">
              <h3 className="font-bold text-xl mb-3">Secure Development</h3>
              <p className="text-gray-600">
                Reliable and secure coding standards.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center shadow-lg">
              <h3 className="font-bold text-xl mb-3">SEO Ready</h3>
              <p className="text-gray-600">
                Better visibility and search rankings.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2E74] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Build Your Website?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Let TeachKaam create a modern, scalable and professional
            website that helps your business grow online.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#0F2E74] px-10 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
          >
            Contact Us Today
          </Link>

        </div>
      </section>
    </>
  );
}

export default WebDev;
