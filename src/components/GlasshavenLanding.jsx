import React, { useEffect, useState } from 'react';

export default function GlasshavenLanding() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'GLASSHAVEN';

  useEffect(() => {
    let timeoutId;

    const typeSpeed = 120;
    const deleteSpeed = 70;
    const endPause = 1200;
    const startPause = 800;

    if (!isDeleting && displayText.length < fullText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), endPause);
    } else if (isDeleting && displayText.length > 0) {
      timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timeoutId = setTimeout(() => setIsDeleting(false), startPause);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}i-want-image-for-based-on-realestate-to-keep-in-we.png')`,
        }}
      >
        {/* Subtle dark gradient + vignette shadow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/35 via-transparent to-black/50"></div>
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.65)' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-end items-center px-12 py-8">
          <div className="flex gap-8 text-white" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.15em' }}>
            <a href="#" className="text-sm font-light tracking-widest hover:opacity-80 transition-opacity">HOME</a>
            <a href="#" className="text-sm font-light tracking-widest hover:opacity-80 transition-opacity">ABOUT</a>
            <a href="#" className="text-sm font-light tracking-widest hover:opacity-80 transition-opacity">PROPERTIES</a>
            <a href="#" className="text-sm font-light tracking-widest hover:opacity-80 transition-opacity">SERVICES</a>
            <a href="#" className="text-sm font-light tracking-widest hover:opacity-80 transition-opacity">GALLERY</a>
            <a href="#" className="text-sm font-light tracking-widest hover:opacity-80 transition-opacity">CONTACTS</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-between px-12 pb-12">
          {/* Main Title */}
          <div className="flex-1 flex items-center">
            <h1 
              className="text-white font-black tracking-tight leading-none"
              style={{
                fontSize: 'clamp(80px, 12vw, 180px)',
                fontFamily: 'Arial Black, Arial, sans-serif',
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              {displayText}
              <span className="inline-block w-2 h-[0.9em] bg-white ml-2 align-middle animate-pulse" aria-hidden="true"></span>
            </h1>
          </div>

          {/* Bottom Content */}
          <div className="flex justify-between items-end">
            {/* Left Bottom Text */}
            <div className="text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
              <p 
                className="font-light tracking-widest mb-1"
                style={{ fontSize: '20px', letterSpacing: '0.15em' }}
              >
                A NEW STANDARD
              </p>
              <p 
                className="font-light tracking-widest"
                style={{ fontSize: '20px', letterSpacing: '0.15em' }}
              >
                OF MODERN LIVING
              </p>
            </div>

            {/* Right Bottom Text */}
            <div className="text-white text-right" style={{ fontFamily: 'Arial, sans-serif' }}>
              <p 
                className="font-light tracking-widest"
                style={{ fontSize: '18px', letterSpacing: '0.15em' }}
              >
                QUEBEC, CANADA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}