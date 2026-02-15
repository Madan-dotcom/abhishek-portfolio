export default function Home() {
   return (
      <main className='w-full h-screen relative overflow-hidden'>
         {/* Background Showreel Video */}
         <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover'>
            <source src='/videos/Abhishek.mp4' type='video/mp4' />
         </video>

         {/* Dark Overlay */}
         <div className='absolute inset-0 bg-black/50'></div>

         {/* Hero Content */}
         <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>Cinematic Video Editor</h1>

            <p className='max-w-xl text-lg md:text-xl text-gray-300 mb-8'>
               Crafting cinematic travel films, reels, and engaging stories through professional video editing.
            </p>

            <div className='flex gap-4'>
               <a href='/portfolio' className='bg-amber-300 text-black px-6 py-3 rounded font-semibold'>
                  View Work
               </a>

               <a href='/contact' className='border border-white px-6 py-3 rounded'>
                  Hire Me
               </a>
            </div>
         </div>
      </main>
   );
}
