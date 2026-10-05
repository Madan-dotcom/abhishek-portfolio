import { useState } from "react";
import logo from "../assets/images/Abhishek.png";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const closeMenu = () => {
      setIsMenuOpen(false);
   };

   return (
      <nav className='fixed top-0 left-0 right-0 z-[500] w-full border-b border-transparent transition-all  duration-500 '>
         <div className='max-w-[100rem] mx-auto px-6 py-4  flex items-center justify-between text-[#f6c400]'>
            {/* Logo */}
            <a href='/' onClick={closeMenu}>
               <img src={logo} alt='Abhishek Logo' className='w-32 h-auto' />
            </a>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex items-center gap-8 text-sm'>
               <li>
                  <a
                     href='#showreel'
                     className='transition-colors  duration-500 hover:text-[#c2ae5e] font-mono tracking-wide relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-500 after:ease-out hover:after:w-full'
                  >
                     SHOWREEL
                  </a>
               </li>

               <li>
                  <a
                     href='#work'
                     className='transition-colors  duration-500 hover:text-[#c2ae5e] font-mono tracking-wide relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-500 after:ease-out hover:after:w-full '
                  >
                     WORK
                  </a>
               </li>

               <li>
                  <a
                     href='#about'
                     className='transition-colors  duration-500 hover:text-[#c2ae5e] font-mono tracking-wide relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-500 after:ease-out hover:after:w-full '
                  >
                     ABOUT
                  </a>
               </li>

               <li>
                  <a
                     href='#contact'
                     className='transition-colors  duration-500 hover:text-[#c2ae5e] font-mono tracking-wide relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-500 after:ease-out hover:after:w-full '
                  >
                     CONTACT
                  </a>
               </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
               type='button'
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className='md:hidden text-2xl'
               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
               aria-expanded={isMenuOpen}
            >
               {isMenuOpen ? "✕" : "☰"}
            </button>
         </div>
         {/* Mobile Navigation */}
         {isMenuOpen && (
            <div className='md:hidden border-t border-white/10 px-6 py-6'>
               <ul className='flex flex-col items-center justify-center gap-6 text-sm text-[#f6c400]'>
                  <li>
                     <a
                        href='#showreel'
                        onClick={closeMenu}
                        className='group relative inline-block font-mono tracking-wide transition-colors duration-500 hover:text-[#c2ae5e]'
                     >
                        SHOWREEL
                        <span className='absolute left-0 -bottom-1 h-[1px] w-0 bg-yellow-300 transition-all duration-500 ease-out group-hover:w-full'></span>
                     </a>
                  </li>

                  <li>
                     <a
                        href='#work'
                        onClick={closeMenu}
                        className='font-mono tracking-wide transition-colors duration-500 hover:text-[#c2ae5e]'
                     >
                        WORK
                     </a>
                  </li>

                  <li>
                     <a
                        href='#about'
                        onClick={closeMenu}
                        className='font-mono tracking-wide transition-colors duration-500 hover:text-[#c2ae5e]'
                     >
                        ABOUT
                     </a>
                  </li>

                  <li>
                     <a
                        href='#contact'
                        onClick={closeMenu}
                        className='font-mono tracking-wide transition-colors duration-500 hover:text-[#c2ae5e]'
                     >
                        CONTACT
                     </a>
                  </li>
               </ul>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
