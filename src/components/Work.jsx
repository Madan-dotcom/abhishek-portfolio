import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { Link } from "react-router-dom";

import haldi from "../assets/videos/Haldi Teaser.mp4";
import reel2 from "../assets/videos/Anvik Eshan.mp4";

const projects = [
   {
      id: 1,
      title: "Haldi Teaser",
      category: "BRAND FILMS",
      year: "2026",
      duration: "01:30",
      role: "Video Editing",
      video: haldi,
      featured: true,
   },
   {
      id: 2,
      title: "Neon Drift — Official MV",
      category: "MUSIC VIDEOS",
      year: "2024",
      duration: "04:15",
      role: "Editing",
      video: reel2,
   },
   {
      id: 3,
      title: "FitLife — Reels Series",
      category: "SOCIAL CONTENT",
      year: "2024",
      duration: "Series",
      role: "Editing",
      video: reel2,
   },
   {
      id: 4,
      title: "The Last Craftsmen",
      category: "DOCUMENTARY",
      year: "2023",
      duration: "18:00",
      role: "Editing",
      video: haldi,
   },
   {
      id: 5,
      title: "Pulse — Sports Brand",
      category: "BRAND FILMS",
      year: "2023",
      duration: "02:00",
      role: "Commercial Editing",
      video: reel2,
   },
];

const categories = ["ALL", "BRAND FILMS", "MUSIC VIDEOS", "DOCUMENTARY", "SOCIAL CONTENT"];

function ProjectCard({ project, featured, onOpen }) {
   const previewRef = useRef(null);
   const [previewPlaying, setPreviewPlaying] = useState(false);

   const startPreview = () => {
      const video = previewRef.current;
      if (!video) return;

      video.muted = true;
      video
         .play()
         .then(() => setPreviewPlaying(true))
         .catch(() => {});
   };

   const stopPreview = () => {
      const video = previewRef.current;
      if (!video) return;

      video.pause();
      video.currentTime = 0;
      setPreviewPlaying(false);
   };

   return (
      <article className='group min-w-0 bg-[#0B0B0B]'>
         <div
            className={`relative overflow-hidden bg-[#111111] ${featured ? "aspect-[1.28/1]" : "aspect-[1.58/1]"}`}
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
         >
            <video
               ref={previewRef}
               src={project.video}
               muted
               playsInline
               preload='metadata'
               aria-label={`${project.title} muted preview`}
               className='h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-[1.03]'
               onEnded={() => {
                  if (previewRef.current) {
                     previewRef.current.currentTime = 0;
                  }
                  setPreviewPlaying(false);
               }}
               onClick={() => onOpen(project)}
            />

            <div className='pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25' />

            <button
               type='button'
               aria-label={`Watch ${project.title}`}
               onClick={() => onOpen(project)}
               className='absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/35 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#D6B66B] hover:bg-[#D6B66B] hover:text-black group-hover:scale-105'
            >
               {previewPlaying ? <FaPlay className='ml-0.5 text-xs' /> : <FaPlay className='ml-0.5 text-xs' />}
            </button>

            <span className='pointer-events-none absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] text-white/70 opacity-0 transition-opacity group-hover:opacity-100'>
               PROJECT / {String(project.id).padStart(2, "0")}
            </span>
         </div>

         <div className='min-h-[124px] border-b border-white/[0.03] px-6 py-5 transition-colors duration-300 group-hover:bg-white/[0.025] max-sm:px-3'>
            <p
               className={`mb-3 font-mono text-[10px] tracking-[0.2em] ${
                  project.category === "BRAND FILMS" ? "text-[#D6B66B]" : "text-[#77736D]"
               }`}
            >
               {project.category === "BRAND FILMS" ? "BRAND FILM" : project.category === "MUSIC VIDEOS" ? "MUSIC VIDEO" : project.category}
            </p>

            <button
               type='button'
               onClick={() => onOpen(project)}
               className='mb-2 block text-left font-serif text-xl font-bold leading-snug text-[#F0EDE6] transition-colors hover:text-[#D6B66B] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#D6B66B] max-sm:text-base'
            >
               {project.title}
            </button>

            <p className='font-mono text-[11px] tracking-wide text-[#77736D]'>
               {project.year}
               <span className='mx-2'>·</span>
               {project.duration}
            </p>
         </div>
      </article>
   );
}

