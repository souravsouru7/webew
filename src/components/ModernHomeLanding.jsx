import React from 'react';

export default function ModernHomeLanding() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <section className="relative mx-12 mt-8 mb-12 h-72 overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-blue-800">
            <div className="absolute left-12 top-14">
              <p className="text-blue-300 text-[0.65rem] mb-3 tracking-[0.15em] uppercase">Crafting Tomorrow's Living Spaces</p>
              <h1 className="text-white font-serif leading-[1.15]">
                <span className="text-5xl block mb-1">Set New Standards</span>
                <span className="text-5xl block mb-1">in <span className="italic font-light">Modern Home</span></span>
                <span className="text-5xl block">Construction</span>
              </h1>
            </div>
            
            {/* Building Image */}
            <div className="absolute right-0 top-0 bottom-0 w-[42%] rounded-r-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=90" 
                alt="Modern Building"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Dream Section */}
        <section className="relative py-12 mb-8">
          <div className="relative px-4">
            {/* Left Image - Bleeding to edge */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[28%] z-10">
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl" style={{marginLeft: '-2rem'}}>
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=90" 
                  alt="Modern House"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Center Content */}
            <div className="max-w-xl mx-auto text-center py-8 px-16">
              <div className="mb-6">
                <div className="w-2 h-2 bg-black mx-auto mb-8 rotate-45"></div>
              </div>
              <h2 className="font-serif mb-6 leading-tight">
                <span className="text-[2.75rem] block">If you can <span className="italic font-light">dream</span> it, we</span>
                <span className="text-[2.75rem] block">can <span className="italic font-light">build</span> it.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                We adopt a uniquely personalized perspective to each project to deliver unmatched precision, quality, and innovation for our architectural understanding and masterful craftsmanship our portfolio of residential projects.
              </p>
              <button className="bg-black text-white px-8 py-3 text-xs tracking-wider hover:bg-gray-800 transition-colors">
                Get in touch
              </button>
            </div>

            {/* Right Image - Bleeding to edge */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[28%] z-10">
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl" style={{marginRight: '-2rem'}}>
                <img 
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&q=90" 
                  alt="Luxury Modern House"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="px-12 pb-12 pt-8">
          <div className="rounded-[2rem] overflow-hidden bg-black shadow-2xl">
            <div className="grid grid-cols-2">
              {/* Left Text */}
              <div className="px-14 py-16 flex flex-col justify-center">
                <h2 className="text-white font-serif mb-5 leading-tight">
                  <span className="text-[2.5rem] block">Our timeless</span>
                  <span className="text-[2.5rem] italic font-light block">inclusions</span>
                </h2>
                <p className="text-gray-400 text-[0.8rem] leading-relaxed mb-8 max-w-sm">
                  We've been creating dream homes our future on display install their own. Delivering clients with families added finishes, accessories and appliances.
                </p>
                <button className="bg-white text-black px-7 py-2.5 text-xs w-fit hover:bg-gray-100 transition-colors tracking-wider">
                  View Inclusions
                </button>
              </div>

              {/* Right Kitchen Image */}
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=900&q=90" 
                  alt="Modern Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Label */}
       

      </div>
    </div>
  );
}