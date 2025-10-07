import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Sparkles, Shield } from 'lucide-react';

const ValuePropCard = ({ IconComponent, title, description, stat, statLabel, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        {/* Card */}
        <div className="relative h-full bg-black rounded-[32px] p-12 overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
          {/* Animated gradient background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          </div>
          
          {/* Light beam effect */}
          <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent"></div>
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                {React.createElement(IconComponent, { 
                  className: "w-8 h-8 text-white", 
                  strokeWidth: 1.5 
                })}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-4xl font-medium text-white mb-6 leading-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
              {description}
            </p>

            {/* Stat */}
            <div className="pt-8 border-t border-white/10">
              <div className="text-5xl font-semibold text-white mb-2">{stat}</div>
              <div className="text-base text-gray-500 font-light uppercase tracking-wider">{statLabel}</div>
            </div>
          </div>

          {/* Glow effect on bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  );
};

export default function ValuePropsSection() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    cardsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Removed parallax scroll listener to match minimal aesthetic

  const valueProps = [
    {
      icon: MapPin,
      title: "Local expertise",
      description: "Deep neighborhood insights and market intelligence that only comes from years of experience.",
      stat: "15+",
      statLabel: "Years Experience"
    },
    {
      icon: Sparkles,
      title: "Smart technology",
      description: "AI-powered tools and analytics that give you the competitive edge in today's market.",
      stat: "50K+",
      statLabel: "Properties Analyzed"
    },
    {
      icon: Shield,
      title: "Client first",
      description: "Dedicated support and personalized service that puts your goals at the center of everything.",
      stat: "98%",
      statLabel: "Satisfaction Rate"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-black py-40 px-6 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; font-weight: 300; letter-spacing: 0.02em; }
        .font-body { font-family: 'Inter', -apple-system, system-ui, sans-serif; letter-spacing: 0.03em; }
      `}</style>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-28">
          <div className="text-white/30 text-xs font-body tracking-[0.3em]">01</div>
          <h2 className="mt-4 text-6xl md:text-8xl font-display text-white tracking-tight leading-[0.95]">
            Experience the Difference
          </h2>
          <p className="mt-6 text-lg md:text-2xl text-white/55 font-body max-w-3xl mx-auto leading-relaxed">
            Three pillars that set us apart in the real estate industry
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
            >
              <ValuePropCard
                IconComponent={prop.icon}
                title={prop.title}
                description={prop.description}
                stat={prop.stat}
                statLabel={prop.statLabel}
                index={index}
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-28 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-[10px] font-body tracking-[0.25em] uppercase hover:bg-white/95 transition-colors duration-300">
            See What We Can Do For You
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}