function ProjectViewer({ project, onClose, onPrevious, onNext }) {
   const videoRef = useRef(null);
   const [muted, setMuted] = useState(false);

   useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = false;
      video.play().catch(() => {
         // If autoplay with sound is blocked, the visitor can press Play.
      });
   }, [project.id]);

   return (
      <div
         className='fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8'
         role='dialog'
         aria-modal='true'
         aria-label={`${project.title} project viewer`}
         onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
         }}
      >
         <div className='relative w-full max-w-6xl'>
            <div className='mb-4 flex items-start justify-between gap-4'>
               <div>
                  <p className='mb-2 font-mono text-[10px] tracking-[0.25em] text-[#D6B66B]'>
                     {project.category} <span className='mx-2'>/</span> {project.year}
                  </p>
                  <h3 className='font-serif text-2xl text-[#F0EDE6] sm:text-4xl'>{project.title}</h3>
                  <p className='mt-2 text-sm text-white/50'>
                     {project.role} <span className='mx-2'>·</span> {project.duration}
                  </p>
               </div>

               <button
                  type='button'
                  onClick={onClose}
                  aria-label='Close project viewer'
                  className='flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition hover:border-[#D6B66B] hover:text-[#D6B66B]'
               >
                  <FaTimes />
               </button>
            </div>

            <div className='relative overflow-hidden bg-black'>
               <video
                  key={project.id}
                  ref={videoRef}
                  src={project.video}
                  controls
                  autoPlay
                  playsInline
                  preload='auto'
                  className='max-h-[68vh] w-full object-contain'
                  onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
               />
            </div>

            <div className='mt-4 flex items-center justify-between gap-3'>
               <button
                  type='button'
                  onClick={onPrevious}
                  className='inline-flex items-center gap-2 border border-white/15 px-4 py-3 font-mono text-[10px] tracking-[0.15em] text-white/70 transition hover:border-[#D6B66B] hover:text-[#D6B66B]'
               >
                  <FaChevronLeft /> PREVIOUS
               </button>

               <button
                  type='button'
                  onClick={() => {
                     const video = videoRef.current;
                     if (!video) return;
                     video.muted = !video.muted;
                     setMuted(video.muted);
                  }}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  className='flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition hover:border-[#D6B66B] hover:text-[#D6B66B]'
               >
                  {muted ? <FaVolumeMute /> : <FaVolumeUp />}
               </button>

               <button
                  type='button'
                  onClick={onNext}
                  className='inline-flex items-center gap-2 border border-white/15 px-4 py-3 font-mono text-[10px] tracking-[0.15em] text-white/70 transition hover:border-[#D6B66B] hover:text-[#D6B66B]'
               >
                  NEXT <FaChevronRight />
               </button>
            </div>
         </div>
      </div>
   );
}

