import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function ElevatoHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { value: '50+', label: 'Projects complete' },
    { value: '100+', label: 'Expert teams' },
    { value: '$3.5M', label: 'Project value' },
    { value: '$3.5M', label: 'Project value' }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1920&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${1 + scrollY * 0.0002}) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6">
        <div className={`flex items-center gap-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <div className="text-slate-900 font-bold text-lg">E</div>
          </div>
          <span className="text-white text-xl font-semibold">Elevato</span>
        </div>
        
        <div className={`hidden md:flex gap-8 text-white/80 text-sm transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <a href="#" className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#" className="hover:text-white transition-colors duration-300">About Us</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Blogs</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Cart (0)</a>
        </div>

        <button className={`bg-white text-slate-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          Contact us
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 max-w-7xl mx-auto">
        <div 
          className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
          }}
        >
          <p className="text-white/70 text-sm tracking-widest mb-4 uppercase animate-pulse">Built to inspire</p>
          <h1 className="text-white text-5xl md:text-7xl font-light mb-6 leading-tight max-w-4xl">
            <span className="inline-block hover:text-blue-300 transition-colors duration-500">Design</span>{' '}
            <span className="inline-block hover:text-blue-300 transition-colors duration-500">spaces</span>{' '}
            <span className="inline-block hover:text-blue-300 transition-colors duration-500">people</span>{' '}
            <span className="inline-block hover:text-blue-300 transition-colors duration-500">love</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-10 leading-relaxed">
            Bring your architectural projects to life with a template that puts your work front and center. Simple, elegant, and made for creators like you.
          </p>
          
          <button className="group relative bg-white text-slate-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
            <span className="relative">Get started</span>
            <div className="relative w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        {/* Stats Section */}
        <div className={`absolute bottom-24 left-8 md:left-16 right-8 md:right-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative transition-all duration-500 hover:scale-110 cursor-pointer"
                style={{ 
                  transitionDelay: `${600 + index * 100}ms`,
                  transform: `translateY(${mousePosition.y * -0.1}px)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 blur-xl transition-all duration-500 rounded-lg"></div>
                <div className="relative">
                  <div className="text-white text-4xl md:text-5xl font-light mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white/60 text-xs uppercase tracking-wider">Scroll down</div>
          <ChevronDown className="w-5 h-5 text-white/60 animate-bounce" />
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </div>
  );
}