const display = { fontFamily: "'Playfair Display', Georgia, serif" };
const sans = { fontFamily: "'DM Sans', system-ui, sans-serif" };
const mono = { fontFamily: "'Space Mono', ui-monospace, monospace" };

export default function Hero() {
   return (
      <section className='relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f0ede6]'>
         <div className='mx-auto grid min-h-screen max-w-[1920px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-0 lg:px-0 lg:py-0'>
            {/* LEFT */}
            <div className='lg:pl-[7vw] lg:pr-8'>
               <p style={mono} className='mb-6 text-[11px] uppercase tracking-[0.3em] text-[#e8c872] sm:text-xs'>
                  Visual Storyteller &amp; Video Editor
               </p>

               <h1
                  style={display}
                  className='text-[clamp(3.5rem,13vw,4.5rem)] font-extrabold leading-[0.92] tracking-[-0.02em] sm:text-[clamp(4rem,10vw,6rem)] lg:text-[clamp(4rem,6vw,7rem)]'
               >
                  <span className='block text-[#f0ede6]'>Abhishek</span>
                  <span className='block italic text-[#e8c872]'>Crafts</span>
                  <span className='block italic text-[#e8c872]'>Motion.</span>
               </h1>

               <p style={sans} className='mt-10 max-w-[440px] text-base leading-[1.95] text-[#8a8780] sm:text-[17px]'>
                  Transforming raw footage into compelling narratives — from cinematic brand films to high-energy reels, every cut tells a
                  story.
               </p>

               <div className='mt-12 flex flex-wrap gap-[18px]'>
                  <a
                     href='#work'
                     style={mono}
                     className='inline-flex h-[53px] items-center bg-[#e8c872] px-[35px] text-[13px] uppercase tracking-[0.15em] text-[#0a0a0a] transition-colors hover:bg-[#f2d78d]'
                  >
                     View Work <span className='ml-2 text-[11px]'>→</span>
                  </a>
                  <a
                     href='#contact'
                     style={mono}
                     className='inline-flex h-[53px] items-center border border-[#2a2a2a] px-[35px] text-[13px] uppercase tracking-[0.15em] text-[#f0ede6] transition-colors hover:border-[#e8c872] hover:text-[#e8c872]'
                  >
                     Hire Me
                  </a>
               </div>
            </div>

            {/* RIGHT */}
            <div className='lg:py-[18px] lg:pr-[3.4vw]'>
               <div
                  className='relative aspect-[4/3] w-full overflow-hidden border border-[#e8c872]/[0.06] sm:aspect-video lg:aspect-auto lg:h-[calc(100vh-36px)] lg:max-h-[670px] lg:min-h-[480px]'
                  style={{
                     backgroundColor: "#0b0b0a",
                     backgroundImage: [
                        "linear-gradient(to right, rgba(232,200,114,0.07) 1px, transparent 1px)",
                        "linear-gradient(to bottom, rgba(232,200,114,0.07) 1px, transparent 1px)",
                        "radial-gradient(ellipse at 0% 0%, rgba(40,28,0,0.95) 0%, transparent 55%)",
                        "radial-gradient(ellipse at 100% 100%, rgba(45,14,0,0.95) 0%, transparent 55%)",
                     ].join(","),
                     backgroundSize: "62px 62px, 62px 62px, 100% 100%, 100% 100%",
                  }}
               >
                  <button
                     type='button'
                     aria-label='Watch showreel'
                     className='group absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center'
                  >
                     <span className='flex h-[130px] w-[130px] items-center justify-center rounded-full border border-[#e8c872]/[0.08] sm:h-[162px] sm:w-[162px]'>
                        <span className='flex h-20 w-20 items-center justify-center rounded-full border border-[#e8c872]/60 transition-colors group-hover:bg-[#e8c872]/10 sm:h-[97px] sm:w-[97px]'>
                           <svg viewBox='0 0 24 24' className='ml-1 h-6 w-6 fill-[#e8c872] sm:h-7 sm:w-7' aria-hidden='true'>
                              <path d='M6 3.5v17l14-8.5z' />
                           </svg>
                        </span>
                     </span>
                     <span style={mono} className='mt-1 text-[10px] uppercase tracking-[0.25em] text-[#8a8780] sm:text-[11px]'>
                        Watch Showreel
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
