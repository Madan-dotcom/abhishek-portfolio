const experienceHighlights = [
   "Edited 100+ videos across technology, fashion, education, and lifestyle.",
   "Created short-form and long-form content for Instagram, LinkedIn, YouTube, and Facebook.",
   "Collaborated with clients on scripts, storyboards, and visual concepts.",
   "Contributed to video engagement improvements of up to 40% through editing, pacing, and motion graphics.",
   "Designed dynamic transitions, titles, and motion graphics to strengthen storytelling.",
   "Performed professional colour correction, colour grading, and audio mixing.",
   "Produced promotional, corporate, and event highlight videos.",
   "Managed the complete post-production workflow, from footage organization to final delivery.",
];

const specialties = [
   "Narrative Editing",
   "Colour Grading",
   "Motion Graphics",
   "Sound Design",
   "VFX Compositing",
   "Social Reels",
   "Documentary",
   "Brand Films",
];

const tools = ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "Final Cut Pro", "Adobe Photoshop", "Adobe Illustrator"];

function SectionLabel({ number, children }) {
   return (
      <div className='mb-5 flex items-center gap-3'>
         <span className='font-mono text-xs tracking-widest text-[#D8B66B]'>{number}</span>
         <span className='h-px w-10 bg-[#D8B66B]/60' />
         <span className='font-mono text-[10px] uppercase tracking-[0.25em] text-[#A5A098]'>{children}</span>
      </div>
   );
}

