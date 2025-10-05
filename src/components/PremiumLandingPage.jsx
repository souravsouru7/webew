import React, { useState, useEffect, useRef } from 'react';

export default function PremiumLandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  const sections = [
    {
      id: "hero",
      title: "Digital Excellence",
      subtitle: "Made in Dubai",
      description: "Transform your business with cutting-edge web solutions crafted by Webew",
      cta1: "Start Your Project",
      cta2: "View Our Work"
    },
    {
      id: "about",
      title: "About Webew",
      subtitle: "Dubai's Web Experts",
      description: "Leading IT company specializing in custom websites, web applications, and digital solutions for businesses across the UAE",
      cta1: "Our Story",
      cta2: "Why Choose Us"
    },
    {
      id: "services",
      title: "Our Services",
      subtitle: "Complete Web Solutions",
      description: "Custom Website Development • E-Commerce Platforms • Web Applications • UI/UX Design • Digital Marketing • Maintenance & Support",
      cta1: "Explore Services",
      cta2: "Request Quote"
    },
    {
      id: "technology",
      title: "Technologies",
      subtitle: "Modern Tech Stack",
      description: "React • Node.js • Next.js • WordPress • Shopify • AWS • Custom Development tailored to your business needs",
      cta1: "Tech Stack",
      cta2: "Our Process"
    },
    {
      id: "portfolio",
      title: "Our Portfolio",
      subtitle: "Success Stories",
      description: "Delivering exceptional web solutions for businesses in Dubai, UAE, and beyond. See how we've helped companies grow online",
      cta1: "View Projects",
      cta2: "Client Testimonials"
    },
    {
      id: "contact",
      title: "Let's Build Together",
      subtitle: "Based in Dubai",
      description: "Ready to elevate your digital presence? Contact Webew today for a free consultation and quote",
      cta1: "Get in Touch",
      cta2: "WhatsApp Us"
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

    const handleKeyDown = (e) => {
      if (isScrolling.current) return;
      
      if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        isScrolling.current = true;
        setCurrentIndex(prev => prev + 1);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        isScrolling.current = true;
        setCurrentIndex(prev => prev - 1);
        setTimeout(() => { isScrolling.current = false; }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, sections.length]);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80", // hero - tech/space
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80", // about - team
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", // services - office
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80", // technology
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80", // portfolio - charts
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"  // contact - minimal
  ];

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 px-4 sm:px-6 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-xl sm:text-2xl font-bold tracking-wider">webew</div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-white/80 text-sm">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  if (!isScrolling.current) {
                    setCurrentIndex(index);
                  }
                }}
                className={`hover:text-white transition-colors ${
                  currentIndex === index ? 'text-white font-semibold' : ''
                }`}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => {
              const nextIndex = (currentIndex + 1) % sections.length;
              if (!isScrolling.current) {
                setCurrentIndex(nextIndex);
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* BACKGROUND IMAGES - Crossfade between them */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: currentIndex === index ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
      ))}

      {/* CONTENT SECTIONS */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 pb-24 sm:pt-0 sm:pb-0">
        <div className="max-w-6xl w-full text-center">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 transition-opacity duration-1000 ease-out pt-20 pb-24 sm:pt-0 sm:pb-0"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                pointerEvents: currentIndex === index ? 'auto' : 'none'
              }}
            >
              <div className="max-w-5xl w-full">
                <div className="mb-3 sm:mb-4 text-white/60 text-xs sm:text-sm font-medium tracking-widest uppercase">
                  {section.id}
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-none px-2">
                  {section.title}
                </h1>
                
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white/90 font-light mb-4 sm:mb-6 px-2">
                  {section.subtitle}
                </p>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4">
                  <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl">
                    {section.cta1}
                  </button>
                  <button className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/20 transition-all transform hover:scale-105">
                    {section.cta2}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Navigation */}
      <div className="fixed right-3 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 sm:gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (!isScrolling.current) {
                setCurrentIndex(index);
              }
            }}
            className="group relative"
            aria-label={`Go to ${section.id}`}
          >
            <div
              className={`transition-all duration-500 rounded-full ${
                currentIndex === index 
                  ? 'w-2 h-8 sm:w-3 sm:h-12 bg-white' 
                  : 'w-2 h-2 sm:w-3 sm:h-3 bg-white/40 hover:bg-white/60'
              }`}
            />
            <span className="hidden md:block absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 bg-white text-black px-2 sm:px-3 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Scroll Hint */}
      {currentIndex < sections.length - 1 && (
        <div className="fixed bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="text-white/50 text-xs sm:text-sm mb-1 sm:mb-2 text-center font-medium">
            Scroll to explore
          </div>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}

      {/* Section Counter */}
      <div className="fixed bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-8 lg:left-10 z-20 text-white/60 text-xs sm:text-sm font-medium">
        <span className="text-white text-base sm:text-lg">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="mx-1 sm:mx-2">/</span>
        <span>{String(sections.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}