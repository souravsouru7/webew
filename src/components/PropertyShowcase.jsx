import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PropertyShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const properties = [
    {
      id: 1,
      number: "01",
      title: "THE BLUE SKY HOME",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
      location: "Beverly Hills"
    },
    {
      id: 2,
      number: "02",
      title: "THE BLUE SKY HOME",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop",
      location: "Manhattan"
    },
    {
      id: 3,
      number: "03",
      title: "THE BLUE SKY HOME",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=1000&fit=crop",
      location: "Malibu"
    },
    {
      id: 4,
      number: "04",
      title: "THE BLUE SKY HOME",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
      location: "Aspen"
    }
  ];

  return (
    <div className="w-full bg-black py-20 md:py-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        
        .font-body {
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          letter-spacing: 0.05em;
        }
        .font-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
      `}</style>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="text-white/30 text-xs font-body tracking-[0.3em]">02</div>
          <h2 className="mt-4 text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.95]">
            Property Showcase
          </h2>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative aspect-[3/4] overflow-hidden bg-black group cursor-pointer"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  {/* Number */}
                  <div className="text-white/50 text-xs font-body font-extralight tracking-[0.3em] group-hover:text-white transition-colors duration-500">
                    {property.number}
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className={`
                    w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
                    transition-all duration-500 ease-out
                    ${hoveredCard === property.id 
                      ? 'opacity-100 scale-100 bg-white text-black' 
                      : 'opacity-0 scale-75 bg-transparent text-white'
                    }
                  `}>
                    <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className={`
                    text-2xl md:text-3xl text-white font-body font-light tracking-[0.08em] leading-tight
                    transition-all duration-500 ease-out
                    ${hoveredCard === property.id 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-2 opacity-90'
                    }
                  `}>
                    {property.title}
                  </h3>

                  {/* Location - Vertical Text */}
                  <div className={`
                    text-white/60 text-[10px] font-body font-extralight tracking-[0.3em] uppercase
                    transform origin-left
                    transition-all duration-700 ease-out
                    ${hoveredCard === property.id 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'
                    }
                  `}>
                    {property.location}
                  </div>

                  {/* View Details Link */}
                  <div className={`
                    flex items-center gap-2 text-white text-xs font-body tracking-[0.2em] uppercase
                    transition-all duration-500 ease-out
                    ${hoveredCard === property.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                    }
                  `}>
                    <span>View Details</span>
                    <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                  </div>
                </div>

                {/* Side Label - Vertical Text */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                  <span className={`
                    text-white/40 text-[9px] font-body font-extralight tracking-[0.4em] uppercase whitespace-nowrap
                    transition-all duration-500
                    ${hoveredCard === property.id ? 'opacity-100' : 'opacity-60'}
                  `}>
                    Premium Property
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`
                absolute inset-0 border-2 border-white pointer-events-none
                transition-all duration-500 ease-out
                ${hoveredCard === property.id 
                  ? 'opacity-20 scale-[0.97]' 
                  : 'opacity-0 scale-100'
                }
              `} />
            </div>
          ))}
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm font-body font-extralight tracking-wide">
            Discover our exclusive collection of premium properties
          </p>
          <button className="px-8 py-4 bg-white text-black text-[10px] font-body font-medium tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-400">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;


