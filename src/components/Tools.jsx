import { useEffect, useRef, useState } from "react";

import { FaApple } from "react-icons/fa";
import { TbBrandAdobePremiere, TbBrandAdobeAfterEffect, TbBrandAdobePhotoshop } from "react-icons/tb";
import { SiDavinciresolve } from "react-icons/si";

const tools = [
   {
      name: "Adobe Premiere Pro",
      category: "VIDEO EDITING",
      icon: TbBrandAdobePremiere,
      color: "#9999FF",
      description: "Precision editing and cinematic storytelling.",
   },
   {
      name: "Adobe After Effects",
      category: "MOTION GRAPHICS",
      icon: TbBrandAdobeAfterEffect,
      color: "#9999FF",
      description: "Motion graphics, titles, and visual effects.",
   },
   {
      name: "Adobe Photoshop",
      category: "IMAGE & THUMBNAILS",
      icon: TbBrandAdobePhotoshop,
      color: "#31A8FF",
      description: "Visual assets, thumbnails, and image refinement.",
   },
   {
      name: "Final Cut Pro",
      category: "VIDEO EDITING",
      icon: FaApple,
      color: "#E7C15F",
      description: "A streamlined workflow for video projects.",
   },
   {
      name: "DaVinci Resolve",
      category: "COLOR GRADING",
      icon: SiDavinciresolve,
      color: "#E7C15F",
      description: "Cinematic color grading and image finishing.",
   },
];

export default function Tools() {
   const sectionRef = useRef(null);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const section = sectionRef.current;

      if (!section) return;

      // Reveal the section when it enters the viewport.
      if (!("IntersectionObserver" in window)) {
         setVisible(true);
         return;
      }

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true);
               observer.disconnect();
            }
         },
         {
            threshold: 0.12,
         },
      );

      observer.observe(section);

      return () => observer.disconnect();
   }, []);

   return (
      <section
         id='tools'
         ref={sectionRef}
         className={`tools-section relative overflow-hidden bg-[#0C0C0C] px-5 py-24 text-[#F0EDE6] sm:px-8 md:px-12 md:py-32 ${
            visible ? "is-visible" : ""
         }`}
      >
         {/* Subtle background glow */}
         <div
            aria-hidden='true'
            className='pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#E7C15F]/[0.04] blur-[100px]'
         />

         <div className='relative mx-auto max-w-7xl'>
            {/* Section heading */}
            <div className='tools-heading mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end'>
               <div>
                  <p className='mb-5 text-[10px] uppercase tracking-[0.3em] text-[#E7C15F] sm:text-xs'>The tools behind the craft</p>

                  <h2 className='font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl md:text-7xl'>
                     Technology
                     <br />
                     meets <span className='text-[#E7C15F]'>creativity.</span>
                  </h2>

                  <div className='tools-accent mt-6 h-px w-20 bg-[#E7C15F]' />
               </div>

               <p className='max-w-sm text-sm leading-7 text-white/55'>
                  Powerful tools. Thoughtful decisions. Every cut, color, and sound serves the story.
               </p>
            </div>

            {/* Software cards */}
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
               {tools.map((tool, index) => {
                  const ToolIcon = tool.icon;

                  return (
                     <article
                        key={tool.name}
                        className='tool-card group relative overflow-hidden border border-white/10 bg-[#111111] p-6 sm:p-7'
                        style={{
                           "--delay": `${index * 120}ms`,
                        }}
                     >
                        {/* Decorative corner */}
                        <div
                           aria-hidden='true'
                           className='absolute right-0 top-0 h-8 w-8 border-r border-t border-[#E7C15F]/0 transition-colors duration-300 group-hover:border-[#E7C15F]/60'
                        />

                        {/* Icon and category */}
                        <div className='mb-12 flex items-start justify-between gap-3'>
                           <div className='tool-icon-box flex h-14 w-14 shrink-0 items-center justify-center border border-white/15 bg-white/[0.03]'>
                              <ToolIcon size={28} color={tool.color} aria-hidden='true' className='tool-icon' />
                           </div>

                           <span className='pt-1 text-right text-[9px] leading-4 tracking-[0.12em] text-white/40'>{tool.category}</span>
                        </div>

                        {/* Tool details */}
                        <h3 className='text-lg font-medium leading-snug tracking-tight'>{tool.name}</h3>

                        <p className='mt-3 min-h-[72px] text-sm leading-6 text-white/50'>{tool.description}</p>

                        {/* Animated gold underline */}
                        <div className='tool-underline mt-7 h-px w-full bg-[#E7C15F]' />

                        <span className='mt-4 block text-[9px] uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-[#E7C15F]/70'>
                           Creative toolkit
                        </span>
                     </article>
                  );
               })}
            </div>

            <div className='mt-12 flex items-center gap-4'>
               <span className='h-px w-10 bg-[#E7C15F]/50' />
               <p className='text-[9px] uppercase tracking-[0.25em] text-white/30'>Every tool serves the story</p>
            </div>
         </div>

         {/* Animation styles */}
         <style>{`
        .tools-heading,
        .tool-card {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 800ms ease,
            transform 800ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .tools-section.is-visible .tools-heading,
        .tools-section.is-visible .tool-card {
          opacity: 1;
          transform: translateY(0);
        }

        .tools-section.is-visible .tool-card {
          transition-delay: var(--delay), var(--delay), 0ms, 0ms;
        }

        .tools-accent {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 900ms ease 300ms;
        }

        .tools-section.is-visible .tools-accent {
          transform: scaleX(1);
        }

        .tool-icon-box {
          transition:
            border-color 300ms ease,
            background 300ms ease,
            transform 300ms ease;
        }

        .tool-icon {
          transition: transform 300ms ease;
        }

        .tool-card:hover {
          border-color: rgb(231 193 95 / 45%);
          box-shadow: 0 12px 40px rgb(231 193 95 / 5%);
        }

        .tool-card:hover .tool-icon-box {
          border-color: #E7C15F;
          background: rgb(231 193 95 / 8%);
          transform: translateY(-3px);
        }

        .tool-card:hover .tool-icon {
          transform: scale(1.1);
        }

        .tool-underline {
          transform: scaleX(0.15);
          transform-origin: left;
          opacity: 0.45;
          transition:
            transform 500ms ease,
            opacity 500ms ease;
        }

        .tool-card:hover .tool-underline {
          transform: scaleX(1);
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .tools-heading,
          .tool-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .tools-accent,
          .tool-underline {
            transform: none;
            transition: none;
          }

          .tool-icon,
          .tool-icon-box {
            transition: none;
          }
        }
      `}</style>
      </section>
   );
}
