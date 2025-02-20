import React, { useState } from "react";  
import axios from "axios";  
import { useNavigate } from "react-router-dom";  

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [error, setError] = useState("");  
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001"; // Use Vite env variable or fallback
        const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });

        const { token, user } = response.data;
        if (!token || !user) throw new Error("Invalid server response.");

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        onLogin(token, user);
        navigate("/home");
    } catch (err) {
        console.error("Login error:", err.response?.data?.message || err.message);
        setError(err.response?.data?.message || "Invalid credentials");
    }
};


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600"> {/* Gradient background */}
      
      <div className="w-full text-center text-3xl font-semibold text-white mb-6 relative z-10">
        SCHEME STREAM
      </div>

      <div className="w-full max-w-sm px-6 py-8 bg-white rounded-lg shadow-xl relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4 text-black">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30347c]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30347c]"
          />

          <button
            type="submit"
            className="w-full p-4 bg-[#30347c] text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
