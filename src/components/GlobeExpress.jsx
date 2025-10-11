import React, { useState, useEffect } from 'react';
import { Search, User, ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "BURJ KHALIFA",
    subtitle: "Downtown Dubai",
    description: "Luxury living in the heart of Dubai's most prestigious district. Experience world-class amenities and breathtaking city views from the world's tallest building.",
    buttonText: "VIEW PROPERTY",
    price: "AED 15,000,000",
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop&q=80",
    cards: [
      {
        location: "Palm Jumeirah - Dubai",
        title: "OCEAN VILLA",
        price: "AED 8,500,000",
        size: "4,200 sqft",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Dubai Marina - Dubai",
        title: "MARINA PENTHOUSE",
        price: "AED 12,000,000",
        size: "3,800 sqft",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Jumeirah Beach - Dubai",
        title: "BEACHFRONT VILLA",
        price: "AED 18,000,000",
        size: "5,500 sqft",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Business Bay - Dubai",
        title: "SKY VILLA",
        price: "AED 6,500,000",
        size: "2,800 sqft",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop&q=80"
      }
    ]
  },
  {
    id: 2,
    title: "EMIRATES HILLS",
    subtitle: "Dubai Hills",
    description: "Exclusive gated community offering luxury villas with private gardens, world-class golf courses, and premium lifestyle amenities in the heart of Dubai.",
    buttonText: "VIEW PROPERTY",
    price: "AED 25,000,000",
    bg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&q=80",
    cards: [
      {
        location: "Emirates Hills - Dubai",
        title: "GOLF VILLA",
        price: "AED 22,000,000",
        size: "6,200 sqft",
        bedrooms: 7,
        bathrooms: 6,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Dubai Hills - Dubai",
        title: "HILLS MANSION",
        price: "AED 28,000,000",
        size: "8,500 sqft",
        bedrooms: 8,
        bathrooms: 7,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Arabian Ranches - Dubai",
        title: "RANCH VILLA",
        price: "AED 15,000,000",
        size: "4,800 sqft",
        bedrooms: 5,
        bathrooms: 4,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Jumeirah Islands - Dubai",
        title: "ISLAND VILLA",
        price: "AED 19,500,000",
        size: "5,200 sqft",
        bedrooms: 6,
        bathrooms: 5,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop&q=80"
      }
    ]
  },
  {
    id: 3,
    title: "DUBAI CREEK",
    subtitle: "Old Dubai",
    description: "Historic waterfront properties combining traditional Arabian architecture with modern luxury. Experience the authentic charm of old Dubai with contemporary amenities.",
    buttonText: "VIEW PROPERTY",
    price: "AED 9,500,000",
    bg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&fit=crop&q=80",
    cards: [
      {
        location: "Dubai Creek - Dubai",
        title: "CREEK PENTHOUSE",
        price: "AED 8,500,000",
        size: "3,200 sqft",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Deira - Dubai",
        title: "HERITAGE VILLA",
        price: "AED 6,800,000",
        size: "2,800 sqft",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Bur Dubai - Dubai",
        title: "CULTURAL VILLA",
        price: "AED 7,200,000",
        size: "3,000 sqft",
        bedrooms: 4,
        bathrooms: 3,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop&q=80"
      },
      {
        location: "Al Fahidi - Dubai",
        title: "TRADITIONAL HOUSE",
        price: "AED 5,500,000",
        size: "2,200 sqft",
        bedrooms: 3,
        bathrooms: 2,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop&q=80"
      }
    ]
  }
];

