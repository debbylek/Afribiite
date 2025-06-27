import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import peopleEating from "../assets/people-eating.jpg";
import CoverDomeLogo from "./CoverDomeLogo";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName,
        email,
        category,
        createdAt: new Date()
      });
      setError("");
      setSuccess("Signup successful! Redirecting to login page...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setSuccess("");
      let friendlyMessage = err.message;
      if (err.code === "auth/email-already-in-use") {
        friendlyMessage = "This email is already registered. Please log in or use a different email.";
      } else if (err.code === "auth/invalid-email") {
        friendlyMessage = "The email address is invalid.";
      } else if (err.code === "auth/weak-password") {
        friendlyMessage = "Password should be at least 6 characters.";
      }
      setError(friendlyMessage + (err.code ? ` (Error code: ${err.code})` : ""));
    }
  };

  const handleGoogleSignup = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await setDoc(doc(db, "users", result.user.uid), {
        fullName: result.user.displayName || "",
        email: result.user.email,
        category: "",
        createdAt: new Date()
      });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#FE5D26]">
        <img
          src={peopleEating}
          alt="People eating"
          className="object-cover w-4/5 h-4/5 rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-leftside">
        <div className="flex items-center mb-2">
          <div className="flex flex-col items-center mr-2">
            <CoverDomeLogo className="h-12 w-12 mb-1" size={48} />
            <span className="font-bold text-[#FE5D26] text-lg">AB</span>
          </div>
          <span className="font-extrabold text-2xl text-[#FE5D26] tracking-widest">AFRIBITE</span>
        </div>
        <div className="mb-2 text-black text-lg font-semibold">Glad to have you onboard</div>
        <div className="mb-6 text-gray-700">Sign up to have an account with us</div>
        <form onSubmit={handleSignup} className="w-full max-w-md bg-white rounded-xl shadow p-8">
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && <div className="mb-4 text-green-600 font-semibold">{success}</div>}
          <label className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            disabled={!!success}
          />
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={!!success}
          />
          <label className="block mb-1 font-medium text-gray-700">Category</label>
          <select
            className="w-full mb-4 px-4 py-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            disabled={!!success}
          >
            <option value="">Select your category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mb-6 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={!!success}
          />
          <button
            type="submit"
            className="w-full bg-[#FE5D26] text-white py-2 rounded hover:bg-orange-600 transition font-bold"
            disabled={!!success}
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-gray-500">or continue with</div>
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex items-center mt-2 mb-4 px-4 py-2 bg-white rounded-full shadow border hover:bg-gray-100 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>
        <div className="text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FE5D26] font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;