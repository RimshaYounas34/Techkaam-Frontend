import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (data.success) {
        // 🔐 TOKEN SAVE (IMPORTANT)
        localStorage.setItem("token", data.token);

        setLoading(false);

        alert("Login successful ✔");

        // 🚀 PROPER NAVIGATION (NO window.location)
        navigate("/admin/dashboard");
      } else {
        setLoading(false);
        setError(data.message || "Invalid credentials ❌");
      }
    } catch (err) {
      setLoading(false);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Admin Login
        </h2>

        <p className="text-center text-gray-500 text-sm">
          Enter your credentials to access dashboard
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded text-center">
            {error}
          </div>
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;