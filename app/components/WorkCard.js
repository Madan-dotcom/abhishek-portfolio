export default function WorkCard({
   title = "Cinematic Travel Film",
   description = "A cinematic travel edit featuring smooth transitions, color grading, and storytelling shots captured during a mountain road trip.",
   video = "/videos/Abhishek.mp4",
}) {
   return (
      <div className='relative bg-neutral-900 rounded-lg overflow-hidden'>
         {/* Video */}
         <video controls className='w-full h-96 object-cover'>
            <source src={video} type='video/mp4' />
         </video>

         {/* Dark Overlay */}
         <div className='absolute inset-0 bg-black/50'></div>

         {/* Text Content */}
         <div className='absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6'>
            <h2 className='text-3xl md:text-4xl font-semibold text-white mb-3'>{title}</h2>

            <p className='max-w-md text-gray-300 text-sm md:text-base'>{description}</p>
         </div>
      </div>
   );
}
