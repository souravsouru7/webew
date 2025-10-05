import React, { useState, useEffect, useRef } from 'react';

export default function WebewLandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isScrolling = useRef(false);

  const sections = [
    {
      id: "hero",
      title: "Digital Excellence",
      subtitle: "Made in Dubai",
      description: "Transform your business with cutting-edge web solutions",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      id: "about",
      title: "About Webew",
      subtitle: "Dubai's Web Experts",
      description: "Leading IT company specializing in custom websites, web applications, and digital solutions",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      id: "services",
      title: "Our Services",
      subtitle: "Complete Solutions",
      description: "Website Development • E-Commerce • Web Apps • UI/UX Design • Digital Marketing",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      id: "technology",
      title: "Technologies",
      subtitle: "Modern Stack",
      description: "React • Node.js • Next.js • WordPress • Shopify • AWS",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      id: "portfolio",
      title: "Our Portfolio",
      subtitle: "Success Stories",
      description: "Delivering exceptional web solutions for businesses in Dubai, UAE, and beyond",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      id: "contact",
      title: "Let's Build Together",
      subtitle: "Based in Dubai",
      description: "Ready to elevate your digital presence? Contact us today",
      bgColor: "bg-white",
      textColor: "text-black"
    }
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, sections.length]);

  const currentSection = sections[currentIndex];
  const isWhiteBg = currentSection.bgColor === "bg-white";

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background with smooth transitions */}
      <div className={`absolute inset-0 transition-all duration-1000 ${currentSection.bgColor}`}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(${isWhiteBg ? '#000' : '#fff'} 1px, transparent 1px), linear-gradient(90deg, ${isWhiteBg ? '#000' : '#fff'} 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Minimal Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 sm:py-8 transition-colors duration-1000`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-1000 ${currentSection.textColor}`}>
            webew
          </div>
          
          <div className="hidden lg:flex items-center gap-12">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => !isScrolling.current && setCurrentIndex(index)}
                className={`text-sm font-medium transition-all duration-500 ${
                  currentIndex === index 
                    ? currentSection.textColor
                    : isWhiteBg ? 'text-black/40 hover:text-black/70' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </button>
            ))}
          </div>

          <button className={`hidden sm:block px-6 py-3 rounded-full border transition-all duration-500 text-sm font-medium ${
            isWhiteBg 
              ? 'border-black text-black hover:bg-black hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content with Parallax */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {sections.map((section, index) => {
          const distance = Math.abs(currentIndex - index);
          const isCurrent = currentIndex === index;
          const isPast = index < currentIndex;
          
          return (
            <div
              key={section.id}
              className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 transition-all duration-1000 ease-out"
              style={{
                opacity: isCurrent ? 1 : 0,
                transform: isCurrent 
                  ? 'translateY(0) scale(1)' 
                  : isPast 
                    ? `translateY(-${distance * 50}px) scale(${1 - distance * 0.1})`
                    : `translateY(${distance * 50}px) scale(${1 - distance * 0.1})`,
                pointerEvents: isCurrent ? 'auto' : 'none'
              }}
            >
              <div className="max-w-6xl w-full">
                {/* Eyebrow */}
                <div className={`mb-6 sm:mb-8 transition-colors duration-1000 ${
                  isWhiteBg ? 'text-black/50' : 'text-white/50'
                }`}>
                  <span className="text-sm sm:text-base font-medium tracking-widest uppercase">
                    {section.subtitle}
                  </span>
                </div>

                {/* Main Title - Huge and Bold */}
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 sm:mb-12 leading-none tracking-tighter transition-colors duration-1000 ${section.textColor}`}
                  style={{
                    transform: isCurrent ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), color 1s'
                  }}
                >
                  {section.title}
                </h1>

                {/* Description */}
                <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-12 sm:mb-16 max-w-4xl leading-snug transition-colors duration-1000 ${
                  isWhiteBg ? 'text-black/70' : 'text-white/70'
                }`}
                  style={{
                    transform: isCurrent ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'transform 1s 0.1s cubic-bezier(0.16, 1, 0.3, 1), color 1s'
                  }}
                >
                  {section.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                  style={{
                    transform: isCurrent ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'transform 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <button className={`px-10 py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 ${
                    isWhiteBg
                      ? 'bg-black text-white hover:bg-black/90'
                      : 'bg-white text-black hover:bg-white/90'
                  }`}>
                    Learn More
                  </button>
                  
                  <button className={`px-10 py-5 rounded-full border-2 text-base sm:text-lg font-semibold transition-all duration-300 ${
                    isWhiteBg
                      ? 'border-black text-black hover:bg-black hover:text-white'
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Minimal Progress Indicator - Side */}
      <div className="fixed right-8 sm:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => !isScrolling.current && setCurrentIndex(index)}
            className="group relative"
          >
            <div className={`w-1 rounded-full transition-all duration-500 ${
              currentIndex === index ? 'h-16 bg-current' : 'h-1 bg-current opacity-30'
            } ${currentSection.textColor}`}
            />
            
            {/* Tooltip */}
            <div className={`absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none ${
              isWhiteBg ? 'bg-black text-white' : 'bg-white text-black'
            } px-4 py-2 rounded-lg text-xs font-medium`}>
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </div>
          </button>
        ))}
      </div>

      {/* Page Number - Bottom */}
      <div className={`fixed bottom-8 sm:bottom-12 left-8 sm:left-12 z-20 text-lg sm:text-xl font-light transition-colors duration-1000 ${
        isWhiteBg ? 'text-black/50' : 'text-white/50'
      }`}>
        <span className={`font-semibold transition-colors duration-1000 ${currentSection.textColor}`}>
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="mx-3">/</span>
        <span>{String(sections.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll Indicator */}
      {currentIndex < sections.length - 1 && (
        <div className={`fixed bottom-8 sm:bottom-12 right-8 sm:right-12 z-20 flex flex-col items-center gap-3 transition-colors duration-1000 ${
          isWhiteBg ? 'text-black/40' : 'text-white/40'
        }`}>
          <div className="text-xs sm:text-sm font-medium tracking-wider">SCROLL</div>
          <div className="w-[2px] h-12 bg-current animate-pulse"></div>
        </div>
      )}

      {/* Floating Element - Parallax Effect */}
      <div 
        className={`fixed top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl transition-all duration-1000 pointer-events-none ${
          isWhiteBg ? 'bg-black/5' : 'bg-white/5'
        }`}
        style={{
          transform: `translateY(${currentIndex * -30}px) scale(${1 + currentIndex * 0.1})`
        }}
      />
    </div>
  );
}