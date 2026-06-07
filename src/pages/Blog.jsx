import { Link } from "react-router-dom";
import blog1 from "../assets/Blog1.jpg";
import blog2 from "../assets/Blog2.png";
import blog3 from "../assets/Blog3.jpg";
import blog4 from "../assets/Blog4.jpg";
import blog5 from "../assets/Blog5.jpg";
import blog6 from "../assets/Blog6.jpg";
import blog7 from "../assets/Blog7.jpg";


const blogs = [
  {
    img: blog1,
    title: "Why AI-Powered ERP is the Future of Industry",
    desc: "AI-driven ERP systems are changing how industries manage operations and automation.",
    date: "June 2026",
  },
  {
    img: blog2,
    title: "FBR POS Integration Explained",
    desc: "Learn how FBR integration helps businesses with tax compliance and automation.",
    date: "May 2026",
  },
  {
    img: blog3,
    title: "Cloud POS vs Traditional POS",
    desc: "Comparison between modern cloud POS systems and old billing software.",
    date: "April 2026",
  },
  {
    img: blog4,
    title: "ERP Systems Improve Productivity",
    desc: "ERP helps businesses automate workflow, saving time and cost.",
    date: "March 2026",
  },
  {
    img: blog5,
    title: "Web Development Trends 2026",
    desc: "Modern React, UI/UX and full-stack development trends.",
    date: "February 2026",
  },
  {
    img: blog6,
    title: "Mobile Apps for Business Growth",
    desc: "Why mobile apps are essential for modern businesses.",
    date: "January 2026",
  },
];

function Blog() {
  return (
    <div className="bg-white">

      {/* ================= HERO (BIG + IMAGE STYLE) ================= */}
     <section className="relative min-h-[85vh] flex items-center bg-[#0F2E74] text-white overflow-hidden pt-32 pb-24">
        
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-[#0F2E74] to-blue-800 opacity-90"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 py-24">

          <h1 className="text-5xl font-bold">
            TeachKaam
            <span className="block text-blue-300 mt-3">
              Blogs & Insights
            </span>
          </h1>

          <p className="text-gray-200 mt-6 text-lg leading-8">
            Explore the latest updates in ERP systems, POS solutions, FBR integration,
            web development, and digital transformation technologies.
          </p>

          <p className="text-gray-300 mt-4">
            We share real industry knowledge to help businesses grow smarter and faster.
          </p>

        </div>
      </section>
{/* ================= FEATURED BLOG ================= */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <img
          src={blog7}
          alt="Artificial Intelligence"
          className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          Featured Article
        </span>

        <h2 className="text-4xl font-bold text-slate-900 mt-6 mb-5 leading-tight">
          How Artificial Intelligence is Transforming Modern Businesses
        </h2>

        <p className="text-gray-600 leading-8 mb-6">
          Artificial Intelligence (AI) is rapidly changing the way businesses
          operate across every industry. From automating repetitive tasks and
          improving customer support to analyzing massive datasets and predicting
          future trends, AI enables organizations to work smarter and more
          efficiently.
        </p>

        <p className="text-gray-600 leading-8 mb-6">
          Modern companies are using AI-powered solutions such as intelligent
          chatbots, predictive analytics, process automation, and smart decision
          systems to reduce costs, increase productivity, and deliver better
          customer experiences. Businesses that embrace AI today are positioning
          themselves for long-term success in an increasingly digital world.
        </p>

        <div className="flex gap-4 text-sm text-gray-500 mb-8">
          <span>July 2026</span>
          <span>•</span>
          <span>6 Min Read</span>
        </div>

        <Link
          to="/blog"
          className="bg-[#0F2E74] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
        >
          Read Full Article
        </Link>
      </div>

    </div>

  </div>
</section>

      {/* ================= BLOG GRID ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Latest Articles
            </h2>
            <p className="text-gray-600 mt-3">
              Learn from TeachKaam experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >

                {/* IMAGE */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">

                  <p className="text-sm text-gray-500 mb-2">
                    {blog.date}
                  </p>

                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 leading-7 flex-grow">
                    {blog.desc}
                  </p>

                  <Link
                    to="/blog"
                    className="mt-6 text-blue-700 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Blog;