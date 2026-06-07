import { Link } from "react-router-dom";
import posHero from "../assets/pos-hero.jpg";
import {
  FaIndustry,
  FaCashRegister,
  FaBolt,
  FaLaptopCode,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import {
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

function Services() {
  const services = [
  {
    icon: <FaIndustry className="text-fuchsia-500" />,

    title: "Industrial ERP AI Based",
    desc: "AI-powered ERP solution for inventory, production, HR, payroll and finance management.",
    link: "/industrial-erp",
  },
  {
    icon: <FaCashRegister className="text-emerald-500" />,
    title: "Tax, PRA, POS & FBR Integration",
    desc: "Complete POS ecosystem with tax compliance, invoicing and government integrations.",
    link: "/tax-pra-pos-fbr",
  },
  {
    icon: <FaBolt className="text-amber-400" />,
    title: "SCADA Solutions",
    desc: "Industrial monitoring, automation and real-time control systems.",
    link: "/scada",
  },
  {
    icon: <FaLaptopCode className="text-sky-500" />,
    title: "Web Development",
    desc: "Modern responsive websites and powerful web applications.",
    link: "/web-development",
  },
  {
    icon: <FaMobileAlt className="text-pink-500" />,
    title: "App Development",
    desc: "Android & iOS mobile applications with modern UI/UX.",
    link: "/app-development",
  },
  {
    icon: <FaWhatsapp className="text-green-500" />,
    title: "WhatsApp API Integration",
    desc: "Automated communication and business process integrations.",
    link: "/whatsapp-api",
  },
  {
    icon: <MdEmail className="text-red-500" />,
    title: "Email API Integration",
    desc: "Transactional emails, notifications and CRM automation.",
    link: "/email-api",
  },
];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0F2E74] text-white pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm">
              SOFTWARE SOLUTIONS
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">
              Smart Business
              <span className="block text-blue-300">
                Solutions For Growth
              </span>
            </h1>

            <p className="text-gray-200 text-lg leading-8 mb-8">
              We provide Industrial ERP, POS Integration, SCADA Systems,
              Web Development, Mobile Applications and API Integrations
              to help businesses automate operations and accelerate growth.
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-white text-[#0F2E74] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Free Consultation
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0F2E74] transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div>
            <img
              src={posHero}
              alt="Services"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

    {/* Services Section */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        What We Offer
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        Our Services
      </h2>

      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
        We deliver innovative software solutions that help businesses
        automate operations, improve efficiency and accelerate growth.
      </p>
    </div>

    {/* 3 Cards per row FIXED */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white rounded-3xl p-10 shadow-lg border border-gray-100 
          hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 
          flex flex-col h-full"
        >

          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition duration-300">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-800 mb-4 min-h-[60px]">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-7 flex-grow text-[15px]">
            {service.desc}
          </p>

          {/* Button */}
          <Link
            to={service.link}
            className="mt-8 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
          >
            Learn More →
          </Link>

        </div>
      ))}

    </div>

  </div>
</section>
  
{/* Why Choose Us */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-widest">
        Why Choose Us
      </span>

      <h2 className="text-5xl font-bold text-gray-900 mt-4">
        Why Businesses Trust Us
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
        Delivering innovative technology solutions with quality,
        reliability and long-term support.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Expert Team */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center text-3xl mb-6">
          <FaUsers />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Expert Team
        </h3>

        <p className="text-gray-600">
          Professional developers and consultants with real-world experience.
        </p>
      </div>

      {/* Fast Delivery */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-400 to-yellow-400 text-white flex items-center justify-center text-3xl mb-6">
          <FaRocket />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Fast Delivery
        </h3>

        <p className="text-gray-600">
          Timely project execution without compromising quality.
        </p>
      </div>

      {/* Secure Solutions */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center text-3xl mb-6">
          <FaShieldAlt />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Secure Solutions
        </h3>

        <p className="text-gray-600">
          Reliable and highly secure systems built for growth.
        </p>
      </div>

      {/* Support */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 transition-all duration-500">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center justify-center text-3xl mb-6">
          <FaHeadset />
        </div>

        <h3 className="text-xl font-bold mb-3">
          24/7 Support
        </h3>

        <p className="text-gray-600">
          Dedicated support team always available to help.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-[#0F2E74] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready To Transform Your Business?
          </h2>

          <p className="text-gray-300 mb-8">
            Let's discuss your project and build innovative software
            solutions tailored to your business needs.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#0F2E74] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;