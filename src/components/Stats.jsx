const stats = [
   { value: "85+", label: "Projects Completed" },
   { value: "5yr", label: "Experience" },
   { value: "48+", label: "Clients Served" },
   { value: "4K", label: "Max Resolution" },
];

export default function Stats() {
   return (
      <section aria-label='Portfolio statistics' className='relative overflow-hidden border-y border-white/10 bg-[#0C0C0C] text-[#F0EDE6]'>
         <div className='grid grid-cols-2 md:grid-cols-4'>
            {stats.map((stat, index) => (
               <div
                  key={stat.label}
                  className={`group relative flex min-h-[112px] flex-col justify-center items-center
              px-6 py-6 sm:min-h-[130px] sm:px-8 lg:px-32
              ${index !== 1 ? "md:border-r md:border-white/10" : ""}
              ${index < 2 ? "border-b border-white/10 md:border-b-0" : ""}
            `}
               >
                  <span className='font-serif text-4xl leading-none tracking-tight sm:text-5xl'>
                     {stat.value.replace(/[+]/g, "")}
                     {stat.value.includes("+") && <span className='text-[#E7C15F]'>+</span>}
                     {stat.value === "5yr" && <span className='text-[#E7C15F]'></span>}
                  </span>

                  <span className='mt-2 text-[9px] uppercase text-center tracking-[0.2em] text-white/50 transition-colors duration-300 group-hover:text-[#E7C15F] sm:text-[10px]'>
                     {stat.label}
                  </span>

                  <span className='absolute bottom-0 left-0 h-px w-0 bg-[#E7C15F] transition-all duration-500 group-hover:w-full md:hidden' />
               </div>
            ))}
         </div>
      </section>
   );
}
