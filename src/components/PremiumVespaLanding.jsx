import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, User } from 'lucide-react';

export default function PremiumVespaLanding() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-8">
        <div className="flex items-center gap-16">
          <div className="text-3xl font-bold tracking-tight">LS</div>
          <div className="flex gap-12 text-base">
            <a href="#" className="text-gray-500 hover:text-black transition">Home</a>
            <a href="#" className="text-black font-semibold border-b-2 border-black pb-1">Villas</a>
            <a href="#" className="text-gray-500 hover:text-black transition">Manor</a>
          </div>
        </div>
        <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition">
          Contact Us
          <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </button>
      </nav>

      <div className="flex min-h-screen">
        {/* Left Section - 45% */}
        <div className="w-[45%] bg-white flex flex-col justify-between px-12 pt-32 pb-12">
          <div>
            {/* Heading with avatars */}
            <div className="mb-8">
              <h1 className="text-7xl font-normal leading-tight tracking-tight mb-2">
                Reserve Your
              </h1>
              <div className="flex items-center gap-4">
                <h1 className="text-7xl font-normal leading-tight tracking-tight">
                  Ideal Holiday
                </h1>
                <div className="flex">
                  <div className="w-14 h-14 rounded-full bg-orange-200 border-4 border-white -mr-3 z-30"></div>
                  <div className="w-14 h-14 rounded-full bg-blue-300 border-4 border-white -mr-3 z-20"></div>
                  <div className="w-14 h-14 rounded-full bg-pink-200 border-4 border-white z-10"></div>
                </div>
              </div>
            </div>

            <p className="text-xl font-semibold mb-10">Let's get acquainted!</p>

            {/* Description with button */}
            <div className="flex gap-6 mb-16">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                49
              </div>
              <p className="text-gray-600 text-base leading-relaxed flex-1">
                We specialize in curating exceptional villa rentals, providing an unparalleled level of comfort, privacy, and convenience for your dream vacation.
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition flex-shrink-0 h-fit">
                More <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-16 mb-12">
              <div>
                <div className="text-5xl font-light mb-2">115k+</div>
                <div className="text-sm text-gray-600">Capital Raised</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">70k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">47K+</div>
                <div className="text-sm text-gray-600">Property Options</div>
              </div>
            </div>
          </div>

          {/* Featured Property Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&h=500&fit=crop" 
              alt="Villa" 
              className="w-full h-72 object-cover"
            />
            <div className="absolute top-5 left-5 bg-pink-50 px-4 py-2 rounded-full text-sm font-medium">
              Vancouver, Canada
            </div>
            <div className="absolute top-5 right-5 flex gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
              <div className="flex text-yellow-400">★★★★★</div>
              <span>Popular</span>
            </div>
          </div>
        </div>

        {/* Right Section - 55% */}
        <div className="w-[55%] relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=1800&fit=crop" 
            alt="Modern Villa" 
            className="w-full h-full object-cover"
          />
          
          {/* Location Badge */}
          <div className="absolute top-8 left-8 flex items-center gap-4 bg-white rounded-2xl shadow-xl p-4">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=120&h=120&fit=crop" 
              alt="Property" 
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <div className="text-base font-semibold">Melbourne VIC,</div>
              <div className="text-sm text-gray-600">Australia</div>
            </div>
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center ml-2">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Bottom Content Card */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90%]">
            <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-10 text-white">
              <p className="text-base mb-8 leading-relaxed">
                Enjoy a luxurious Melbourne vacation in a villa with breathtaking city views and easy access to the vibrant city life and culinary delights.
              </p>
              
              <div className="flex items-center gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 text-base font-medium hover:bg-gray-100 transition">
                  Select Type
                  <ChevronDown className="w-5 h-5" />
                </button>
                
                <button className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 text-base font-medium hover:bg-gray-100 transition">
                  Location
                  <ChevronDown className="w-5 h-5" />
                </button>
                
                <button className="bg-white text-black px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition ml-auto">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Star */}
          <div className="absolute bottom-44 right-16 text-8xl text-white/60">
            ✦
          </div>
        </div>
      </div>
    </div>
  );
}