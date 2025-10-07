import React, { useState, useEffect, useRef } from 'react';

export default function WebewLandingPage() {
  // Load premium fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&family=Space+Grotesk:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => document.head.removeChild(link);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  const sections = [
    {
      id: "hero",
      title: "webew",
      headline: "Crafting Digital Experiences",
      subheadline: "That Drive Results",
      description: "We build stunning websites and powerful web applications for businesses in Dubai and beyond",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80",
      overlay: "from-black/90 via-black/70 to-black/50"
    },
    {
      id: "about",
      title: "Who We Are",
      headline: "Dubai's Premier",
      subheadline: "Web Development Partner",
      description: "A team of passionate developers and designers creating exceptional digital solutions since 2020",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
      overlay: "from-indigo-950/90 via-indigo-900/70 to-blue-900/50"
    },
    {
      id: "services",
      title: "What We Do",
      headline: "End-to-End",
      subheadline: "Digital Solutions",
      description: "Custom Websites • E-Commerce Stores • Web Applications • Mobile Apps • UI/UX Design • SEO & Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
      overlay: "from-violet-950/90 via-purple-900/70 to-fuchsia-900/50"
    },
    {
      id: "technology",
      title: "Our Tech",
      headline: "Powered By",
      subheadline: "Modern Technology",
      description: "React • Next.js • Node.js • Python • AWS • WordPress • Shopify • Custom Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      overlay: "from-emerald-950/90 via-teal-900/70 to-cyan-900/50"
    },
    {
      id: "portfolio",
      title: "Our Work",
      headline: "Projects That",
      subheadline: "Make An Impact",
      description: "Trusted by leading brands across UAE to deliver world-class digital experiences",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
      overlay: "from-orange-950/90 via-amber-900/70 to-yellow-900/50"
    },
    {
      id: "contact",
      title: "Get Started",
      headline: "Let's Create",
      subheadline: "Something Amazing",
      description: "Ready to transform your digital presence? Schedule a free consultation with our team today",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
      overlay: "from-slate-950/90 via-gray-900/70 to-zinc-900/50"
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
      }, 1200);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, sections.length]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Parallax Background Images */}
      {sections.map((section, index) => {
        const distance = currentIndex - index;
        const isActive = currentIndex === index;
        const isPast = index < currentIndex;
        
        return (
          <div
            key={section.id}
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isPast 
                ? `scale(1.2) translateY(${distance * -100}px)` 
                : `scale(1) translateY(${distance * 50}px)`,
              zIndex: isActive ? 1 : 0
            }}
          >
            {/* Background Image with Parallax */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${section.image}')`,
                transform: `translateY(${currentIndex === index ? 0 : distance * 30}px) scale(${isActive ? 1 : 1.1})`,
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${section.overlay}`} />
            
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
              }}
            />
          </div>
        );
      })}

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 lg:px-20 py-6 sm:py-8">
        <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
          <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            webew
          </div>
          
          <div className="hidden lg:flex items-center gap-10 xl:gap-16">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => !isScrolling.current && setCurrentIndex(index)}
                className={`text-sm xl:text-base font-medium transition-all duration-300 ${
                  currentIndex === index 
                    ? 'text-white scale-110' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </button>
            ))}
          </div>

          <button className="hidden sm:block px-6 lg:px-8 py-3 lg:py-4 bg-white text-black text-sm lg:text-base font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
            Start Project
          </button>
        </nav>
      </header>

      {/* Main Content with Parallax */}
      <div className="relative z-10 h-full">
        {sections.map((section, index) => {
          const isActive = currentIndex === index;
          const distance = currentIndex - index;
          
          return (
            <div
              key={section.id}
              className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-20"
              style={{
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
                transition: 'opacity 0.8s ease-out'
              }}
            >
              <div className="max-w-[1600px] mx-auto w-full">
                <div className="max-w-4xl">
                  
                  {/* Small Title */}
                  <div 
                    className="mb-4 sm:mb-6 overflow-hidden"
                    style={{
                      transform: isActive ? 'translateY(0)' : 'translateY(100%)',
                      transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <span className="text-white/60 text-sm sm:text-base lg:text-lg font-semibold tracking-[0.3em] uppercase">
                      {section.title}
                    </span>
                  </div>

                  {/* Main Headline - Split animation */}
                  <div className="mb-3 sm:mb-4 overflow-hidden">
                    <h1 
                      className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        transform: isActive ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 1s 0.1s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {section.headline}
                    </h1>
                  </div>

                  <div className="mb-8 sm:mb-12 overflow-hidden">
                    <h2 
                      className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white/80 leading-none tracking-tighter"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        transform: isActive ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      {section.subheadline}
                    </h2>
                  </div>

                  {/* Description */}
                  <p 
                    className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-10 sm:mb-16 max-w-2xl font-light leading-relaxed"
                    style={{
                      transform: isActive ? 'translateY(0) translateX(0)' : 'translateY(30px) translateX(-30px)',
                      opacity: isActive ? 1 : 0,
                      transition: 'all 1s 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {section.description}
                  </p>

                  {/* CTA Buttons */}
                  <div 
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                    style={{
                      transform: isActive ? 'translateY(0)' : 'translateY(30px)',
                      opacity: isActive ? 1 : 0,
                      transition: 'all 1s 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <button className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-white text-black text-base sm:text-lg font-bold rounded-full overflow-hidden transition-transform hover:scale-105">
                      <span className="relative z-10">Explore More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                    
                    <button className="px-10 sm:px-12 py-4 sm:py-5 border-2 border-white text-white text-base sm:text-lg font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                      Get In Touch
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vertical Progress Bar - Left Side */}
      <div className="fixed left-6 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col items-center gap-6">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => !isScrolling.current && setCurrentIndex(index)}
              className="group relative flex items-center"
            >
              {/* Dot */}
              <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white transition-all duration-500 ${
                currentIndex === index ? 'bg-white scale-125' : 'bg-transparent scale-100'
              }`} />
              
              {/* Label on hover */}
              <div className="absolute left-8 bg-white text-black px-4 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Page Counter - Bottom Right */}
      <div className="fixed bottom-6 sm:bottom-8 lg:bottom-12 right-6 sm:right-8 lg:right-12 z-40 text-white">
        <div className="text-6xl sm:text-7xl lg:text-8xl font-black opacity-20">
          {String(currentIndex + 1).padStart(2, '0')}
        </div>
        <div className="text-sm sm:text-base text-white/60 text-right mt-2">
          of {sections.length}
        </div>
      </div>

      {/* Scroll Hint */}
      {currentIndex < sections.length - 1 && (
        <div className="fixed bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 animate-bounce">
          <div className="text-white/40 text-xs sm:text-sm font-medium tracking-widest">
            SCROLL DOWN
          </div>
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}

    </div>
  );
}