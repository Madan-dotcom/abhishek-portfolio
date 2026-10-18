const Footer = () => {
   return (
      <footer className='relative w-full bg-[#0C0C0C] text-[#F0EDE6]'>
         {/* Top divider */}
         <div className='h-px w-full bg-white/10' />

         {/* Footer content */}
         <div className='relative flex min-h-[76px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-[34px]'>
            {/* Copyright */}
            <p className='font-mono text-[9px] tracking-[1.5px] text-[#A6A098] sm:text-[10px]'>© 2026 Abhishek. All rights reserved.</p>
            {/* Right-side tagline and developer credit */}
            <div className='ml-auto flex flex-col items-end gap-1'>
               <p className='font-serif text-[12px] italic text-[#716D67] sm:text-[14px]'>Crafting motion, one frame at a time.</p>

               <p className='text-[9px] tracking-[1.2px] text-[#A6A098]'>
                  DESIGNED & DEVELOPED BY <span className='text-[#D7B45A]'>MADAN</span>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
