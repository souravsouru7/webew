import React, { useState, useEffect, useRef } from 'react';

export default function PremiumAboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const values = [
    { icon: '◆', title: 'Excellence', desc: 'Uncompromising quality in every detail' },
    { icon: '◆', title: 'Innovation', desc: 'Pioneering design and construction methods' },
    { icon: '◆', title: 'Integrity', desc: 'Building trust through transparency' },
    { icon: '◆', title: 'Sustainability', desc: 'Creating homes for future generations' }
  ];

  const team = [
    { name: 'Michael Chen', role: 'Founder & Visionary', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=90' },
    { name: 'Sarah Williams', role: 'Lead Architect', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=90' },
    { name: 'David Kumar', role: 'Master Builder', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=90' },
    { name: 'Emma Rodriguez', role: 'Interior Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=90' }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Full Screen Immersive */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              transform: `translate(${cursorPos.x * 0.02}px, ${cursorPos.y * 0.02}px)`
            }}
          />
        </div>

        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 right-32 w-64 h-80 rounded-3xl overflow-hidden opacity-20 blur-sm"
            style={{ transform: `translate(${cursorPos.x * 0.03}px, ${cursorPos.y * 0.03}px)` }}
          >
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=90" alt="" className="w-full h-full object-cover" />
          </div>
          <div 
            className="absolute bottom-32 left-20 w-56 h-72 rounded-3xl overflow-hidden opacity-20 blur-sm"
            style={{ transform: `translate(${-cursorPos.x * 0.02}px, ${-cursorPos.y * 0.02}px)` }}
          >
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=90" alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-8 max-w-6xl">
          <div className="mb-8 overflow-hidden">
            <div className="animate-[slideUp_1s_ease-out]">
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Est. 2012</span>
            </div>
          </div>
          <h1 className="text-8xl md:text-9xl font-light tracking-tighter mb-8 leading-none">
            <div className="overflow-hidden">
              <span className="block animate-[slideUp_1s_ease-out_0.2s_backwards]">Crafting</span>
            </div>
            <div className="overflow-hidden">
              <span className="block animate-[slideUp_1s_ease-out_0.4s_backwards] italic">Dreams</span>
            </div>
            <div className="overflow-hidden">
              <span className="block animate-[slideUp_1s_ease-out_0.6s_backwards]">Into Reality</span>
            </div>
          </h1>
          <div className="overflow-hidden">
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-[slideUp_1s_ease-out_0.8s_backwards]">
              We are architects of extraordinary living spaces, where innovation meets timeless elegance
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Story Section - Split Screen */}
      <section className="min-h-screen flex items-center py-32 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="text-xs tracking-[0.3em] uppercase text-gray-500">Our Story</div>
            <h2 className="text-6xl font-light leading-tight tracking-tight">
              A Legacy Built on<br />
              <span className="italic text-gray-400">Passion & Precision</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded over a decade ago, we emerged from a simple belief: that every home should be a masterpiece, a reflection of the dreams and aspirations of those who inhabit it.
              </p>
              <p>
                What started as a small studio has grown into an award-winning firm, renowned for pushing the boundaries of residential architecture while honoring the timeless principles of exceptional craftsmanship.
              </p>
              <p>
                Today, we stand at the intersection of art and engineering, creating spaces that don't just shelter, but inspire, comfort, and elevate everyday living.
              </p>
            </div>
            <div className="pt-8">
              <div className="flex gap-16">
                <div>
                  <div className="text-5xl font-light mb-2">150+</div>
                  <div className="text-sm text-gray-500 tracking-wide">HOMES DELIVERED</div>
                </div>
                <div>
                  <div className="text-5xl font-light mb-2">$2B+</div>
                  <div className="text-sm text-gray-500 tracking-wide">PROJECT VALUE</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden h-[600px] group">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90" 
                alt="Modern Architecture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white text-black p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-light mb-2">98%</div>
              <div className="text-sm tracking-wide text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Creative Grid */}
      <section className="py-32 px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">Our Values</div>
            <h2 className="text-6xl font-light tracking-tight">
              The Principles That<br />
              <span className="italic text-gray-400">Guide Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div 
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-6xl mb-6 text-white/20 group-hover:text-white/40 transition-colors duration-500 group-hover:rotate-180 inline-block transform transition-transform duration-700">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-light mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Interactive Cards */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-6">Meet The Team</div>
            <h2 className="text-6xl font-light tracking-tight">
              Visionaries Behind<br />
              <span className="italic text-gray-400">Your Dream Home</span>
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div 
                key={i}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveTeamMember(i)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="relative rounded-3xl overflow-hidden mb-6 h-80">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${activeTeamMember === i ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${activeTeamMember === i ? 'opacity-0' : 'opacity-100'}`} />
                </div>
                <h3 className="text-xl font-light mb-2">{member.name}</h3>
                <p className="text-sm text-gray-500 tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Impact */}
      <section className="relative py-40 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90" 
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-light leading-tight tracking-tight mb-8">
            Let's Create Something<br />
            <span className="italic text-gray-400">Extraordinary Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your dream home is waiting to be built. Let's start this journey.
          </p>
          <button className="group relative bg-white text-black px-12 py-5 rounded-full text-base font-medium overflow-hidden">
            <span className="relative z-10">Begin Your Journey</span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">ModernHome</div>
          <div className="flex gap-12 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">hello@modernhome.com</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}