import React from 'react';
import amazonLogo from '../assets/amazon.webp';
import google from "../assets/Google.webp";
import microsoft from '../assets/microsoft.webp';
import meta from '../assets/meta.webp'
import Navbar from './Navbar';

function Header() {
  return (
    <>
    <Navbar></Navbar>
    <header className="bg-gradient-to-r from-red-600 to-emerald-400 shadow-md">
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col items-center">
        {/* Logos Row */}
        <div className="flex items-center justify-center gap-8 mb-3">
            <img src={meta} alt="meta" className="w-12 h-12 rounded-full shadow bg-white p-1" />
          <img src={google} alt="Google logo" className="w-12 h-12 rounded-full shadow bg-white p-1" />
          <img src={amazonLogo} alt="Amazon logo" className="w-14 h-14 rounded-full shadow bg-white p-1 scale-110" />
          <img src={microsoft} alt="Microsoft logo" className="w-12 h-12 rounded-full shadow bg-white p-1" />
        </div>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow mb-2 tracking-tight">
          FAANG Offer Predictor
        </h1>
        {/* Subtitle */}
        <p className="text-base sm:text-lg text-blue-50 mb-1 text-center max-w-2xl font-medium">
          Discover your chances of landing a job at top tech companies based on your coding and academic profile.
        </p>
      </div>
    </header>
    
    </>
  );
}

export default Header;