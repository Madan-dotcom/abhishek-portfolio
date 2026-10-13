import { useState } from "react";
import abhi from "../assets/images/Abihsehk photo.png";

const skills = [
   "NARRATIVE EDITING",
   "COLOR GRADING",
   "MOTION GRAPHICS",
   "SOUND DESIGN",
   "VFX COMPOSITING",
   "SOCIAL REELS",
   "DOCUMENTARY",
   "BRAND FILMS",
];

const tools = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"];

export default function About() {
   const [imageError, setImageError] = useState(false);

   return (
      <section id='about' className='relative overflow-hidden bg-[#0C0C0C] px-6 py-20 text-[#F0EDE6] sm:px-10 sm:py-24 lg:px-[60px]'>
         <div className='mx-auto max-w-[1600px]'>
            {/* Section heading */}
            <div className='mb-12'>
               <p className='mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-[#C9A45C]'>WHO I AM</p>

               <h2 className='max-w-[600px] font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[54px]'>
                  The Editor <span className='italic text-[#D8B66A]'>Behind</span>
                  <br />
                  the Frame
               </h2>
            </div>

            {/* Main content */}
            <div className='grid grid-cols-1 gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16'>
               {/* Portrait frame */}
               <div className='relative min-h-[360px] border border-white/10 sm:min-h-[480px] lg:min-h-[540px]'>
                  {!imageError ? (
                     <img
                        src={abhi}
                        alt='Abhishek, video editor'
                        onError={() => setImageError(true)}
                        className='absolute inset-0 h-full w-full object-cover'
                     />
                  ) : (
                     <div className='absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#191919] to-[#0C0C0C]'>
                        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl'>📷</div>
                        <p className='mt-3 text-[9px] uppercase tracking-[0.2em] text-white/30'>Add your photo here</p>
                     </div>
                  )}

                  <div className='pointer-events-none absolute inset-3 border border-white/[0.04]' />
               </div>

               {/* Biography */}
               <div className='flex flex-col justify-center lg:border-l lg:border-[#C9A45C]/30 lg:pl-14'>
                  <div className='space-y-6 text-sm leading-8 text-white/55 sm:text-[15px]'>
                     <p>
                        Hey, I'm <span className='font-medium text-white'>Abhishek</span> — a video editor with a passion for telling
                        stories that stick. I believe every frame is a chance to say something meaningful.
                     </p>

                     <p>
                        With <span className='font-medium text-white'>5 years of experience</span> across brand films, music videos, and
                        documentary work, I bring a meticulous eye for pacing, colour, and emotion to every project. I've collaborated with
                        brands, independent artists, and filmmakers across India and beyond.
                     </p>

                     <p>
                        My process is simple: <span className='font-medium text-white'>understand the story, then let the edit speak.</span>
                     </p>
                  </div>

                  {/* Skills */}
                  <div className='mt-8 flex flex-wrap gap-2'>
                     {skills.map((skill) => (
                        <span
                           key={skill}
                           className='border border-white/10 px-3 py-2 text-[8px] uppercase tracking-[0.12em] text-white/50 transition-colors duration-300 hover:border-[#C9A45C]/60 hover:text-[#D8B66A] sm:text-[9px]'
                        >
                           {skill}
                        </span>
                     ))}
                  </div>

                  {/* Editing software */}
                  <div className='mt-8'>
                     <p className='mb-4 text-[9px] uppercase tracking-[0.2em] text-white/35'>TOOLS I USE</p>

                     <div className='flex flex-wrap gap-x-5 gap-y-3'>
                        {tools.map((tool) => (
                           <span
                              key={tool}
                              className='font-serif text-sm font-semibold italic text-white/50 transition-colors hover:text-[#D8B66A]'
                           >
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Contact CTA */}
                  <div className='mt-10'>
                     <a
                        href='#contact'
                        className='inline-flex min-h-[46px] items-center justify-center gap-3 bg-[#D8B66A] px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-[#F0D58D]'
                     >
                        LET'S COLLABORATE <span aria-hidden='true'>→</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
