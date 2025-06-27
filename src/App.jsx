import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; // Firebase listener
import { auth } from './firebaseConfig'; // Your Firebase auth instance (make sure src/firebaseConfig.js exists)


// IMPORT ALL YOUR PAGE COMPONENTS HERE
import LandingPage from './components/LandingPage'; // Your main landing page
import Signup from './components/Signup';          // Your signup page
import Login from './components/Login';            // Your login page
import FoodGallery from './components/FoodGallery';    // Your authenticated dashboard page

// --- PrivateRoute Component ---
// This component checks if a user is logged in.
// If they are, it shows the children (the protected page, like Dashboard).
// If not, it redirects them to the login page.
const PrivateRoute = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Listen for changes in Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoadingAuth(false);
    });
    return unsubscribe; // Clean up the subscription when the component unmounts
  }, []); // Run only once on component mount

  if (loadingAuth) {
    // Show a loading message or spinner while checking authentication status
    return <div className="flex justify-center items-center h-screen text-xl">Loading authentication...</div>;
  }
// If a user is logged in (currentUser is not null), show the children (protected page)
  // Otherwise, redirect to the /login page
  return currentUser ? children : <Navigate to="/login" />;
};

// --- App Component ---
// This is your main application component where routes are defined.
function App() {
  return (
    <Router> {/* BrowserRouter wraps your entire application for routing */}
      <Routes> {/* Routes defines the different paths and the components to render */}

        {/* Public Routes - Accessible to anyone, logged in or not */}
        <Route path="/" element={<LandingPage />} /> {/* Shows LandingPage when URL is just "/" */}
        <Route path="/signup" element={<Signup />} /> {/* Shows Signup component for "/signup" */}
        <Route path="/login" element={<Login />} />   {/* Shows Login component for "/login" */}

        {/* Protected Routes - Only accessible if the user is logged in */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute> {/* Use PrivateRoute to protect the Dashboard */}
              <FoodGallery />
            </PrivateRoute>
          }
        />
        {/* You can add more protected routes here following the same pattern */}

{/* Fallback Route - For any path that doesn't match above (e.g., a 404 Not Found page) */}
        <Route path="*" element={<h1 className="text-center text-4xl mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

// Export the App component so it can be used in main.jsx (or index.js)
export default App;