export default function FullExperience() {
   return (
      <main className='min-h-screen overflow-hidden bg-[#0C0C0C] text-[#F0EDE6]'>
         {/* HERO */}
         <section className='relative px-5 pb-20 pt-28 sm:px-10 lg:px-20 lg:pb-28 lg:pt-36'>
            <div
               aria-hidden='true'
               className='pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#D8B66B]/[0.06] blur-[100px]'
            />

            <div className='relative mx-auto max-w-7xl'>
               <SectionLabel number='01'>THE EDITOR BEHIND THE FRAME</SectionLabel>

               <div className='grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]'>
                  <div>
                     <p className='mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#D8B66B]'>Video Editor · Bengaluru, India</p>

                     <h1 className='max-w-4xl font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-8xl'>
                        Every story
                        <br />
                        deserves the
                        <br />
                        <span className='italic text-[#D8B66B]'>right cut.</span>
                     </h1>

                     <p className='mt-8 max-w-xl text-sm leading-8 text-[#B8B5AE] sm:text-base'>
                        I’m Abhishek, a video editor passionate about transforming raw footage into meaningful visual stories. I work with
                        pacing, colour, sound, and motion to create edits that connect with people and bring ideas to life.
                     </p>

                     <a
                        href='/#contact'
                        className='mt-8 inline-flex items-center gap-4 border border-[#D8B66B] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D8B66B] transition-all duration-300 hover:bg-[#D8B66B] hover:text-[#0C0C0C]'
                     >
                        LET’S COLLABORATE
                        <span aria-hidden='true'>↗</span>
                     </a>
                  </div>

                  <div className='relative mx-auto w-full max-w-sm lg:ml-auto'>
                     <div className='absolute -right-3 -top-3 h-full w-full border border-[#D8B66B]/50' />

                     <div className='relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-white/10 bg-[#171715] p-7 sm:p-9'>
                        <span className='font-mono text-[9px] tracking-[0.3em] text-[#D8B66B]'>ABHISHEK / VIDEO EDITOR</span>

                        <div>
                           <p className='font-serif text-5xl italic text-[#F0EDE6]'>
                              The art
                              <br />
                              of the edit.
                           </p>
                           <div className='mt-6 h-px w-16 bg-[#D8B66B]' />
                           <p className='mt-5 max-w-[230px] text-xs leading-6 text-[#A5A098]'>
                              Understanding the story. Finding the rhythm. Making every frame count.
                           </p>
                        </div>

                        <div className='flex items-end justify-between'>
                           <span className='font-mono text-[9px] tracking-[0.2em] text-[#A5A098]'>STORY · RHYTHM · EMOTION</span>
                           <span className='text-2xl text-[#D8B66B]'>✳</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 sm:grid-cols-3'>
                  <div>
                     <p className='font-serif text-4xl text-[#D8B66B]'>100+</p>
                     <p className='mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#A5A098]'>Videos Edited</p>
                  </div>
                  <div>
                     <p className='font-serif text-4xl text-[#D8B66B]'>2022</p>
                     <p className='mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#A5A098]'>Artsylens Since</p>
                  </div>
                  <div className='col-span-2 sm:col-span-1'>
                     <p className='font-serif text-4xl text-[#D8B66B]'>8+</p>
                     <p className='mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#A5A098]'>Creative Specialties</p>
                  </div>
               </div>
            </div>
         </section>

         {/* EXPERIENCE */}
         <section className='border-y border-white/10 bg-[#111110] px-5 py-20 sm:px-10 lg:px-20 lg:py-28'>
            <div className='mx-auto max-w-7xl'>
               <SectionLabel number='02'>PROFESSIONAL JOURNEY</SectionLabel>

               <div className='grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
                  <div>
                     <h2 className='font-serif text-4xl leading-tight sm:text-5xl'>
                        Experience that
                        <br />
                        <span className='italic text-[#D8B66B]'>shapes stories.</span>
                     </h2>

                     <p className='mt-6 max-w-md text-sm leading-7 text-[#A5A098]'>
                        From creative concepts to the final export, my work combines technical precision with a strong focus on storytelling
                        and visual consistency.
                     </p>
                  </div>

                  <div className='border-l border-[#D8B66B]/40 pl-6 sm:pl-9'>
                     <div className='relative'>
                        <span className='absolute -left-[30px] top-1 h-3 w-3 rounded-full border-2 border-[#D8B66B] bg-[#111110] sm:-left-[43px]' />

                        <div className='flex flex-wrap items-start justify-between gap-4'>
                           <div>
                              <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#D8B66B]'>Full-time · On-site</p>
                              <h3 className='mt-3 font-serif text-3xl'>Video Editor</h3>
                              <p className='mt-2 text-sm text-[#C7C3BA]'>Artsylens</p>
                              <p className='mt-2 text-xs text-[#8E8A83]'>Bengaluru, Karnataka, India</p>
                           </div>

                           <span className='border border-[#D8B66B]/40 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-[#D8B66B]'>
                              Mar 2022 – Present
                           </span>
                        </div>

                        <div className='mt-8 space-y-4'>
                           {experienceHighlights.map((highlight, index) => (
                              <div key={highlight} className='flex gap-4'>
                                 <span className='mt-1 font-mono text-[10px] text-[#D8B66B]'>{String(index + 1).padStart(2, "0")}</span>
                                 <p className='text-sm leading-7 text-[#B8B5AE]'>{highlight}</p>
                              </div>
                           ))}
                        </div>

                        <a
                           href='https://www.linkedin.com/company/90522180/'
                           target='_blank'
                           rel='noreferrer'
                           className='mt-8 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#D8B66B] transition-colors hover:text-[#F0EDE6]'
                        >
                           VIEW COMPANY PROFILE <span aria-hidden='true'>↗</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* EDUCATION */}
         <section className='px-5 py-20 sm:px-10 lg:px-20 lg:py-28'>
            <div className='mx-auto max-w-7xl'>
               <SectionLabel number='03'>EDUCATION</SectionLabel>

               <div className='grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
                  <div>
                     <h2 className='font-serif text-4xl leading-tight sm:text-5xl'>
                        Learning the
                        <br />
                        <span className='italic text-[#D8B66B]'>craft of visuals.</span>
                     </h2>

                     <p className='mt-6 max-w-md text-sm leading-7 text-[#A5A098]'>
                        A foundation in animation, visual communication, and digital production that supports my approach to
                        post-production.
                     </p>
                  </div>

                  <div className='relative border border-white/10 bg-[#111110] p-6 sm:p-9'>
                     <div className='absolute left-0 top-0 h-full w-[2px] bg-[#D8B66B]' />

                     <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#D8B66B]'>Sep 2019 – Apr 2022</p>

                     <h3 className='mt-4 font-serif text-3xl'>Arena Animation</h3>

                     <p className='mt-3 text-sm leading-7 text-[#C7C3BA]'>Associate’s degree</p>

                     <p className='mt-2 text-sm leading-7 text-[#A5A098]'>
                        Animation, Interactive Technology, Video Graphics and Special Effects
                     </p>

                     <div className='mt-6 flex flex-wrap gap-2'>
                        {["Animation", "Video Graphics", "Visual Effects", "Adobe Photoshop", "Adobe Illustrator"].map((skill) => (
                           <span key={skill} className='border border-white/10 px-3 py-2 text-[10px] text-[#B8B5AE]'>
                              {skill}
                           </span>
                        ))}
                     </div>

                     <a
                        href='https://www.linkedin.com/school/1169116/'
                        target='_blank'
                        rel='noreferrer'
                        className='mt-7 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#D8B66B] transition-colors hover:text-[#F0EDE6]'
                     >
                        VIEW INSTITUTION <span aria-hidden='true'>↗</span>
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* SPECIALTIES */}
         <section className='border-y border-white/10 bg-[#111110] px-5 py-20 sm:px-10 lg:px-20 lg:py-28'>
            <div className='mx-auto max-w-7xl'>
               <SectionLabel number='04'>AREAS OF EXPERTISE</SectionLabel>

               <div className='grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20'>
                  <div>
                     <h2 className='font-serif text-4xl leading-tight sm:text-5xl'>
                        The craft behind
                        <br />
                        <span className='italic text-[#D8B66B]'>every frame.</span>
                     </h2>
                     <p className='mt-6 text-sm leading-7 text-[#A5A098]'>
                        A combination of creative instinct and technical execution, built around what each story needs.
                     </p>
                  </div>

                  <div className='grid grid-cols-1 gap-x-8 sm:grid-cols-2'>
                     {specialties.map((specialty, index) => (
                        <div
                           key={specialty}
                           className='group flex items-center justify-between border-b border-white/10 py-5 transition-colors hover:border-[#D8B66B]/60'
                        >
                           <span className='font-serif text-xl transition-colors group-hover:text-[#D8B66B] sm:text-2xl'>{specialty}</span>
                           <span className='font-mono text-[10px] text-[#D8B66B]'>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* TOOLS */}
         <section className='px-5 py-20 sm:px-10 lg:px-20 lg:py-24'>
            <div className='mx-auto max-w-7xl'>
               <SectionLabel number='05'>TOOLS OF THE TRADE</SectionLabel>

               <h2 className='max-w-2xl font-serif text-4xl sm:text-5xl'>Technology serves the story.</h2>

               <p className='mt-5 max-w-xl text-sm leading-7 text-[#A5A098]'>
                  Software is only part of the process. The goal is always to use the right tools to deliver the right visual result.
               </p>

               <div className='mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6'>
                  {tools.map((tool, index) => (
                     <div
                        key={tool}
                        className='flex min-h-32 flex-col justify-between border border-white/10 bg-[#111110] p-4 transition-all duration-300 hover:border-[#D8B66B]/60 hover:bg-[#171715] sm:p-5'
                     >
                        <span className='font-mono text-[10px] text-[#D8B66B]'>0{index + 1}</span>
                        <span className='text-sm leading-6 text-[#F0EDE6]'>{tool}</span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* CREATIVE PHILOSOPHY */}
         <section className='px-5 pb-24 pt-8 sm:px-10 lg:px-20 lg:pb-32'>
            <div className='mx-auto max-w-5xl border-y border-[#D8B66B]/40 py-12 text-center sm:py-16'>
               <SectionLabel number='06'>THE CREATIVE PHILOSOPHY</SectionLabel>

               <h2 className='font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl'>
                  Understand the story.
                  <br />
                  <span className='italic text-[#D8B66B]'>Let the edit speak.</span>
               </h2>

               <p className='mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#A5A098]'>
                  Every project begins with listening, understanding the intention, and finding the emotion at its centre. The edit should
                  never distract from the story. It should make the story impossible to forget.
               </p>
            </div>
         </section>

         {/* CONTACT CTA */}
         <section className='border-t border-white/10 bg-[#111110] px-5 py-20 text-center sm:px-10 lg:py-24'>
            <div className='mx-auto max-w-3xl'>
               <p className='font-mono text-[10px] uppercase tracking-[0.3em] text-[#D8B66B]'>HAVE A PROJECT IN MIND?</p>

               <h2 className='mt-5 font-serif text-4xl leading-tight sm:text-6xl'>
                  Let’s create something
                  <br />
                  <span className='italic text-[#D8B66B]'>worth watching.</span>
               </h2>

               <p className='mx-auto mt-6 max-w-xl text-sm leading-7 text-[#A5A098]'>
                  Whether you’re a brand, filmmaker, artist, or creative team, I’d love to hear about your next project.
               </p>

               <a
                  href='/#contact'
                  className='mt-9 inline-flex items-center gap-4 bg-[#D8B66B] px-7 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0C0C0C] transition-colors hover:bg-[#F0EDE6]'
               >
                  GET IN TOUCH <span aria-hidden='true'>↗</span>
               </a>
            </div>
         </section>
      </main>
   );
}
