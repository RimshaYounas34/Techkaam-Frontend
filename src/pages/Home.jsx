import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import ecomImg from "../assets/ecom.jpg";
import webImg from "../assets/web.webp";
import portImg from "../assets/port.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import blog1 from "../assets/Blog1.jpg";
import blog2 from "../assets/Blog2.png";
import blog3 from "../assets/Blog3.jpg";
import client1 from "../assets/client1.webp";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import { useState } from "react";

const blogPosts = [
  {
    title: "Why AI-Powered ERP is the Future of Industry",
    date: "June 2026",
    link: "/blog",
    image: blog1,
  },
  {
    title: "FBR POS Integration Explained",
    date: "May 2026",
    link: "/blog",
    image: blog2,
  },
  {
    title: "Cloud POS vs Traditional POS",
    date: "April 2026",
    link: "/blog",
    image: blog3,
  },
];

const restaurantFeatures = [
  "AI Automation",
  "Real-time Monitoring",
  "Inventory Control",
  "Smart Reports",
  "Production Planning",
  "HR & Finance Modules",
];

const retailFeatures = [
  "FBR POS Integration",
  "PRA & Tax Compliance",
  "Quick Checkouts",
  "Sales Reporting",
  "Inventory Management",
  "Multi-branch Control",
];

const integrations = [
  {
    title: "FBR Integration",
    text: "Report sales for taxation with ease and build customer trust with FBR-approved POS solutions.",
    link: "/fbr-integration",
  },
  {
    title: "PRA Integration",
    text: "Punjab Revenue Authority compliance for retail and restaurant POS billing.",
    link: "/pra-integration",
  },
  {
    title: "Cloud POS System",
    text: "Quick checkouts, inventory, and reporting for retail and restaurants.",
    link: "/pos-system",
  },
  {
    title: "Tax Integration",
    text: "Complete tax, sales, and compliance in one integrated platform.",
    link: "/tax-integration",
  },
  {
    title: "Industrial ERP",
    text: "AI-powered ERP to automate production, inventory, HR and finance on one smart platform.",
    link: "/industrial-erp",
  },
  {
    title: "WhatsApp API",
    text: "Stay connected with customers through automated messages, offers and CRM updates.",
    link: "/whatsapp-api",
  },
  {
    title: "SCADA Systems",
    text: "Industrial monitoring and control for efficient factory and plant operations.",
    link: "/scada",
  },
  {
    title: "Web Development",
    text: "Modern, responsive websites and web apps built with the latest technologies.",
    link: "/web-development",
  },
  {
    title: "App Development",
    text: "Android and iOS applications tailored for your business workflows.",
    link: "/app-development",
  },
];

const testimonials = [
  {
    name: "Fatima Noor",
    company: "Retail Store Owner",
    image: client1,
    quote:
      "TeachKaam provided us with an outstanding POS solution that streamlined our daily operations and improved customer experience.",
  },
  {
    name: "Muhammad Ali",
    company: "Manufacturing Company",
    image: client2,
    quote:
      "The ERP system developed by TeachKaam transformed our inventory and production management with excellent support.",
  },
  {
    name: "Zainab Malik",
    company: "E-Commerce Business",
    image: client3,
    quote:
      "Professional team, modern design and exceptional development services. Highly recommended for growing businesses.",
  },
];

