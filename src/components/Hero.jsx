const Hero = () => {
   return (
      <section id='showreel' className='relative min-h-screen overflow-hidden bg-[#0C0C0C] text-white'>
         {/* Hero Container */}
         <div className='relative mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 pb-16 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pt-32'>
            <div className='grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16'>
               {/* Left Content */}
               <div className='max-w-2xl'>
                  {/* Eyebrow */}
                  <p className='mb-6 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#f6c400] sm:text-xs'>
                     Visual Storyteller & Video Editor
                  </p>

                  {/* Main Heading */}
                  <h1 className='font-serif text-[clamp(4rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.05em]'>
                     <span className='block text-[#f5f3ed]'>Abhishek</span>

                     <span className='block italic text-[#f0ca68]'>Crafts</span>

                     <span className='block italic text-[#f0ca68]'>Motion.</span>
                  </h1>

                  {/* Description */}
                  <p className='mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8'>
                     Transforming raw footage into compelling narratives
                     <br className='hidden sm:block' />
                     — from cinematic brand films to high-energy reels,
                     <br className='hidden sm:block' />
                     every cut tells a story.
                  </p>

                  {/* Buttons */}
                  <div className='mt-10 flex flex-wrap items-center gap-4'>
                     {/* View Work */}
                     <a
                        href='#work'
                        className='inline-flex min-h-13 items-center justify-center bg-[#f0ca68] px-7 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-[#0C0C0C] transition-all duration-300 hover:bg-[#f6c400]'
                     >
                        View Work
                        <span className='ml-3 text-base'>→</span>
                     </a>

                     {/* Hire Me */}
                     <a
                        href='#contact'
                        className='inline-flex min-h-13 items-center justify-center border border-white/10 px-7 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-[#f0ca68] hover:text-[#f0ca68]'
                     >
                        Hire Me
                     </a>
                  </div>
               </div>

               {/* Right Showreel */}
               <div className='relative w-full'>
                  <div className='relative aspect-[1.2/1] w-full overflow-hidden border border-white/[0.03] bg-[#0d0d0d]'>
                     {/* Grid */}
                     <div
                        className='absolute inset-0'
                        style={{
                           backgroundImage: `
                    linear-gradient(rgba(246,196,0,0.055) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(246,196,0,0.055) 1px, transparent 1px)
                  `,
                           backgroundSize: "58px 58px",
                        }}
                     />

                     {/* Gold / warm glow */}
                     <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(246,196,0,0.10),transparent_35%),radial-gradient(circle_at_85%_85%,rgba(100,35,10,0.14),transparent_40%)]' />

                     {/* Center Play Button */}
                     <div className='absolute inset-0 flex items-center justify-center'>
                        <button type='button' aria-label='Watch showreel' className='group flex flex-col items-center'>
                           <span className='relative flex h-24 w-24 items-center justify-center rounded-full border border-[#f0ca68]/50 transition-all duration-500 group-hover:scale-105 group-hover:border-[#f0ca68] sm:h-28 sm:w-28'>
                              {/* Outer Ring */}
                              <span className='absolute -inset-3 rounded-full border border-white/[0.03]' />

                              {/* Play Icon */}
                              <span className='ml-1 text-2xl text-[#f0ca68] transition-transform duration-500 group-hover:scale-110'>
                                 ▶
                              </span>
                           </span>

                           <span className='mt-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/35 transition-colors duration-300 group-hover:text-[#f0ca68]'>
                              Watch Showreel
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
