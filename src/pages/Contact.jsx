import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // VALIDATION
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

  // SUBMIT
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
    <section className="bg-gray-50 py-24 min-h-screen pt-36">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-2">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mb-6">
          ERP, POS, FBR Integration ke liye message send karein
        </p>

        {/* ERROR */}
        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">{error}</p>
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
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Name (letters only)"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone (10-15 digits)"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />

          {/* SUBJECT */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          />

          {/* MESSAGE */}
          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-3 w-full"
          ></textarea>

          {/* BUTTON */}
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
  );
}

export default Contact;
