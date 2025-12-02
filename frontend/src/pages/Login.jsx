import React, { useState } from "react";
import { FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.trim() || !password.trim()) {
      setError("Please enter username and password.");
      return;
    }

    setError("");

    // update login state in App.jsx
    onLogin();

    // redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        {/* LOGO */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow">
            G
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            GActivity Login
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back! Please sign in.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Username</label>
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
              <FiUser className="text-gray-500" />
              <input
                type="text"
                placeholder="Email or Mobile"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="text-gray-500"
              >
                {showPass ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

          {/* Forgot password */}
          <p className="text-center text-sm mt-2">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </p>
        </form>

        {/* FOOTER */}
        <p className="text-center text-xs mt-6 text-gray-500">
          © {new Date().getFullYear()} GActivity. All rights reserved.
        </p>
      </div>
    </div>
  );
}
