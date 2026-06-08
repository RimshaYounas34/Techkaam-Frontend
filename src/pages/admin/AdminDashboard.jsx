import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 SECURITY CHECK
    if (!token) {
      navigate("/admin");
      return;
    }

    fetchMessages();
    window.scrollTo(0, 0);
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/admin/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      setMessages(data?.messages || []);
    } catch (err) {
      console.log("API Error:", err);
      setMessages([]);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    setLogoutMsg(true);

    setTimeout(() => {
      navigate("/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 pt-36">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-3">
          Manage Contact Messages
        </p>

        <button
          onClick={logout}
          className="mt-6 bg-[#0F2E74] hover:bg-[#0b1f52] text-white px-6 py-3 rounded-xl shadow-md transition"
        >
          Logout
        </button>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">

        <div
          onClick={() => setShowMessages(!showMessages)}
          className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold">Total Messages</h3>
          <p className="text-6xl font-bold mt-4">{messages.length}</p>
          <p className="mt-4 opacity-90">Click To View</p>
        </div>

        <div
          onClick={() => setShowAdmin(!showAdmin)}
          className="cursor-pointer bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold">Active Admin</h3>
          <p className="text-6xl font-bold mt-4">1</p>
          <p className="mt-4 opacity-90">Click To View</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-fuchsia-700 text-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-semibold">System Status</h3>
          <p className="text-5xl font-bold mt-4">LIVE</p>
          <p className="mt-4 opacity-90">Running Successfully</p>
        </div>
      </div>

      {/* ADMIN DETAILS */}
      {showAdmin && (
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">Admin Details</h2>

          <div className="space-y-3 text-gray-700">
            <p><b>Name:</b> Admin User</p>
            <p><b>Email:</b> admin@gmail.com</p>
            <p><b>Role:</b> Super Admin</p>
            <p><b>Status:</b> Active</p>
            <p><b>Login Time:</b> Today</p>
          </div>
        </div>
      )}

      {/* MESSAGES */}
      {showMessages && (
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8">
            Contact Messages
          </h2>

          <div className="grid gap-6">
            {messages.length === 0 ? (
              <p className="text-gray-500">No messages found.</p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-6"
                >
                  <p><b>Name:</b> {msg.name}</p>
                  <p><b>Email:</b> {msg.email}</p>
                  <p><b>Phone:</b> {msg.phone}</p>
                  <p><b>Subject:</b> {msg.subject}</p>
                  <p><b>Message:</b> {msg.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* LOGOUT MESSAGE */}
      {logoutMsg && (
        <div className="mt-10 bg-[#0F2E74] text-white text-center py-4 rounded-2xl shadow-lg">
          You have successfully logged out... Redirecting 🔄
        </div>
      )}

    </div>
  );
}

export default AdminDashboard;