export default function DubaiRealEstate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const current = properties[currentIndex];

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = properties.flatMap(property => [
        property.bg,
        ...property.cards.map(card => card.image)
      ]).map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises).catch(() => {}); // Continue even if some images fail
    };

    preloadImages();
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    setHoveredCard(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % properties.length);
      setSlideDirection('');
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    setHoveredCard(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
      setSlideDirection('');
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  };

  const handleCardHover = (index) => {
    if (!isTransitioning) {
      setHoveredCard(index);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Images Stack */}
      <div className="absolute inset-0">
        {/* Main background */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(${current.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isTransitioning ? 'scale(1.05)' : 'scale(1)',
            opacity: hoveredCard === null ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
        </div>

        {/* Hovered card backgrounds */}
        {current.cards.map((card, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: hoveredCard === index ? 1 : 0,
              transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1.05)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-white font-bold text-xl tracking-widest">DUBAI LUXURY</span>
        </div>
        
        <div className="flex items-center gap-12 text-white text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-yellow-400 transition-colors">HOME</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">PROPERTIES</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">LOCATIONS</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">SERVICES</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">INVESTMENT</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">CONTACT</a>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-white hover:text-yellow-400 transition-colors">
            <Search size={22} />
          </button>
          <button className="text-white hover:text-yellow-400 transition-colors">
            <User size={22} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center pb-32 pt-40">
        <div className="w-full px-16">
          <div className="flex items-center justify-between gap-20">
            {/* Left Content */}
            <div 
              className={`text-white space-y-8 flex-shrink-0 transition-all duration-500 ${
                isTransitioning 
                  ? slideDirection === 'left' 
                    ? 'opacity-0 -translate-x-20' 
                    : 'opacity-0 translate-x-20'
                  : 'opacity-100 translate-x-0'
              }`}
              style={{ width: '500px' }}
            >
              <div className="space-y-3">
                <p className="text-sm tracking-[0.3em] opacity-90 font-light">{current.subtitle}</p>
                <h1 className="text-[7rem] font-black tracking-tighter leading-[0.85] -ml-1">
                  {current.title}
                </h1>
                <div className="text-3xl font-bold text-yellow-400 mt-4">
                  {current.price}
                </div>
              </div>
              
              <p className="text-base opacity-80 leading-relaxed font-light">
                {current.description}
              </p>

              <button className="group flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                  <ChevronRight size={18} className="text-yellow-400" />
                </span>
                <span className="tracking-[0.15em] text-sm font-bold">{current.buttonText}</span>
              </button>
            </div>

            {/* Right Content - Cards */}
            <div 
              className={`flex gap-6 flex-shrink-0 transition-all duration-500 mb-8 ${
                isTransitioning 
                  ? slideDirection === 'left' 
                    ? 'opacity-0 translate-x-20' 
                    : 'opacity-0 -translate-x-20'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              {current.cards.map((card, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-4"
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    width: '240px',
                    height: '320px',
                    transitionDelay: `${index * 80}ms`
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-[10px] opacity-70 mb-2 tracking-widest font-light uppercase flex items-center gap-1">
                      <MapPin size={10} />
                      {card.location}
                    </p>
                    <h3 className="font-bold text-lg leading-tight tracking-wide mb-2">{card.title}</h3>
                    <div className="text-yellow-400 font-bold text-lg mb-3">{card.price}</div>
                    <div className="flex items-center gap-4 text-xs opacity-80">
                      <div className="flex items-center gap-1">
                        <Bed size={12} />
                        <span>{card.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath size={12} />
                        <span>{card.bathrooms}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square size={12} />
                        <span>{card.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect border glow */}
                  <div className="absolute inset-0 border-[3px] border-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl shadow-[0_0_25px_rgba(250,204,21,0.6)]"></div>
                  
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Classic Centered */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-8 z-[60]">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="group relative w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          <ChevronLeft size={24} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="group relative w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          <ChevronRight size={24} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-20 right-20 z-[60]">
        <div 
          className={`text-white text-8xl font-black transition-all duration-500 ${
            isTransitioning ? 'opacity-0 scale-75' : 'opacity-50 scale-100'
          }`}
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          0{currentIndex + 1}
        </div>
      </div>

      {/* Decorative sparkle */}
      <div className="absolute bottom-32 right-60 w-12 h-12 pointer-events-none z-[55]">
        <svg viewBox="0 0 50 50" className="w-full h-full text-white/30">
          <path d="M25 0 L27 23 L50 25 L27 27 L25 50 L23 27 L0 25 L23 23 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}