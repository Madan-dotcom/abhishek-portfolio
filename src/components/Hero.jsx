import { useState } from "react";
import abhi from "../assets/images/Abhi 2.png";
import Avink from "../assets/videos/Anvik Eshan.mp4";

const Hero = () => {
   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

   return (
      <section id='showreel' className='relative min-h-screen overflow-hidden bg-[#0C0C0C] text-[#F0EDE6]'>
         {/* Full-width cinematic background */}
         <div className='pointer-events-none absolute inset-0'>
            {/* Background image fallback */}
            <img
               src={abhi}
               alt=''
               fetchPriority='high'
               className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                  isVideoLoaded ? "opacity-0" : "opacity-100"
               }`}
            />

            {/* Background video */}
            <video
               autoPlay
               muted
               loop
               playsInline
               preload='metadata'
               poster='/images/hero-background.jpg'
               onPlaying={() => setIsVideoLoaded(true)}
               className='absolute inset-0 h-full w-full object-cover object-center'
            >
               <source src={Avink} type='video/mp4' />
            </video>

            {/* Dark overlays for text readability */}
            <div className='absolute inset-0 bg-black/40' />

            <div className='absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/95 via-[#0C0C0C]/70 to-[#0C0C0C]/15' />

            <div className='absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]/30' />
         </div>

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

         {/* Scroll indicator */}
         <a
            href='#work'
            aria-label='Scroll to featured work'
            className='absolute bottom-7 right-6 z-10 flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/70 transition-colors hover:text-[#E7C15F] sm:right-10 lg:right-16'
         >
            SCROLL TO EXPLORE
            <span className='animate-bounce text-base'>↓</span>
         </a>
      </section>
   );
};

export default Hero;
