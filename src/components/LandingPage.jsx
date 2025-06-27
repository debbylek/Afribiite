import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import foodImg from "../assets/food.jpg";
import CoverDomeLogo from "./CoverDomeLogo";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [specialsOpen, setSpecialsOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuRef = useRef(null);
  const specialsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        specialsRef.current &&
        !specialsRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setSpecialsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileNavOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white shadow">
        <div className="flex items-center gap-2">
          <CoverDomeLogo className="h-10 w-10" size={40} />
          <span className="font-bold text-[#FE5D26] text-lg">AB</span>
          <span className="font-extrabold text-2xl text-[#FE5D26] tracking-widest">AFRIBITE</span>
        </div>
        <button onClick={() => setMobileNavOpen((open) => !open)} className="text-3xl focus:outline-none">☰</button>
      </div>
      {mobileNavOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50" onClick={() => setMobileNavOpen(false)}>
          <div className="bg-white w-3/4 max-w-xs h-full p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
            <a href="#" className="text-black hover:text-orange-500 font-medium">Home</a>
            <button onClick={() => setMenuOpen((open) => !open)} className="text-black hover:text-orange-500 font-medium flex items-center">Menu <span className="ml-1">&#9662;</span></button>
            {menuOpen && (
              <div className="flex flex-col ml-4">
                <Link to="#" className="block px-2 py-1 hover:bg-orange-100">Breakfast</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-orange-100">Lunch</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-orange-100">Dinner</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-orange-100">Desert</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-orange-100">Drinks</Link>
              </div>
            )}
            <button onClick={() => setSpecialsOpen((open) => !open)} className="text-black hover:text-orange-500 font-medium flex items-center">Specials <span className="ml-1">&#9662;</span></button>
            {specialsOpen && (
              <div className="flex flex-col ml-4">
                <a href="#" className="block px-2 py-1 hover:bg-orange-100">Today</a>
                <a href="#" className="block px-2 py-1 hover:bg-orange-100">This Week</a>
              </div>
            )}
            <a href="#" className="text-black hover:text-orange-500 font-medium">Locations</a>
            <a href="#" className="text-black hover:text-orange-500 font-medium">About Us</a>
            <Link to="#" className="bg-[#FE5D26] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition">Login/Sign Up</Link>
            <div className="flex items-center space-x-1 text-black font-medium">
              <span role="img" aria-label="cart" className="mr-1">🛒</span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      )}
      <div className="landing-main flex flex-1 flex-col lg:flex-row relative">
        <div className="landing-left flex-1 flex flex-col pt-8 px-12 bg-leftside h-full min-h-screen">
          <div className="landing-nav relative flex flex-row flex-nowrap items-center gap-4 mb-12 w-full mt-4 hidden lg:flex">
            <div className="flex flex-col items-center mr-3">
              <CoverDomeLogo className="h-12 w-12 mb-1" size={48} />
              <span className="font-bold text-orange-500 text-base leading-none">AB</span>
            </div>
            <span className="font-extrabold text-3xl text-orange-500 tracking-widest self-center">
              AFRIBITE
            </span>
            <a href="#" className="text-black hover:text-orange-500 font-medium whitespace-nowrap">Home</a>
            <div className="relative whitespace-nowrap" ref={menuRef}>
              <button
                className="text-black hover:text-orange-500 font-medium flex items-center focus:outline-none"
                onClick={() => {
                  setMenuOpen((open) => !open);
                  setSpecialsOpen(false);
                }}
                tabIndex={0}
              >
                Menu <span className="ml-1">&#9662;</span>
              </button>
              {menuOpen && (
                <div className="absolute left-0 top-full mt-2 w-32 bg-white shadow-lg rounded z-50">
                  <Link to="#" className="block px-4 py-2 hover:bg-orange-100">Breakfast</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-orange-100">Lunch</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-orange-100">Dinner</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-orange-100">Desert</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-orange-100">Drinks</Link>
                </div>
              )}
            </div>
            <div className="relative whitespace-nowrap" ref={specialsRef}>
              <button
                className="text-black hover:text-orange-500 font-medium flex items-center focus:outline-none"
                onClick={() => {
                  setSpecialsOpen((open) => !open);
                  setMenuOpen(false);
                }}
                tabIndex={0}
              >
                Specials <span className="ml-1">&#9662;</span>
              </button>
              {specialsOpen && (
                <div className="absolute left-0 top-full mt-2 w-32 bg-white shadow-lg rounded z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-orange-100">Today</a>
                  <a href="#" className="block px-4 py-2 hover:bg-orange-100">This Week</a>
                </div>
              )}
            </div>
            <a href="#" className="text-black hover:text-orange-500 font-medium whitespace-nowrap">Locations</a>
            <a href="#" className="text-black hover:text-orange-500 font-medium whitespace-nowrap">About Us</a>
            <Link to="#" className="bg-[#FE5D26] text-white font-semibold whitespace-nowrap px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition">Login/Sign Up</Link>
            <div className="flex items-center space-x-1 text-black font-medium">
              <span role="img" aria-label="cart" className="mr-1">🛒</span>
              <span>Cart</span>
            </div>
          </div>
          <div className="mt-48">
            <h1 className="landing-title text-4xl font-bold mb-8 text-orange-600">Discover people & places through food</h1>
            <p className="mb-12 text-lg text-gray-700">
              Join a community of foodies, explore local eats, and make every meal unforgettable.
            </p>
            <Link to="/signup">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition mb-8">
                Make your order now
              </button>
            </Link>
          </div>
        </div>
        <div className="landing-right flex-1 flex flex-col items-center justify-start relative px-12 bg-rightside">
          <input
            type="text"
            placeholder="What would you like to eat?"
            className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 mt-8 mb-8 shadow"
          />
          <img
            src={foodImg}
            alt="Chicken and Salad"
            className="landing-img w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;




