import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import peopleEating from "../assets/people-eating.jpg";
import CoverDomeLogo from "./CoverDomeLogo";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center p-8 bg-[#FE5D26]">
        <img
          src={peopleEating}
          alt="People eating"
          className="object-cover w-full h-2/3 rounded-xl mb-6"
        />
        <div className="text-2xl font-bold text-white mb-2 text-center">
          Savoring Life One Bite at a Time.
        </div>
        <div className="text-white text-center max-w-md">
          Food is not just nourishment but a connection to people, places and memories that make life delicious.
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-leftside">
        <div className="flex items-center mb-2">
          <div className="flex flex-col items-center mr-2">
            <CoverDomeLogo className="h-12 w-12 mb-1" size={48} />
            <span className="font-bold text-[#FE5D26] text-lg">AB</span>
          </div>
          <span className="font-extrabold text-2xl text-[#FE5D26] tracking-widest">
            AFRIBITE
          </span>
        </div>
        <div className="mb-1 text-black text-lg font-semibold">
          Good to see you again.
        </div>
        <div className="mb-4 text-gray-700">
          Please enter with your right details
        </div>
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mb-4 px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mb-2 px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Remember me
            </label>
            <Link
              to="#"
              className="text-sm text-[#FE5D26] hover:underline ml-2"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition font-bold mb-4"
          >
            Login
          </button>
          <div className="mt-2 mb-2 text-gray-500 text-center">
            or continue with
          </div>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center mb-4 px-4 py-2 bg-white rounded-full shadow border hover:bg-gray-100 transition w-full"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            <span className="text-gray-700 font-medium">
              Login with Google
            </span>
          </button>
          <div className="text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#FE5D26] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;