import React, { useState } from "react"; 
import axios from "axios";  
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";  

const Register = () => {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [role, setRole] = useState("");  
  const [error, setError] = useState("");  
  const navigate = useNavigate();  

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001"; // Use Vite env variable or fallback
  console.log("API URL:", API_URL); // Debugging API URL

  const handleRegister = async (e) => {
    e.preventDefault();  

    if (!role) {
      setError("Please select a role.");  
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, { email, password, role });

      console.log("Registration success:", response.data); // Debugging success
      navigate("/login");  
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);  
      setError(err.response?.data?.message || "Registration failed");  
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            />
          </div>
          
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            />
          </div>

          <div className="space-y-2">
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            >
              <option value="" disabled>Select Your Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button 
            type="submit" 
            className={`w-full bg-indigo-600 text-white p-4 rounded-md hover:bg-indigo-700 transition duration-300 ${!role && 'opacity-50 cursor-not-allowed'}`} 
            disabled={!role}
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
