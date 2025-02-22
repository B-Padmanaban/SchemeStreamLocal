import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  console.log("User Data in Navbar:", user); // Debugging: Check if user data is received

  return (
    <div className="flex justify-between bg-white py-4 shadow-md px-6 items-center">
      <h1 className="text-3xl font-bold text-black">SchemeStream</h1> {/* Text color set to black */}

      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:text-red-400 duration-300 hover:underline text-black">Home</Link> {/* Text color set to black */}
        <Link to="/applications" className="hover:text-red-400 duration-300 hover:underline text-black">Applications</Link> {/* Text color set to black */}
        <Link to="/grievances" className="hover:text-red-400 duration-300 hover:underline text-black">Grievances</Link> {/* Text color set to black */}

        {/* User Profile & Logout Dropdown */}
        <div className="relative">
          {user ? (
            <div 
              className="relative flex items-center space-x-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)} // Click to toggle dropdown
            >
              {/* Profile Picture */}
              <img 
                src={user.picture || "/default-avatar.png"} 
                alt="User" 
                className="w-10 h-10 rounded-full border-2 border-[#30347c] hover:opacity-80 transition"
              />
              
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 top-12 w-44 bg-white border border-gray-300 shadow-md rounded-md z-50">
                  <div className="p-3 text-gray-800 font-semibold text-center">{user.name}</div>
                  <hr />
                  <button 
                    onClick={onLogout} 
                    className="block w-full text-red-500 py-2 hover:bg-red-100 text-center"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-700 font-bold">U</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