function Home() {
  const form = useRef();

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.name || !nameRegex.test(formData.name)) {
      return "Name must contain only letters";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      return "Phone must be 10-15 digits only";
    }

    if (!formData.message) {
      return "Message is required";
    }

    return "";
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully ✔");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Failed to send message ❌");
      }
    } catch (err) {
      setError("Server error ❌");
    }

    setLoading(false);
  };
  return (
    <>
      {/* Hero — CISePOS-style navy gradient */}
      <section className="relative bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 text-white pt-36 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center pb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Pakistan&apos;s Leading Software Solutions Partner
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            TechKaam is a leading software solutions company in Pakistan,
            delivering innovative ERP systems, POS solutions, FBR integrations,
            industrial automation, web development, and mobile applications. We
            help businesses streamline operations, improve productivity, and
            accelerate digital transformation through reliable, scalable, and
            cost-effective technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-brand-900 transition"
          >
            Free Consultation
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-8 flex justify-center pb-4">
          <img
            src={heroImg}
            alt="TechKaam software dashboard"
            className="w-auto max-w-full max-h-[220px] sm:max-h-[260px] md:max-h-[300px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Wave divider */}
        <div className="relative mt-2">
          <svg
            viewBox="0 0 1440 120"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Software Solutions Provider in Pakistan
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At TechKaam, we empower businesses with smart software solutions
            designed to simplify complex operations. From retail stores and
            restaurants to manufacturing industries and startups, our team
            develops customized ERP, POS, automation, web, and mobile solutions
            that drive efficiency, enhance customer experiences, and support
            long-term business growth.
          </p>
        </div>
      </section>

      {/* Industrial ERP block */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              TechKaam Industrial ERP AI System
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              TechKaam's AI-powered Industrial ERP system helps manufacturers
              and enterprises manage production, inventory, procurement, HR, and
              finance through a single intelligent platform. Gain real-time
              insights, automate workflows, and improve operational efficiency
              with advanced ERP technology.
            </p>
            <Link
              to="/industrial-erp"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded font-semibold hover:bg-brand-700 transition mb-8"
            >
              Learn More
            </Link>
            <ul className="grid grid-cols-2 gap-3 text-slate-700">
              {restaurantFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <img
              src={portImg}
              alt="ERP dashboard"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* POS / FBR block */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white rounded-2xl shadow-xl p-4">
            <img
              src={ecomImg}
              alt="POS system"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Tax, PRA, POS & FBR Integration
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our cloud-based POS solutions are built for retailers,
              restaurants, and multi-branch businesses. With seamless FBR and
              PRA integration, inventory management, sales tracking, and
              real-time reporting, TeachKaam ensures smooth operations while
              maintaining complete compliance with tax regulations.
            </p>
            <Link
              to="/pos-system"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded font-semibold hover:bg-brand-700 transition mb-8"
            >
              Learn More
            </Link>
            <ul className="grid grid-cols-2 gap-3 text-slate-700">
              {retailFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-brand-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Integrations grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            TechKaam Integrations & Modules
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            Cutting-edge modules to streamline operations, optimize stock, and
            maximize sales for your business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                <Link
                  to={item.link}
                  className="text-brand-600 font-semibold hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-stop */}
      <section className="bg-brand-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            One-stop Solution for All Your Business Operations
          </h2>
          <p className="text-blue-100 mb-8">
            TechKaam provides a complete ecosystem of software solutions
            including ERP, POS, FBR Integration, SCADA Systems, Web Development,
            Mobile Apps, and Business Automation Tools — everything your
            organization needs to operate efficiently and scale successfully.
          </p>
          <Link
            to="/services"
            className="inline-block border-2 border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-brand-700 transition"
          >
            View All Services
          </Link>
        </div>
      </section>
      {/* Testimonials */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Testimonials
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-3">
              What Our Clients Say
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover why businesses trust TechKaam for ERP, POS, Web
              Development, Mobile Applications and Digital Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl text-blue-100 font-bold">
                  "
                </div>

                {/* Client Image */}
                <div className="flex justify-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-full object-cover border-[6px] border-blue-100 shadow-lg"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center text-yellow-400 text-xl mb-5">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="text-gray-600 text-center leading-8 italic min-h-[140px]">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto my-6 rounded-full"></div>

                {/* Client Info */}
                <div className="text-center">
                  <h3 className="font-bold text-slate-900 text-lg">{t.name}</h3>

                  <p className="text-blue-600 font-medium text-sm">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Our Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: ecomImg,
                title: "E-Commerce Platform",
                desc: "Payment integration & admin panel.",
              },
              {
                img: webImg,
                title: "Business Website",
                desc: "Corporate site with CMS.",
              },
              {
                img: portImg,
                title: "ERP Dashboard",
                desc: "Industrial management system.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
             <Link
              to="/portfolio"
              className="bg-[#0F2E74] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
            View All Portfolio 
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Our Recent Blogs
            </h2>
            <p className="text-gray-600 mt-3">Learn from TechKaam experts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >
                {/* IMAGE */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>

                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {post.title}
                  </h3>

                  <Link
                    to={post.link}
                    className="mt-4 text-blue-700 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="bg-[#0F2E74] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </section>

     {/* Contact */}
<section className="bg-gray-50 py-24 min-h-screen pt-20" id="contact">
  <div className="max-w-3xl mx-auto px-8">

    <h2 className="text-4xl font-bold text-center text-slate-800 mb-2">
      Contact Us
    </h2>

    <p className="text-center text-gray-600 mb-6">
      ERP, POS, FBR Integration ke liye message send karein
    </p>

    {/* ERROR */}
    {error && (
      <p className="text-red-600 text-center mb-4 font-semibold">
        {error}
      </p>
    )}

    {/* SUCCESS */}
    {success && (
      <p className="text-green-600 text-center mb-4 font-semibold">
        {success}
      </p>
    )}

    {/* FORM */}
    <form
      onSubmit={sendEmail}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-4"
    >

      <input
        type="text"
        name="name"
        placeholder="Name (letters only)"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone (10-15 digits)"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
      />

      <textarea
        rows="5"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-3 w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0F2E74] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>

  </div>
</section>

      {/* CTA */}
      <section className="bg-brand-900 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take Your Business to New Heights?
          </h2>
          <p className="text-blue-200 mb-10">
            Get in touch with our expert team today. We&apos;ll help you choose
            the right ERP, POS, or custom software for your needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
              <p className="text-blue-200 text-sm mb-4">
                Talk to our experts. No commitment required.
              </p>
              <Link
                to="/contact"
                className="inline-block border border-white px-5 py-2 rounded hover:bg-white hover:text-brand-900 transition"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-2">View Our Services</h3>
              <p className="text-blue-200 text-sm mb-4">
                Explore ERP, POS, SCADA, web and app development.
              </p>
              <Link
                to="/services"
                className="inline-block border border-white px-5 py-2 rounded hover:bg-white hover:text-brand-900 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Trusted by Businesses Across Pakistan
          </h2>
          <p className="text-gray-600 mb-8">
            Trusted by businesses across Pakistan, TechKaam delivers technology
            solutions that improve efficiency, reduce operational costs, and
            support digital growth. Our commitment to innovation and customer
            success makes us a reliable technology partner for organizations of
            all sizes.
          </p>
          <p className="text-brand-700 font-semibold">
            FBR POS · ERP · SCADA · Web & Mobile Apps
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
