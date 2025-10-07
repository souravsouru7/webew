import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ArchHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1920&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-12 py-8">
        <div className={`text-white text-2xl font-bold tracking-wider transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          go.arch
        </div>
        <div className={`flex gap-10 text-white text-sm tracking-widest transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">HOME</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">ABOUT US</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">PROJECTS</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">BLOG</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">CONTACTS</a>
        </div>
      </nav>

      {/* Left Side Number */}
      <div className={`absolute left-12 top-32 z-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-gray-500 text-xs tracking-widest mb-2">/ 03</div>
        <div className="text-amber-400 text-7xl font-light tracking-wider">01</div>
      </div>

      {/* Vertical Text */}
      <div className={`absolute left-12 top-1/2 -translate-y-1/2 z-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col gap-4">
          {['●', '●', '●'].map((dot, i) => (
            <div key={i} className="text-gray-600 text-xs">{dot}</div>
          ))}
        </div>
        <div className="mt-8 text-white text-xs tracking-widest transform -rotate-90 origin-left whitespace-nowrap translate-y-32">
          ARCHITECTURE + DESIGN
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className={`max-w-4xl px-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-gray-400 text-sm tracking-widest mb-4">2020 — BROOKLYN</div>
          <h1 className="text-white text-6xl md:text-7xl font-light tracking-wider mb-6 leading-tight">
            CONCERT HALL IN NEW YORK
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mb-8 leading-relaxed">
            Concert Hall is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication
          </p>
          <button className="group bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 text-sm tracking-widest font-medium transition-all duration-300 flex items-center gap-2">
            LOOK MORE
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className={`absolute left-12 bottom-12 z-20 flex flex-col gap-6 text-white text-sm transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300">IG</a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300">TW</a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300">BE</a>
        <a href="#" className="hover:text-amber-400 transition-colors duration-300">FB</a>
      </div>

      {/* Decorative Lines */}
      <div className={`absolute top-1/4 right-1/4 w-64 h-64 border border-amber-400/20 transform rotate-45 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
      <div className={`absolute bottom-1/4 right-1/3 w-48 h-48 border border-amber-400/10 transform -rotate-12 transition-all duration-1500 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
    </div>
  );
}