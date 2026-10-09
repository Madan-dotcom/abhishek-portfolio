const Hero = () => {
   return (
      <section id='showreel' className='relative min-h-screen overflow-hidden bg-[#0C0C0C] text-[#F0EDE6]'>
         {/* Background details */}

         {/* Floating photo cards */}

         {/* Main hero content */}

         {/* Main hero content */}
         <div className='relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-28 sm:px-10 lg:px-16'>
            <div className='w-full max-w-3xl'>
               <p className='mb-6 font-serif text-sm text-[#E7C15F] sm:text-base'>— director’s notebook — open</p>

               <h1 className='font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[7rem]'>
                  <span className='block'>Every</span>
                  <span className='block pl-8 font-normal italic text-[#85827D] sm:pl-14'>frame is</span>
                  <span className='block text-[#E7C15F]'>a decision.</span>
               </h1>

               <p className='mt-8 max-w-md border-l-2 border-[#E7C15F] pl-5 text-sm leading-6 text-[#85827D] sm:mt-10'>
                  Transforming raw footage into compelling narratives — from cinematic brand films to high-energy reels, every cut tells a
                  story.
               </p>

               <div className='mt-8 flex flex-wrap items-center gap-4 sm:mt-10'>
                  <a
                     href='#work'
                     className='inline-flex min-h-12 items-center justify-center gap-3 bg-[#E7C15F] px-6 text-xs font-semibold tracking-widest text-[#0C0C0C] transition-colors duration-300 hover:bg-[#F0EDE6]'
                  >
                     <span aria-hidden='true'>▶</span>
                     VIEW THE WORK
                  </a>

                  <a
                     href='#contact'
                     className='inline-flex min-h-12 items-center gap-3 border-b border-white/20 py-3 text-xs tracking-widest text-[#F0EDE6] transition-colors duration-300 hover:border-[#E7C15F] hover:text-[#E7C15F]'
                  >
                     GET IN TOUCH
                     <span aria-hidden='true'>↗</span>
                  </a>
               </div>
            </div>
         </div>

         {/* Statistics */}

         {/* Scroll indicator */}
      </section>
   );
};

export default Hero;
