import React, { useState } from 'react';
import { Search, User, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: "SAINT ANTÖNIEN",
    subtitle: "Switzerland Alps",
    description: "Missed adventure within an arctic expedition towards Antartica. Mountain best can be predicted attractive even best locations.",
    buttonText: "DISCOVER LOCATION",
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
    cards: [
      {
        location: "Snow Land - Antarctica",
        title: "NAGANO PREFECTURE",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=500&fit=crop"
      },
      {
        location: "Sahara Desert - Morocco",
        title: "MARRAKECH MERZOUGA",
        image: "https://images.unsplash.com/photo-1509601762477-7327c36ae718?w=400&h=500&fit=crop"
      },
      {
        location: "Landscape - California National Park",
        title: "YOSEMITE NATIONAL PARK",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop"
      },
      {
        location: "Tigers - Costa Rica",
        title: "LOS LANCES BEACH",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop"
      }
    ]
  },
  {
    id: 2,
    title: "MOUNT FUJI",
    subtitle: "Japan",
    description: "Experience the majestic beauty of Japan's iconic mountain. Sacred peak offering breathtaking views and cultural significance.",
    buttonText: "DISCOVER LOCATION",
    bg: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&h=1080&fit=crop",
    cards: [
      {
        location: "Tokyo - Japan",
        title: "SHIBUYA CROSSING",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop"
      },
      {
        location: "Kyoto - Japan",
        title: "FUSHIMI INARI",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&h=500&fit=crop"
      },
      {
        location: "Hokkaido - Japan",
        title: "SAPPORO SNOW",
        image: "https://images.unsplash.com/photo-1583387838925-5f35163cdee5?w=400&h=500&fit=crop"
      },
      {
        location: "Osaka - Japan",
        title: "DOTONBORI NIGHT",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&h=500&fit=crop"
      }
    ]
  },
  {
    id: 3,
    title: "SANTORINI",
    subtitle: "Greece",
    description: "Discover the stunning white-washed buildings and blue domes. Mediterranean paradise with iconic sunset views and azure waters.",
    buttonText: "DISCOVER LOCATION",
    bg: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&h=1080&fit=crop",
    cards: [
      {
        location: "OIA - SANTORINI",
        title: "SUNSET VIEWS",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=500&fit=crop"
      },
      {
        location: "ATHENS - GREECE",
        title: "ACROPOLIS",
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=500&h=500&fit=crop"
      },
      {
        location: "MYKONOS - GREECE",
        title: "WINDMILLS",
        image: "https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=500&h=500&fit=crop"
      },
      {
        location: "CRETE - GREECE",
        title: "BALOS LAGOON",
        image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=500&h=500&fit=crop"
      }
    ]
  }
];

export default function GlobeExpress() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const current = destinations[currentIndex];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('left');
    setHoveredCard(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setSlideDirection('');
      setTimeout(() => setIsTransitioning(false), 100);
    }, 700);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection('right');
    setHoveredCard(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
      setSlideDirection('');
      setTimeout(() => setIsTransitioning(false), 100);
    }, 700);
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
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            backgroundImage: `url(${current.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isTransitioning ? 'scale(1.1)' : 'scale(1)',
            opacity: hoveredCard === null ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
        </div>

        {/* Hovered card backgrounds */}
        {current.cards.map((card, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: hoveredCard === index ? 1 : 0,
              transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1.1)',
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
          <span className="text-white font-bold text-xl tracking-widest">GLOBE EXPRESS</span>
        </div>
        
        <div className="flex items-center gap-12 text-white text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-yellow-400 transition-colors">HOME</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">HOLIDAYS</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">DESTINATIONS</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">PAGES</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">OFFERS</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">CONTACTS</a>
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
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-16">
          <div className="flex items-center justify-between gap-20">
            {/* Left Content */}
            <div 
              className={`text-white space-y-8 flex-shrink-0 transition-all duration-700 ${
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
              className={`flex gap-6 flex-shrink-0 transition-all duration-700 ${
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-[10px] opacity-70 mb-2 tracking-widest font-light uppercase">{card.location}</p>
                    <h3 className="font-bold text-lg leading-tight tracking-wide">{card.title}</h3>
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

      {/* Navigation Arrows */}
      <div className="absolute bottom-16 left-16 flex gap-4 z-50">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="w-14 h-14 border-2 border-white/80 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="w-14 h-14 border-2 border-white/80 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-16 right-16 z-50">
        <div 
          className={`text-white text-8xl font-black transition-all duration-700 ${
            isTransitioning ? 'opacity-0 scale-75' : 'opacity-40 scale-100'
          }`}
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          0{currentIndex + 1}
        </div>
      </div>

      {/* Decorative sparkle */}
      <div className="absolute bottom-24 right-52 w-12 h-12 pointer-events-none">
        <svg viewBox="0 0 50 50" className="w-full h-full text-white/30">
          <path d="M25 0 L27 23 L50 25 L27 27 L25 50 L23 27 L0 25 L23 23 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}