export default function Work() {
   const [activeCategory, setActiveCategory] = useState("ALL");
   const [selectedProject, setSelectedProject] = useState(null);
   const filteredProjects = useMemo(
      () => (activeCategory === "ALL" ? projects : projects.filter((project) => project.category === activeCategory)),
      [activeCategory],
   );

   const openProject = useCallback((project) => {
      setSelectedProject(project);
   }, []);

   const closeProject = useCallback(() => {
      setSelectedProject(null);
   }, []);

   const showPrevious = useCallback(() => {
      if (!selectedProject) return;

      const index = filteredProjects.findIndex((project) => project.id === selectedProject.id);
      const previousIndex = (index - 1 + filteredProjects.length) % filteredProjects.length;

      setSelectedProject(filteredProjects[previousIndex]);
   }, [selectedProject, filteredProjects]);

   const showNext = useCallback(() => {
      if (!selectedProject) return;

      const index = filteredProjects.findIndex((project) => project.id === selectedProject.id);
      const nextIndex = (index + 1) % filteredProjects.length;

      setSelectedProject(filteredProjects[nextIndex]);
   }, [selectedProject, filteredProjects]);

   useEffect(() => {
      if (!selectedProject) return;

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (event) => {
         if (event.key === "Escape") closeProject();
         if (event.key === "ArrowLeft") showPrevious();
         if (event.key === "ArrowRight") showNext();
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
         document.body.style.overflow = previousOverflow;
         window.removeEventListener("keydown", handleKeyDown);
      };
   }, [selectedProject, closeProject, showPrevious, showNext]);

   const handleCategoryChange = (category) => {
      setActiveCategory(category);
   };

   // Keep the reference layout: a 7/12 featured card, a 5/12 card,
   // then three equal cards. All projects are displayed without Load More.
   const featuredLayout = activeCategory === "ALL";

   return (
      <section id='work' className='relative overflow-hidden bg-[#0B0B0B] py-20 text-[#F0EDE6] sm:py-24'>
         <div className='mx-auto w-[calc(100%-40px)] max-w-[1754px] sm:w-[calc(100%-64px)]'>
            <header className='mb-11'>
               <div className='mb-2 flex items-center gap-[18px]'>
                  <span className='h-[39px] w-[39px] shrink-0 rounded-full border border-[#D6B66B]/60' />
                  <p className='font-mono text-[11px] tracking-[0.28em] text-[#D6B66B]'>SELECTED PROJECTS</p>
               </div>

               <h2 className='mb-7 font-serif text-5xl font-bold leading-tight tracking-[-0.045em] sm:ml-[56px] sm:text-[58px]'>
                  Recent <span className='italic text-[#D6B66B]'>Work</span>
               </h2>

               <div className='flex flex-wrap gap-[10px] sm:ml-[56px]'>
                  {categories.map((category) => (
                     <button
                        key={category}
                        type='button'
                        aria-pressed={activeCategory === category}
                        onClick={() => handleCategoryChange(category)}
                        className={`min-h-[33px] border px-5 font-mono text-[10px] tracking-[0.13em] transition-all duration-300 max-sm:px-3 ${
                           activeCategory === category
                              ? "border-[#D6B66B] bg-[#D6B66B]/[0.04] text-[#D6B66B]"
                              : "border-[#262626] text-[#88847D] hover:border-[#D6B66B]/60 hover:text-[#D6B66B]"
                        }`}
                     >
                        {category}
                     </button>
                  ))}
               </div>
            </header>

            <div
               key={activeCategory}
               className={`grid grid-cols-1 items-start gap-y-8 sm:gap-y-0 ${
                  featuredLayout ? "sm:grid-cols-12" : "sm:grid-cols-2 lg:grid-cols-3"
               }`}
            >
               {filteredProjects.map((project, index) => {
                  const featured = featuredLayout && index === 0;
                  const secondFeatured = featuredLayout && index === 1;

                  return (
                     <div
                        key={project.id}
                        className={`min-w-0 animate-[workFadeIn_400ms_ease_both] ${
                           featuredLayout ? (featured ? "sm:col-span-7" : secondFeatured ? "sm:col-span-5" : "sm:col-span-4") : ""
                        }`}
                        style={{ animationDelay: `${Math.min(index, 5) * 45}ms` }}
                     >
                        <ProjectCard project={project} featured={featured} onOpen={openProject} />
                     </div>
                  );
               })}
            </div>
            <div className='mt-14 flex w-full justify-end'>
               <Link
                  to='/all-work'
                  className='inline-flex items-center justify-center gap-3 border border-[#D6B66B]/60 px-7 py-4 font-mono text-[10px] tracking-[0.2em] text-[#D6B66B] transition-all duration-300 hover:bg-[#D6B66B] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D6B66B]'
               >
                  MORE PROJECTS <span aria-hidden='true'>↗</span>
               </Link>
            </div>
         </div>

         {selectedProject && <ProjectViewer project={selectedProject} onClose={closeProject} onPrevious={showPrevious} onNext={showNext} />}

         <style>{`
        @keyframes workFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </section>
   );
}
