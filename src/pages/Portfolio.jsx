import { Link } from "react-router-dom";
import ecomImg from "../assets/ecom.jpg";
import webImg from "../assets/web.webp";
import dashboardImg from "../assets/dashboard.jpg";
import fbrImg from "../assets/fbr.png";
import posImg from "../assets/pos.webp";
import taxImg from "../assets/tax.jpg";

function Portfolio() {
  const projects = [
    {
      img: ecomImg,
      title: "E-Commerce Website",
      desc: "Modern e-commerce platform with secure payment integration and responsive UI.",
      tag: "E-Commerce",
    },
    {
      img: webImg,
      title: "Business Website",
      desc: "Corporate-level business website with clean UI and high performance.",
      tag: "Business",
    },
    {
      img: dashboardImg,
      title: "ERP Dashboard",
      desc: "Industrial ERP system with analytics, users and management modules.",
      tag: "ERP System",
    },
    {
      img: posImg,
      title: "Cloud POS System",
      desc: "Smart POS system with billing, inventory control and multi-branch management.",
      tag: "POS System",
    },
    {
      img: fbrImg,
      title: "FBR Integration System",
      desc: "Real-time tax reporting system with FBR invoice integration and QR verification.",
      tag: "Compliance",
    },
    {
      img: taxImg,
      title: "Tax Integration System",
      desc: "Automated tax calculation, reporting, and compliance system for businesses.",
      tag: "Tax System",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-[#0F2E74] text-white min-h-[85vh] flex items-center pt-40 pb-32">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h1 className="text-5xl font-bold mt-6">
            Our Creative
            <span className="block text-blue-300 mt-3">
              Portfolio & Projects
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            At <span className="text-white font-semibold">TeachKaam</span>, we design and develop
            modern digital solutions including ERP systems, POS integrations, business websites,
            and e-commerce platforms. Our goal is to help businesses grow through innovative,
            scalable, and high-performance software solutions.
          </p>

          <p className="text-gray-400 mt-4 text-base leading-7">
            From small startups to enterprise-level systems, our team delivers clean UI design,
            secure backend architecture, and fully responsive web applications tailored to real-world business needs.
          </p>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Recent Work
            </h2>
            <p className="text-gray-600 mt-4">
              Some of our best delivered digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((p) => (
              <div
                key={p.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {p.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {p.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="bg-[#0F2E74] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Start Your Project
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Portfolio;