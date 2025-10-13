import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const ZoomTransition = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const flipTimeoutRef = useRef(null);

  const pages = [
    {
      title: "Welcome",
      content: "Discover the magic of page transitions",
      color: "from-purple-500 to-pink-500",
      image: "🌟"
    },
    {
      title: "Innovation",
      content: "Creating beautiful user experiences",
      color: "from-blue-500 to-cyan-500",
      image: "💡"
    },
    {
      title: "Design",
      content: "Where creativity meets functionality",
      color: "from-emerald-500 to-teal-500",
      image: "🎨"
    },
    {
      title: "Technology",
      content: "Building the future, one page at a time",
      color: "from-orange-500 to-red-500",
      image: "🚀"
    },
    {
      title: "Success",
      content: "Your journey starts here",
      color: "from-indigo-500 to-purple-500",
      image: "🎯"
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setCurrentPage(currentPage + 1);
      flipTimeoutRef.current = setTimeout(() => setIsFlipping(false), 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setCurrentPage(currentPage - 1);
      flipTimeoutRef.current = setTimeout(() => setIsFlipping(false), 600);
    }
  };

  useEffect(() => {
    return () => {
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isFlipping]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Book Container */}
        <div className="relative perspective-[2000px]">
          <div className="flex items-center justify-center gap-8">
            {/* Left Page */}
            <div className="relative w-96 h-[500px] bg-white rounded-l-2xl shadow-2xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${pages[currentPage].color} opacity-10`}></div>
              <div className="relative h-full p-8 flex flex-col justify-center items-center text-center">
                <div className="text-6xl mb-6">{pages[currentPage].image}</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{pages[currentPage].title}</h2>
                <p className="text-gray-600 text-lg">{pages[currentPage].content}</p>
                <div className="absolute bottom-8 text-sm text-gray-400">
                  Page {currentPage + 1} of {pages.length}
                </div>
              </div>
            </div>

            {/* Right Page with Flip Effect */}
            <div className="relative w-96 h-[500px]" style={{ transformStyle: 'preserve-3d' }}>
              <div
                className={`absolute inset-0 bg-white rounded-r-2xl shadow-2xl transition-all duration-600 ease-in-out overflow-hidden ${
                  isFlipping ? 'animate-page-flip' : ''
                }`}
                style={{
                  transformOrigin: 'left center',
                  backfaceVisibility: 'hidden',
                  transform: isFlipping ? 'rotateY(-180deg)' : 'rotateY(0deg)'
                }}
              >
                {currentPage < pages.length - 1 ? (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${pages[currentPage + 1].color} opacity-10`}></div>
                    <div className="relative h-full p-8 flex flex-col justify-center items-center text-center">
                      <div className="text-6xl mb-6">{pages[currentPage + 1].image}</div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">{pages[currentPage + 1].title}</h2>
                      <p className="text-gray-600 text-lg">{pages[currentPage + 1].content}</p>
                      <div className="absolute bottom-8 text-sm text-gray-400">
                        Page {currentPage + 2} of {pages.length}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center">
                      <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">End of Book</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0 || isFlipping}
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1 || isFlipping}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping) {
                    setIsFlipping(true);
                    setCurrentPage(index);
                    flipTimeoutRef.current = setTimeout(() => setIsFlipping(false), 600);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentPage
                    ? 'bg-purple-500 w-8'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          Use arrow keys or buttons to navigate • Click dots to jump to a page
        </div>
      </div>

      <style>{`
        @keyframes page-flip {
          0% {
            transform: rotateY(0deg);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
          50% {
            transform: rotateY(-90deg);
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          100% {
            transform: rotateY(-180deg);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
        }
        
        .animate-page-flip {
          animation: page-flip 0.6s ease-in-out;
        }
        
        .perspective-\\[2000px\\] {
          perspective: 2000px;
        }
      `}</style>
    </div>
  );
};

  export default ZoomTransition;