import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const FeaturedListings = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&h=700&fit=crop",
      title: "MODERN LUXURY VILLA",
      location: "Beverly Hills, California",
      description: "Architectural masterpiece featuring five bedrooms and four baths across 4,500 square feet. Experience unparalleled luxury with designer interiors, premium finishes, and panoramic city views.",
      price: "$4,250,000",
      beds: 5,
      baths: 4,
      sqft: "4,500",
      year: 2023
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=700&fit=crop",
      title: "CONTEMPORARY LOFT",
      location: "Manhattan, New York",
      description: "Urban sophistication in the heart of downtown. This three-bedroom loft spans 2,100 square feet with floor-to-ceiling windows and cutting-edge smart home technology.",
      price: "$2,890,000",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      year: 2022
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=700&fit=crop",
      title: "BEACHFRONT PARADISE",
      location: "Malibu, California",
      description: "Exclusive oceanfront estate with six bedrooms and five baths. Direct beach access, infinity pool, and breathtaking Pacific Ocean views from every room.",
      price: "$6,750,000",
      beds: 6,
      baths: 5,
      sqft: "5,800",
      year: 2024
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=700&fit=crop",
      title: "MOUNTAIN ESTATE",
      location: "Aspen, Colorado",
      description: "Alpine retreat featuring five bedrooms across 4,900 square feet. Ski-in/ski-out access, private hot tub, and stunning mountain vistas throughout.",
      price: "$5,200,000",
      beds: 5,
      baths: 4,
      sqft: "4,900",
      year: 2023
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=700&fit=crop",
      title: "ELEGANT TOWNHOUSE",
      location: "Boston, Massachusetts",
      description: "Historic charm meets modern luxury in this four-bedroom townhouse. Original architectural details, chef's kitchen, and private rooftop terrace.",
      price: "$3,450,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      year: 2022
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=700&fit=crop",
      title: "WATERFRONT PENTHOUSE",
      location: "Miami, Florida",
      description: "Sky-high living with four bedrooms and panoramic bay views. Premium amenities include wine cellar, home theater, and private elevator access.",
      price: "$7,890,000",
      beds: 4,
      baths: 4,
      sqft: "3,800",
      year: 2024
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.9;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full bg-black py-20 md:py-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        .font-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        
        .font-body {
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          font-weight: 300;
          letter-spacing: 0.03em;
        }
        
        .font-numbers {
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          font-weight: 200;
          font-feature-settings: 'tnum';
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 md:mb-28">
          
          {/* Left Side - Number and Title */}
          <div className="space-y-8">
            <div className="text-white/30 text-xs font-body tracking-[0.3em] font-extralight">
              01
            </div>
            <h2 className="text-6xl md:text-8xl font-display text-white tracking-tight leading-[0.95] -ml-1">
              Featured<br/>Listings
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-loose max-w-md font-body pt-4">
              Exceptional properties curated for discerning clients. Each residence represents the pinnacle of architectural design and premium craftsmanship in the most sought-after locations.
            </p>
            <button className="flex items-center gap-3 text-white/80 text-[11px] font-body tracking-[0.25em] hover:text-white hover:gap-5 transition-all duration-500 group pt-6">
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-3 gap-12 items-end">
            <div className="space-y-3">
              <div className="text-6xl md:text-7xl font-numbers text-white tracking-tight">15</div>
              <div className="text-white/40 text-[10px] font-body tracking-[0.2em] uppercase leading-relaxed">
                years<br/>on market
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-6xl md:text-7xl font-numbers text-white tracking-tight">185</div>
              <div className="text-white/40 text-[10px] font-body tracking-[0.2em] uppercase leading-relaxed">
                unique<br/>projects
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-6xl md:text-7xl font-numbers text-white tracking-tight">+5</div>
              <div className="text-white/40 text-[10px] font-body tracking-[0.2em] uppercase leading-relaxed">
                architects<br/>in team
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots - Top Right */}
        <div className="flex justify-end gap-3 mb-10">
          {properties.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-white/15 hover:bg-white/50 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          
          {/* Navigation Arrows */}
          <div className="absolute -top-20 right-0 flex gap-4 z-10">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-all duration-400"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-white/30 hover:text-white transition-all duration-400"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1} />
            </button>
          </div>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="flex-shrink-0 w-[520px] md:w-[620px] group"
              >
                {/* Card Number */}
                <div className="text-white/20 text-[10px] font-body tracking-[0.3em] mb-6 font-extralight">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden mb-10">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700" />
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display text-white mb-4 tracking-wide leading-tight">
                      {property.title}
                    </h3>
                    <p className="text-white/45 text-sm font-body tracking-wide mb-6">
                      {property.location}
                    </p>
                    <p className="text-white/50 text-[15px] leading-loose font-body max-w-lg">
                      {property.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-10 text-[10px] text-white/35 font-body tracking-[0.2em] uppercase py-7 border-t border-b border-white/[0.06]">
                    <span>{property.beds} BED</span>
                    <span>{property.baths} BATH</span>
                    <span>{property.sqft} SQFT</span>
                    <span>{property.year}</span>
                  </div>

                  <div className="flex items-center justify-between pt-6">
                    <span className="text-4xl md:text-5xl font-numbers text-white tracking-tight">
                      {property.price}
                    </span>
                    <button className="px-10 py-4 bg-white text-black text-[10px] font-body font-medium tracking-[0.25em] uppercase hover:bg-white/95 transition-all duration-400 border border-white/10">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FeaturedListings;