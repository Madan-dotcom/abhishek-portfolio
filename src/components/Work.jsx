import { useState } from "react";
import { FaPlay } from "react-icons/fa";

import haldi from "../assets/videos/Haldi Teaser.mp4";
import reel2 from "../assets/videos/Anvik Eshan.mp4";

const projects = [
   {
      id: 1,
      title: "Haldi Teaser",
      category: "BRAND FILMS",
      year: "2026",
      duration: "01:30",
      video: haldi,
   },
   {
      id: 2,
      title: "Neon Drift — Official MV",
      category: "MUSIC VIDEOS",
      year: "2024",
      duration: "4:15",
      video: reel2,
   },
   {
      id: 3,
      title: "FitLife — Reels Series",
      category: "SOCIAL CONTENT",
      year: "2024",
      duration: "Series",
      video: reel2,
   },
   {
      id: 4,
      title: "The Last Craftsmen",
      category: "DOCUMENTARY",
      year: "2023",
      duration: "18:00",
      video: haldi,
   },
   {
      id: 5,
      title: "Pulse — Sports Brand",
      category: "BRAND FILMS",
      year: "2023",
      duration: "2:00",
      video: reel2,
   },
];

const categories = ["ALL", "BRAND FILMS", "MUSIC VIDEOS", "DOCUMENTARY", "SOCIAL CONTENT"];

function ProjectCard({ project, featured = false }) {
   const [playing, setPlaying] = useState(false);

   const toggleVideo = (video) => {
      if (video.paused) {
         video
            .play()
            .then(() => setPlaying(true))
            .catch(() => {});
      } else {
         video.pause();
         setPlaying(false);
      }
   };

   return (
      <article className='group min-w-0 bg-[#0B0B0B]'>
         <div className={`relative overflow-hidden bg-[#111111] ${featured ? "aspect-[1.28/1]" : "aspect-[1.58/1]"}`}>
            <video
               src={project.video}
               muted
               playsInline
               preload='metadata'
               className='h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-[1.03]'
               onClick={(event) => toggleVideo(event.currentTarget)}
               onEnded={() => setPlaying(false)}
            />

            <div className='pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20' />

            <button
               type='button'
               aria-label={playing ? "Pause video" : "Play video"}
               onClick={(event) => toggleVideo(event.currentTarget.closest("article").querySelector("video"))}
               className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/30 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-[#D6B66B] hover:bg-[#D6B66B] hover:text-black group-hover:opacity-100 ${
                  playing ? "opacity-100" : ""
               }`}
            >
               <FaPlay className='ml-0.5 text-xs' />
            </button>
         </div>

         <div className='min-h-[124px] border-b border-white/[0.03] px-6 py-5 transition-colors duration-300 group-hover:bg-white/[0.025] max-sm:px-3'>
            <p
               className={`mb-3 font-mono text-[10px] tracking-[0.2em] ${
                  project.category === "BRAND FILMS" ? "text-[#D6B66B]" : "text-[#77736D]"
               }`}
            >
               {project.category === "BRAND FILMS"
                  ? "BRAND FILM"
                  : project.category === "MUSIC VIDEOS"
                    ? "MUSIC VIDEO"
                    : project.category === "SOCIAL CONTENT"
                      ? "SOCIAL CONTENT"
                      : "DOCUMENTARY"}
            </p>

            <h3 className='mb-2 font-serif text-xl font-bold leading-snug text-[#F0EDE6] transition-colors group-hover:text-[#D6B66B] max-sm:text-base'>
               {project.title}
            </h3>

            <p className='font-mono text-[11px] tracking-wide text-[#77736D]'>
               {project.year}
               <span className='mx-2'>·</span>
               {project.duration}
            </p>
         </div>
      </article>
   );
}

export default function Work() {
   const [activeCategory, setActiveCategory] = useState("BRAND FILMS");

   const visibleProjects = activeCategory === "ALL" ? projects : projects.filter((project) => project.category === activeCategory);

   const showFeaturedLayout = activeCategory === "ALL";

   return (
      <section id='work' className='relative overflow-hidden bg-[#0B0B0B] py-20 text-[#F0EDE6] sm:py-24'>
         <div className='mx-auto w-[calc(100%-40px)] max-w-[1754px] sm:w-[calc(100%-64px)]'>
            {/* Section heading */}
            <header className='mb-11'>
               <div className='mb-2 flex items-center gap-[18px]'>
                  <span className='h-[39px] w-[39px] shrink-0 rounded-full border border-[#D6B66B]/60' />
                  <p className='font-mono text-[11px] tracking-[0.28em] text-[#D6B66B]'>SELECTED PROJECTS</p>
               </div>

               <h2 className='mb-7 ml-0 font-serif text-5xl font-bold leading-tight tracking-[-0.045em] sm:ml-[56px] sm:text-[58px]'>
                  Recent <span className='italic text-[#D6B66B]'>Work</span>
               </h2>

               {/* Category filters */}
               <div className='flex flex-wrap gap-[10px] sm:ml-[56px]'>
                  {categories.map((category) => (
                     <button
                        key={category}
                        type='button'
                        aria-pressed={activeCategory === category}
                        onClick={() => setActiveCategory(category)}
                        className={`min-h-[33px] border px-5 font-mono text-[10px] tracking-[0.13em] transition-colors duration-200 max-sm:px-3 ${
                           activeCategory === category
                              ? "border-[#D6B66B] text-[#D6B66B]"
                              : "border-[#262626] text-[#88847D] hover:border-[#D6B66B]/60 hover:text-[#D6B66B]"
                        }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </header>

            {/* Project gallery */}
            <div
               className={`grid grid-cols-1 items-start gap-y-7 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-0 ${
                  showFeaturedLayout ? "sm:grid-cols-12" : "sm:grid-cols-2 lg:grid-cols-3"
               }`}
            >
               {visibleProjects.map((project, index) => {
                  const featured = showFeaturedLayout && index === 0;
                  const secondFeatured = showFeaturedLayout && index === 1;

                  return (
                     <div
                        key={project.id}
                        className={
                           showFeaturedLayout
                              ? featured
                                 ? "sm:col-span-7"
                                 : secondFeatured
                                   ? "sm:col-span-5"
                                   : "sm:col-span-4"
                              : "min-w-0"
                        }
                     >
                        <ProjectCard project={project} featured={featured} />
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
