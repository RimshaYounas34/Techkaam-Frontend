import { Link } from "react-router-dom";
import appImg from "../../assets/app.jpeg";

function AppDev() {
  const features = [
    "Android App Development",
    "iOS App Development",
    "Cross Platform Apps",
    "Modern UI/UX Design",
    "API Integration",
    "Cloud-Based Applications",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0F2E74] text-white min-h-[85vh] flex items-center pt-36 pb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm">
              MOBILE APPLICATION DEVELOPMENT
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
              Mobile Apps That
              <span className="block text-blue-300">
                Drive Business Growth
              </span>
            </h1>

            <p className="text-gray-200 text-lg leading-8 mt-6 mb-8">
              TeachKaam develops powerful Android and iOS applications
              that help businesses connect with customers, automate
              operations, and increase revenue. Our solutions are fast,
              secure, scalable, and designed for long-term success.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0F2E74] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Get Free Consultation
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div>
            <img
              src={appImg}
              alt="Mobile App Development"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900">
              Professional Mobile App Solutions
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
              We create custom mobile applications for startups,
              enterprises, retailers, manufacturers, and service-based
              businesses. Every application is designed with modern
              technologies and optimized for performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {feature}
                </h3>

                <p className="text-gray-600">
                  High-quality solutions tailored to your business needs.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900">
              What We Develop
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Business Applications
              </h3>

              <p className="text-gray-600 leading-8">
                CRM systems, ERP mobile apps, inventory management,
                employee management, delivery tracking, and business
                automation applications.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Customer Applications
              </h3>

              <p className="text-gray-600 leading-8">
                E-commerce apps, booking systems, restaurant apps,
                educational platforms, healthcare solutions, and
                customer engagement applications.
              </p>
            </div>

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

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized apps with smooth user experience.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">Secure Apps</h3>
              <p className="text-gray-600">
                Strong security and data protection.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">Modern Design</h3>
              <p className="text-gray-600">
                Beautiful UI/UX focused applications.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="font-bold text-xl mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated technical support and maintenance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2E74] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Launch Your App?
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Let TeachKaam transform your idea into a powerful mobile
            application that helps your business grow faster.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#0F2E74] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Your Project
          </Link>

        </div>
      </section>
    </>
  );
}

export default AppDev;