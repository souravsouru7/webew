import React from 'react';

export default function ArchitectureServices() {
  const services = [
    {
      number: "01",
      title: "PROPERTY SHOWCASE",
      description: "Showcase a project visuals that attracts each person to manage extensive.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    },
    {
      number: "02",
      title: "SITE PLANNING",
      description: "A plan defined layouts that establishes harmonies with the natural landscape.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop"
    },
    {
      number: "03",
      title: "BUILDING DESIGN",
      description: "Designing a modern building from function and sophistication.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
    },
    {
      number: "04",
      title: "SPACE PLANNING",
      description: "Optimizing interior design that for form, balance, and quiet luxury.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black px-6 py-16">
      {/* Top Button */}
      <div className="max-w-7xl mx-auto mb-12">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold px-8 py-3 rounded-full text-sm tracking-wide transition-colors">
          MODERN ARCHITECTURE DESIGN
        </button>
      </div>

      {/* Main Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-white text-[7rem] font-black tracking-tighter leading-[0.85] -ml-1">
          OUR SERVICES
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            {/* Service Number */}
            <h2 className="text-white text-6xl font-black mb-4 tracking-tighter leading-[0.8]">
              {service.number}
            </h2>

            {/* Service Title */}
            <h3 className="text-white text-lg font-bold mb-4 tracking-[0.2em] uppercase">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Decorative Elements */}
      <div className="max-w-7xl mx-auto mt-16 flex justify-end">
        <div className="relative">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="opacity-80">
            <path d="M0 30 Q 60 0, 120 30" stroke="#22d3ee" strokeWidth="3" fill="none"/>
            <path d="M0 40 Q 60 10, 120 40" stroke="#22d3ee" strokeWidth="3" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
}