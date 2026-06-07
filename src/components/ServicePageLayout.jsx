import { Link } from "react-router-dom";

function ServicePageLayout({
  title,
  subtitle,
  intro,
  benefits,
  features,
  ctaTitle,
  ctaText,
}) {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-900 to-brand-700 text-white pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">{subtitle}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            {intro}
          </p>
        </div>
      </section>

      {benefits?.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {features?.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
              Features
            </h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {features.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl"
                >
                  <span className="text-brand-600 font-bold shrink-0">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-brand-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-blue-100 mb-8">{ctaText}</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServicePageLayout;
