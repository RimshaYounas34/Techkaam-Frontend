import { useState } from "react";
import { Link } from "react-router-dom";

const businessTypes = [
  { id: "restaurant", label: "Cafe OR Restaurant", icon: "🍽️" },
  { id: "retail", label: "Retail / Super Mart", icon: "🛒" },
  { id: "industrial", label: "Industrial / Factory", icon: "🏭" },
  { id: "bakery", label: "Bakery", icon: "🥐" },
];

const outletOptions = [
  { id: "1", label: "1" },
  { id: "2-5", label: "2-5" },
  { id: "5-8", label: "5-8" },
  { id: "10+", label: "10+" },
];

function TryNow() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState("");
  const [outlets, setOutlets] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    storeName: "",
    subdomain: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: "Pakistan",
  });

  function updateForm(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleRegister(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1500);
  }

  function nextStep() {
    if (step < 3) setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  const canGoStep2 = businessType !== "";
  const canGoStep3 = outlets !== "";

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid lg:grid-cols-5">
            {/* Left panel — CISePOS style image area */}
            <div className="hidden lg:block lg:col-span-2 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
              <div className="relative z-10">
                <p className="text-cyan-300 font-semibold text-sm mb-2">TeachKaam</p>
                <h2 className="text-3xl font-bold mb-4 leading-tight">
                  Register for FREE
                </h2>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Start your cloud POS, ERP, or FBR-ready billing trial. Setup takes
                  minutes — our team helps you go live fast.
                </p>
                <ul className="space-y-3 text-sm text-blue-100">
                  <li>✓ 14-day free consultation</li>
                  <li>✓ FBR & PRA integration</li>
                  <li>✓ Multi-branch support</li>
                  <li>✓ 24/7 support</li>
                </ul>
              </div>
            </div>

            {/* Right panel — wizard */}
            <div className="lg:col-span-3 p-8 md:p-10">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
                Register your software today for FREE
              </h1>

              {/* Step indicator */}
              <div className="flex justify-center gap-2 mb-8 mt-6">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`h-2 rounded-full transition-all ${
                      step >= n ? "w-12 bg-brand-600" : "w-8 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              {done ? (
                <div className="text-center py-8">
                  <p className="text-5xl mb-4">✓</p>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    Registration in Process...
                  </h2>
                  <p className="text-gray-600 mb-2">Creating your account</p>
                  <p className="text-sm text-gray-500 mb-8">
                    Thank you! Our team will contact you shortly at {form.email}
                  </p>
                  <Link
                    to="/demo"
                    className="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 mr-4"
                  >
                    Watch Demo
                  </Link>
                  <Link to="/" className="text-brand-600 font-semibold hover:underline">
                    Home
                  </Link>
                </div>
              ) : (
                <>
                  {/* Step 1 — Business type */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-lg font-bold text-slate-700 text-center mb-6">
                        What kind of business do you own?
                      </h2>
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        {businessTypes.map((b) => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setBusinessType(b.id)}
                            className={`p-6 rounded-xl border-2 text-center transition hover:shadow-md ${
                              businessType === b.id
                                ? "border-brand-600 bg-brand-50 shadow-md"
                                : "border-gray-200 hover:border-brand-300"
                            }`}
                          >
                            <span className="text-3xl block mb-2">{b.icon}</span>
                            <span className="text-sm font-semibold text-slate-700">
                              {b.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-center mt-8">
                        <button
                          type="button"
                          disabled={!canGoStep2}
                          onClick={nextStep}
                          className="bg-brand-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 — Outlets */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-lg font-bold text-slate-700 text-center mb-6">
                        Number of outlets you maintain
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
                        {outletOptions.map((o) => (
                          <button
                            key={o.id}
                            type="button"
                            onClick={() => setOutlets(o.id)}
                            className={`py-8 rounded-xl border-2 text-xl font-bold transition ${
                              outlets === o.id
                                ? "border-brand-600 bg-brand-600 text-white"
                                : "border-gray-200 text-slate-700 hover:border-brand-400"
                            }`}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-center gap-4 mt-8">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="border-2 border-gray-300 text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          disabled={!canGoStep3}
                          onClick={nextStep}
                          className="bg-brand-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-40"
                        >
                          Next →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 — Details */}
                  {step === 3 && (
                    <form onSubmit={handleRegister}>
                      <h2 className="text-lg font-bold text-slate-700 text-center mb-6">
                        Your details
                      </h2>

                      <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto">
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            Name
                          </label>
                          <input
                            required
                            value={form.name}
                            onChange={(e) => updateForm("name", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            Store Name
                          </label>
                          <input
                            required
                            value={form.storeName}
                            onChange={(e) => updateForm("storeName", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            Web Access URL
                          </label>
                          <div className="flex mt-1">
                            <input
                              value={form.subdomain}
                              onChange={(e) =>
                                updateForm("subdomain", e.target.value.toLowerCase())
                              }
                              placeholder="yourstore"
                              className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                            />
                            <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-3 py-2.5 text-gray-600 text-sm">
                              .teachkaam.com
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            E-Mail Address
                          </label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            Password
                          </label>
                          <input
                            required
                            type="password"
                            minLength={6}
                            value={form.password}
                            onChange={(e) => updateForm("password", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            Phone
                          </label>
                          <input
                            required
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateForm("phone", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            City
                          </label>
                          <input
                            required
                            value={form.city}
                            onChange={(e) => updateForm("city", e.target.value)}
                            placeholder="Karachi"
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-xs font-semibold text-gray-500 uppercase">
                            Country
                          </label>
                          <select
                            value={form.country}
                            onChange={(e) => updateForm("country", e.target.value)}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-brand-600"
                          >
                            <option>Pakistan</option>
                            <option>United Arab Emirates</option>
                            <option>Saudi Arabia</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="border-2 border-gray-300 text-slate-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={submitting}
                          className="bg-brand-600 text-white px-12 py-3 rounded-lg font-semibold hover:bg-brand-700 disabled:opacity-70 min-w-[160px]"
                        >
                          {submitting ? "Registering..." : "Register"}
                        </button>
                      </div>

                      {submitting && (
                        <p className="text-center text-sm text-brand-600 mt-4 animate-pulse">
                          Please do not leave this page. Creating your account...
                        </p>
                      )}
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
          Keep your business thriving with TeachKaam — ERP, POS, and FBR solutions
          for growing businesses in Pakistan.
        </p>
      </div>
    </div>
  );
}

export default TryNow;
