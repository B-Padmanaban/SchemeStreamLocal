import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Applications from "./pages/applications/Applications";
import Grievances from "./pages/grievances/Grievances";
import User from "./pages/user/User";
import Category from "./pages/home/CategoryPage";
import SchemeDetails from "./pages/home/SchemeDetails";
import Login from "./pages/SignUp&SignIn/login";
import Register from "./pages/SignUp&SignIn/register";
import AdminDashboard from './pages/authorized/AuthorizedDashboard';

function App() {
  // State to manage if the user is authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // State to store the user data
  const [user, setUser] = useState(null);

  // useEffect runs on component mount to check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    const userData = localStorage.getItem("user"); // Get the user data from localStorage

    // Debugging logs to check if token and user data are available
    console.log("Token:", token); 
    console.log("User Data:", userData);

    // If token and user data exist, set the authentication state and user data
    if (token && userData) {
      setIsAuthenticated(true); // User is authenticated
      setUser(JSON.parse(userData)); // Set the user data
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  // handleLogin is called after successful login
  const handleLogin = (token, userData) => {
    // Store the token and user data in localStorage for persistence
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    // Update the state with the logged-in user's data
    setIsAuthenticated(true);
    setUser(userData);
  };

  // handleLogout is called when the user logs out
  const handleLogout = () => {
    // Remove the token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Update the state to reflect the user is logged out
    setIsAuthenticated(false);
    setUser(null);

    // Redirect the user to the register page after logout
    window.location.href = "/"; 
  };

  return (
    <Router>
      {/* If the user is authenticated, show the Navbar */}
      {isAuthenticated && <Navbar user={user} onLogout={handleLogout} />}

      {/* Set up the routes for different pages in the app */}
      <Routes>
        {/* Default route: If authenticated, go to home. Otherwise, go to Register */}
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Register />} />
        
        {/* Login page: If authenticated, redirect to home, else show Login page */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <Login onLogin={handleLogin} />} />
        
        {/* Home page: Only accessible if authenticated, otherwise redirect to register */}
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />
        
        {/* Category page: Only accessible if authenticated, otherwise redirect to register */}
        <Route path="/category/:categoryName" element={isAuthenticated ? <Category /> : <Navigate to="/" replace />} />
        
        {/* Scheme Details page: Only accessible if authenticated, otherwise redirect to register */}
        <Route path="/scheme/:schemeId" element={isAuthenticated ? <SchemeDetails /> : <Navigate to="/" replace />} />
        
        {/* Applications page: Only accessible if authenticated, otherwise redirect to register */}
        <Route path="/applications" element={isAuthenticated ? <Applications /> : <Navigate to="/" replace />} />
        
        {/* Grievances page: Only accessible if authenticated, otherwise redirect to register */}
        <Route path="/grievances" element={isAuthenticated ? <Grievances /> : <Navigate to="/" replace />} />
        
        {/* User Profile page: Only accessible if authenticated, otherwise redirect to register */}
        <Route path="/user" element={isAuthenticated ? <User /> : <Navigate to="/" replace />} />

        <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/" replace />} />

        
        {/* Fallback route for any undefined routes: Redirect to register page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;