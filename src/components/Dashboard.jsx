import React from 'react';
import { auth } from '../firebaseConfig'; // Import auth to get user info or sign out
import { signOut } from 'firebase/auth'; // Import signOut function
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Dashboard() {
  const navigate = useNavigate();
  const currentUser = auth.currentUser; // Get current user info (if logged in)

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
<h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Your Dashboard, {currentUser ? currentUser.email : 'User'}!
        </h1>
        <p className="text-gray-600 mb-6">This is your private space where you can manage your orders and profile.</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
        >
          Log Out
        </button>
      </div>

      {/* You can add more content here later, like: */}
      {/* <section className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Recent Orders</h2>
        <p>No recent orders found.</p>
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">View All Orders</button>
      </section> */}

    </div>
  );
}

export default Dashboard;