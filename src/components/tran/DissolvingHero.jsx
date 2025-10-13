import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Package, Globe, MapPin, ArrowRight, Clock, Zap } from 'lucide-react';

const DissolvingHero = () => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
  }));

  const features = [
    { icon: Clock, text: '24/7 Tracking', delay: 2.3 },
    { icon: Globe, text: 'Global Network', delay: 2.4 },
    { icon: Zap, text: 'Express Delivery', delay: 2.5 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
        }}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Network Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100 + '%'}
              y1={Math.random() * 100 + '%'}
              x2={Math.random() * 100 + '%'}
              y2={Math.random() * 100 + '%'}
              stroke="white"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.1 + 1.5 }}
            />
          ))}
        </svg>
      </div>

      {/* Dissolving Transition Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div className="absolute inset-0 z-50">
            <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white"
                  initial={{ opacity: 1 }}
                  exit={{ 
                    opacity: 0,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.01,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl w-full items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">Worldwide Shipping Excellence</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              Move Fast.
              <span className="block mt-2">
                Ship Smart.
              </span>
              <motion.span 
                className="block text-transparent bg-clip-text mt-2"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #888888 50%, #ffffff 100%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Deliver Excellence.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              Revolutionizing global logistics with precision, speed, and reliability. Your cargo, our commitment.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              className="flex gap-4 mb-10 flex-wrap"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
              transition={{ duration: 1, delay: 1.9 }}
            >
              <motion.button
                className="relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Package className="w-5 h-5" />
                Track Package
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Truck Visualization */}
          <motion.div
            className="relative h-96 md:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: loading ? 0 : 1, x: loading ? 50 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {/* Rotating Rings */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-80 h-80 rounded-full border border-white/20" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-96 h-96 rounded-full border border-white/10" />
            </motion.div>

            {/* Central Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-64 h-64 rounded-full bg-white/5 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Main Truck */}
            <div className="relative flex items-center justify-center h-full">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Truck className="w-48 h-48 text-white drop-shadow-2xl" strokeWidth={1.5} />
                
                {/* Speed Lines */}
                <motion.div
                  className="absolute right-full top-1/2 -translate-y-1/2 mr-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: [0, 1, 0], x: [20, -20, -40] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                >
                  <div className="flex flex-col gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-0.5 bg-white/60" style={{ width: `${60 - i * 15}px` }} />
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Orbiting Packages */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                >
                  <motion.div
                    style={{
                      x: Math.cos((i * Math.PI) / 2) * 120,
                      y: Math.sin((i * Math.PI) / 2) * 120,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Package className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Stats Cards */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Countries</div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">On-Time</div>
              </motion.div>
              <motion.div 
                className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Corner Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: loading ? 0 : 0.5, scale: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-full h-full border-t-2 border-l-2 border-white/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: loading ? 0 : 0.5, scale: loading ? 0 : 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-full h-full border-b-2 border-r-2 border-white/30" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? -20 : 0 }}
        transition={{ duration: 1, delay: 2.4 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DissolvingHero;