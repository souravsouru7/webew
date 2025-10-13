import React from 'react'

const Stat = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-2xl md:text-3xl font-semibold tracking-tight text-black">{value}+</span>
    <span className="text-sm text-neutral-500">{label}</span>
  </div>
)

const ArrowIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LocationPin = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21s7-6.1 7-11.2A7 7 0 105 9.8C5 14.9 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="12" cy="9.8" r="2.4" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

const StarIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.7l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.6 7.2 18.6l.9-5.4L4.2 9.4l5.4-.8L12 3.7z"/>
  </svg>
)

const SearchIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const Avatar = ({ src }) => (
  <img src={src} className="h-8 w-8 rounded-full object-cover ring-2 ring-white" alt="avatar"/>
)

export default function VacationHero() {
  return (
    <section className="h-screen w-full overflow-hidden bg-neutral-900 text-neutral-900">
      <div className="relative h-full w-full overflow-hidden">
        {/* white card on left, image on right */}
        <div className="grid h-full grid-cols-1 md:grid-cols-2 bg-white/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl">
          {/* Left Pane */}
          <div className="relative flex h-full flex-col p-8 md:p-14">
            {/* Top nav */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-black text-white flex items-center justify-center text-sm font-semibold">lb</div>
                <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-500">
                  <a className="hover:text-black transition-colors" href="#">Home</a>
                  <a className="hover:text-black transition-colors" href="#">Villas</a>
                  <a className="hover:text-black transition-colors" href="#">Manor</a>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <button className="hidden md:inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium border border-neutral-200 hover:border-neutral-300 transition-colors">
                  Contact Us
                </button>
                <div className="h-10 w-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="mt-12">
              <h1 className="text-[54px] leading-[1.03] md:text-[82px] font-bold tracking-tight text-black">
                Discover Dubai
                <br/>Luxury Living
              </h1>
              <p className="mt-6 text-neutral-500 text-base md:text-lg max-w-[48ch]">
                Explore high‑end villas and apartments across Dubai — from Palm Jumeirah
                to Downtown and Dubai Marina. Premium homes curated for comfort,
                privacy, and world‑class lifestyle.
              </p>
              {/* Featured property thumbnails */}
              <div className="mt-5 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=200&auto=format&fit=crop"
                  onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1600607687920-4ce9c3e1d51d?q=80&w=200&auto=format&fit=crop'}}
                  alt="Dubai villa exterior"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow"
                />
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=200&auto=format&fit=crop"
                  onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=200&auto=format&fit=crop'}}
                  alt="Modern living room"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow -ml-2"
                />
                <img
                  src="https://images.unsplash.com/photo-1523217582562-8f5f5d4f1a77?q=80&w=200&auto=format&fit=crop"
                  onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1600607687920-4ce9c3e1d51d?q=80&w=200&auto=format&fit=crop'}}
                  alt="Luxury kitchen"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow -ml-2"
                />
                <span className="ml-1 text-xs text-neutral-500">Featured homes in Dubai</span>
              </div>
              <div className="mt-7">
                <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3.5 text-base font-medium shadow-[0_14px_28px_rgba(0,0,0,0.25)] hover:opacity-90 transition">
                  More
                  <ArrowIcon className="h-4 w-4"/>
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="flex flex-col"><span className="text-3xl md:text-5xl font-semibold tracking-tight text-black">115k+</span><span className="text-sm md:text-base text-neutral-500">Capital Raised</span></div>
              <div className="flex flex-col"><span className="text-3xl md:text-5xl font-semibold tracking-tight text-black">70k+</span><span className="text-sm md:text-base text-neutral-500">Happy Customers</span></div>
              <div className="flex flex-col"><span className="text-3xl md:text-5xl font-semibold tracking-tight text-black">47k+</span><span className="text-sm md:text-base text-neutral-500">Property Options</span></div>
            </div>

            {/* Bottom card */}
            <div className="mt-auto rounded-3xl overflow-hidden border border-neutral-200 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1117"
                  onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop'}}
                  alt="Dubai Luxury Home"
                  className="h-56 md:h-64 w-full object-cover"
                />
                <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs text-neutral-700 shadow">
                      <LocationPin className="h-3.5 w-3.5"/>
                      Dubai, UAE
                    </div>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-black/85 text-white px-3 py-1 text-xs">
                      Popular
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-3 py-1 shadow">
                    {[...Array(5)].map((_,i)=> (
                      <StarIcon key={i} className="h-3.5 w-3.5 text-yellow-400"/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane */}
          <div className="relative min-h-[620px] md:min-h-[760px] overflow-hidden rounded-[24px] p-4 md:p-6">
            {/* image wrapper slightly inset to reduce visual size */}
            <div className="absolute inset-4 md:inset-6 rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop"
                onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1920&auto=format&fit=crop'}}
                alt="Dubai Skyline"
                className="h-full w-full object-cover"
              />
              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/0"/>
            </div>



            {/* right content */}
            <div className="absolute inset-x-6 md:inset-x-12 bottom-12 text-white">
              <p className="max-w-[58ch] text-base md:text-lg text-white/90">
                Experience Dubai living at its finest — contemporary villas with skyline views,
                beachside retreats on the Palm, and elegant apartments steps from couture
                shopping and fine dining.
              </p>

              {/* search pills */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button className="h-14 rounded-full bg-white/90 text-neutral-900 px-6 text-base backdrop-blur border border-white/60 hover:bg-white transition inline-flex items-center gap-2">
                  <span className="text-neutral-500">Select Type</span>
                </button>
                <button className="h-14 rounded-full bg-white/90 text-neutral-900 px-6 text-base backdrop-blur border border-white/60 hover:bg-white transition inline-flex items-center gap-2">
                  <span className="text-neutral-500">Location</span>
                </button>
                <button className="h-14 rounded-full bg-black text-white px-7 text-base inline-flex items-center gap-2 shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                  <SearchIcon className="h-4 w-4"/>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}


