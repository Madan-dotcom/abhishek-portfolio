import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from "react-icons/fa";

import haldi from "../assets/videos/Haldi Teaser.mp4";
import reel2 from "../assets/videos/Anvik Eshan.mp4";

// Replace "Second Reel.mp4" above with your actual second filename.
const reels = [
   { src: haldi, title: "Haldi Teaser" },
   { src: reel2, title: "Reel 02" },
];

export default function Showreel() {
   const videoRef = useRef(null);
   const playerRef = useRef(null);
   const shouldAutoplayNext = useRef(false);

   const [currentReel, setCurrentReel] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [currentTime, setCurrentTime] = useState(0);
   const [duration, setDuration] = useState(0);
   const [muted, setMuted] = useState(false);
   const [volume, setVolume] = useState(1);
   const [videoError, setVideoError] = useState(false);

   const activeReel = reels[currentReel];

   const formatTime = (time) => {
      if (!Number.isFinite(time)) return "0:00";

      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);

      return `${minutes}:${String(seconds).padStart(2, "0")}`;
   };

   // Load the next reel and start playback after its source is ready.
   useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      video.load();
      setCurrentTime(0);
      setDuration(0);
      setVideoError(false);

      if (shouldAutoplayNext.current) {
         shouldAutoplayNext.current = false;

         const playWhenReady = () => {
            video.play().catch((error) => {
               console.error("Could not play the next reel:", error);
               setIsPlaying(false);
            });
         };

         video.addEventListener("canplay", playWhenReady, {
            once: true,
         });

         return () => {
            video.removeEventListener("canplay", playWhenReady);
         };
      }
   }, [currentReel]);

   const togglePlayback = async () => {
      const video = videoRef.current;
      if (!video || videoError) return;

      try {
         if (video.paused) {
            await video.play();
         } else {
            video.pause();
         }
      } catch (error) {
         console.error("Showreel playback failed:", error);
      }
   };

   const handleEnded = () => {
      if (currentReel < reels.length - 1) {
         shouldAutoplayNext.current = true;
         setCurrentReel((previous) => previous + 1);
      } else {
         setIsPlaying(false);
         setCurrentTime(0);
      }
   };

   const handleSeek = (event) => {
      const video = videoRef.current;
      if (!video || !Number.isFinite(video.duration)) return;

      const nextTime = Number(event.target.value);
      video.currentTime = nextTime;
      setCurrentTime(nextTime);
   };

   const toggleMute = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = !video.muted;
      setMuted(video.muted);
   };

   const handleVolume = (event) => {
      const nextVolume = Number(event.target.value);
      const video = videoRef.current;

      setVolume(nextVolume);

      if (video) {
         video.volume = nextVolume;
         video.muted = nextVolume === 0;
         setMuted(video.muted);
      }
   };

   const toggleFullscreen = async () => {
      const player = playerRef.current;
      if (!player) return;

      try {
         if (!document.fullscreenElement) {
            await player.requestFullscreen();
         } else {
            await document.exitFullscreen();
         }
      } catch (error) {
         console.error("Fullscreen unavailable:", error);
      }
   };

   return (
      <section id='showreel' className='relative overflow-hidden bg-[#0C0C0C] px-5 py-16 text-[#F0EDE6] sm:px-8 md:px-12 md:py-4'>
         <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#E7C15F]/[0.05] blur-[120px]'
         />

         <div className='relative mx-auto max-w-7xl'>
            {/* Heading */}
            <div className='mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end'>
               <div>
                  <p className='mb-5 text-[10px] uppercase tracking-[0.35em] text-[#E7C15F] sm:text-xs'>A selection of my work</p>

                  <h2 className='font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl'>
                     Stories told
                     <br />
                     through <span className='italic text-[#E7C15F]'>motion.</span>
                  </h2>

                  <div className='showreel-accent mt-6 h-px w-20 bg-[#E7C15F]' />
               </div>

               <p className='max-w-md text-sm leading-7 text-white/55'>
                  Commercial edits, brand films, and cinematic stories — crafted frame by frame to make every second count.
               </p>
            </div>

            {/* Single player for both reels */}
            <div ref={playerRef} className='showreel-player relative mx-auto max-w-7xl overflow-hidden border border-white/10 bg-[#111111]'>
               <div className='relative aspect-video w-full overflow-hidden bg-black'>
                  <video
                     key={activeReel.src}
                     ref={videoRef}
                     className='absolute inset-0 h-full w-full object-contain sm:object-cover'
                     src={activeReel.src}
                     playsInline
                     preload='metadata'
                     onPlay={() => setIsPlaying(true)}
                     onPause={() => setIsPlaying(false)}
                     onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
                     onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
                     onDurationChange={(event) => setDuration(event.currentTarget.duration)}
                     onEnded={handleEnded}
                     onError={() => {
                        setVideoError(true);
                        setIsPlaying(false);
                        console.error("Could not load video:", activeReel.src);
                     }}
                  />

                  {!isPlaying && !videoError && (
                     <button
                        type='button'
                        onClick={togglePlayback}
                        aria-label='Play showreel with sound'
                        className='absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#E7C15F] bg-black/70 text-[#E7C15F] transition duration-300 hover:scale-110 hover:bg-[#E7C15F] hover:text-black sm:h-20 sm:w-20'
                     >
                        <FaPlay className='ml-1' size={21} />
                     </button>
                  )}

                  {videoError && (
                     <div className='absolute inset-0 flex items-center justify-center bg-[#111111] p-6 text-center'>
                        <div>
                           <p className='font-serif text-2xl text-[#E7C15F]'>Video unavailable</p>
                           <p className='mt-3 text-sm text-white/60'>Check that the video file exists and is supported.</p>
                        </div>
                     </div>
                  )}

                  <div className='pointer-events-none absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.25em] text-white/60 sm:bottom-6 sm:left-6'>
                     ABHISHEK / {activeReel.title}
                  </div>
               </div>

               {/* Controls */}
               <div className='flex flex-wrap items-center gap-3 border-t border-white/10 bg-[#101010] px-4 py-4 sm:flex-nowrap sm:gap-5 sm:px-6'>
                  <button
                     type='button'
                     onClick={togglePlayback}
                     disabled={videoError}
                     aria-label={isPlaying ? "Pause showreel" : "Play showreel"}
                     className='shrink-0 text-[#E7C15F] transition hover:text-[#F0EDE6] disabled:opacity-40'
                  >
                     {isPlaying ? <FaPause size={15} /> : <FaPlay size={15} />}
                  </button>

                  <span className='min-w-[85px] text-xs tabular-nums text-white/65'>
                     {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <input
                     aria-label='Seek through current reel'
                     type='range'
                     min='0'
                     max={duration || 0}
                     step='0.1'
                     value={Math.min(currentTime, duration || 0)}
                     onChange={handleSeek}
                     disabled={!duration || videoError}
                     className='gold-range min-w-0 flex-1'
                  />

                  <button
                     type='button'
                     onClick={toggleMute}
                     aria-label={muted ? "Unmute showreel" : "Mute showreel"}
                     className='shrink-0 text-[#F0EDE6] transition hover:text-[#E7C15F]'
                  >
                     {muted || volume === 0 ? <FaVolumeMute size={17} /> : <FaVolumeUp size={17} />}
                  </button>

                  <input
                     aria-label='Showreel volume'
                     type='range'
                     min='0'
                     max='1'
                     step='0.05'
                     value={muted ? 0 : volume}
                     onChange={handleVolume}
                     className='gold-range hidden w-20 sm:block'
                  />

                  <button
                     type='button'
                     onClick={toggleFullscreen}
                     aria-label='Toggle fullscreen'
                     className='shrink-0 text-[#F0EDE6] transition hover:text-[#E7C15F]'
                  >
                     <FaExpand size={16} />
                  </button>
               </div>
            </div>

            {/* Reel selector */}
            <div className='mt-5 flex flex-wrap items-center gap-3'>
               {reels.map((reel, index) => (
                  <button
                     key={reel.title}
                     type='button'
                     onClick={() => {
                        shouldAutoplayNext.current = false;
                        setCurrentReel(index);
                        setIsPlaying(false);
                     }}
                     className={`border px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition ${
                        currentReel === index
                           ? "border-[#E7C15F] text-[#E7C15F]"
                           : "border-white/15 text-white/50 hover:border-[#E7C15F]/60 hover:text-white"
                     }`}
                  >
                     0{index + 1} / {reel.title}
                  </button>
               ))}
            </div>

            <div className='mt-6 flex flex-col justify-between gap-3 border-b border-white/10 pb-7 sm:flex-row sm:items-center'>
               <p className='text-[9px] uppercase tracking-[0.2em] text-white/35'>Commercials / Brand Films / Visual Stories</p>
               <p className='text-[9px] uppercase tracking-[0.2em] text-[#E7C15F]/75'>Every frame has a purpose.</p>
            </div>
         </div>

         <style>{`
        .showreel-player {
          box-shadow: 0 25px 90px rgba(0, 0, 0, 0.3);
          animation: showreel-enter 800ms ease both;
        }

        .gold-range {
          height: 3px;
          cursor: pointer;
          accent-color: #E7C15F;
        }

        .gold-range:disabled {
          cursor: not-allowed;
          opacity: 0.3;
        }

        .showreel-accent {
          transform: scaleX(0);
          transform-origin: left;
          animation: showreel-line 900ms ease 200ms forwards;
        }

        @keyframes showreel-line {
          to { transform: scaleX(1); }
        }

        @keyframes showreel-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .showreel-accent,
          .showreel-player {
            animation: none;
            transform: none;
          }
        }
      `}</style>
      </section>
   );
}
