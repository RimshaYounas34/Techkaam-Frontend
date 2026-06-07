import { Link } from "react-router-dom";
import ReasonIconBadge from "../components/ReasonIconBadge";
import {
  IconAnalytics,
  IconAffordable,
  IconCustomers,
  IconDashboard,
  IconDecisions,
  IconFastPay,
  IconInventory,
  IconSupport,
} from "../components/ReasonIcons";

const reasons = [
  {
    title: "Detailed Analytics & Reporting",
    Icon: IconAnalytics,
    text: "Generate detailed reports to monitor sales, inventory, customer trends, and daily operations. TeachKaam dashboards use clear charts and summaries so you can review business data anytime, anywhere — and track costs and profits with ease.",
  },
  {
    title: "Keep Customers Smiling",
    Icon: IconCustomers,
    text: "Offer faster checkouts, accurate orders, and better service with integrated POS and CRM tools. Build customer profiles, track purchase history, send offers via WhatsApp API, and manage loyalty — all from one platform.",
  },
  {
    title: "Fast Transactions with Mobility",
    Icon: IconFastPay,
    text: "Process sales in seconds with our cloud POS. Run on any device with a browser — sales sync automatically with back-office ERP. Keep product lists updated for faster, error-free billing across retail and restaurants.",
  },
  {
    title: "Make Knowledgeable Business Decisions",
    Icon: IconDecisions,
    text: "Review daily sales summaries, register closures, and item-wise reports to spot trends and fix issues early. Track performance by branch, product, or customer group to create smarter offers and grow revenue.",
  },
  {
    title: "Inventory & Accounts Module",
    Icon: IconInventory,
    text: "Manage stock across stores, create purchase orders, and transfer inventory between locations. Built-in accounting helps track expenses, vouchers, cash flow, and financial performance in one place.",
  },
  {
    title: "Powerful Dashboard",
    Icon: IconDashboard,
    text: "View real-time sales, best-selling items, discounts, and net sales on an intuitive dashboard. One centralized platform keeps data consistent across ERP, POS, and integrations — reducing errors and manual work.",
  },
  {
    title: "Easy to Use & Affordable",
    Icon: IconAffordable,
    text: "Quick setup, simple training, and software that scales as you grow. No heavy on-premise servers — cloud solutions tailored for Pakistani businesses, from single outlets to multi-branch operations.",
  },
  {
    title: "Impeccable Customer Service",
    Icon: IconSupport,
    text: "Our team is ready to help with setup, FBR/PRA integration, customization, and ongoing support. We listen to your needs and resolve issues quickly so your business keeps running smoothly.",
  },
];

function BtnIcon() {
  return (
    <span className="inline-block w-5 h-0.5 bg-current rounded shrink-0" aria-hidden />
  );
}

function WhyTeachKaam() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 text-white pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose TeachKaam?
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Choose TeachKaam for detailed analytics, fast transactions, smart
            decisions, better customer service, streamlined inventory, easy
            setup, FBR-ready POS, and affordable software solutions across
            Pakistan.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-snug">
            8 Reasons to Pick TeachKaam for a{" "}
            <span className="relative inline-block">
              Successful Business
              <span
                className="absolute left-0 right-0 -bottom-1 h-1 bg-cyan-400 rounded-full"
                aria-hidden
              />
            </span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            TeachKaam helps retail, restaurant, and industrial businesses stay
            secure, efficient, and profitable. Our ERP, POS, FBR integration,
            SCADA, and custom apps are built with advanced yet user-friendly
            features to streamline your operations with ease.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/try-now"
              className="inline-flex items-center gap-3 border-2 border-brand-600 text-brand-600 bg-white px-8 py-3 rounded font-semibold hover:bg-brand-50 transition min-w-[180px] justify-center"
            >
              <BtnIcon />
              Try Now
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-3 rounded font-semibold hover:bg-brand-700 transition min-w-[180px] justify-center shadow-md"
            >
              <BtnIcon />
              Demo Video
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((item) => {
              const Icon = item.Icon;
              return (
                <article
                  key={item.title}
                  className="bg-white border border-gray-100 rounded-md p-8 md:p-9 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition flex flex-col relative overflow-hidden shadow-sm"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <ReasonIconBadge>
                      <Icon />
                    </ReasonIconBadge>
                    <h3 className="text-[17px] font-bold text-slate-900 leading-snug pt-3 capitalize">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#555] text-[15px] leading-relaxed flex-1">
                    {item.text}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2e7fd9]" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 text-white py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Find TeachKaam to Be a Good Fit for Your Business?
          </h2>
          <p className="text-blue-100 mb-10 leading-relaxed text-lg">
            Get in touch today and find the right solution to make your
            business grow with TeachKaam cloud POS & ERP solutions.
          </p>
          <Link
            to="/try-now"
            className="inline-flex items-center gap-3 bg-white text-slate-800 border-2 border-white px-10 py-3.5 rounded font-semibold hover:bg-blue-50 transition shadow-lg"
          >
            <BtnIcon />
            Free Consultation
          </Link>
        </div>
      </section>

      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-gray-600 leading-relaxed">
            Keep your business thriving towards success with TeachKaam — the
            best ERP & POS software suited to your evolving business needs
            that ensures smooth and flawless operations.
          </p>
        </div>
      </section>
    </>
  );
}

export default WhyTeachKaam;
