import { useState } from "react";
import logo from "../assets/images/Abhishek.png";

const navLinks = [
   { label: "SHOWREEL", href: "#showreel" },
   { label: "WORK", href: "#work" },
   { label: "ABOUT", href: "#about" },
   { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState("");

   const closeMenu = () => {
      setIsMenuOpen(false);
   };

   const handleNavClick = (label) => {
      setActiveMenu(label);
      closeMenu();
   };

   return (
      <header className='fixed inset-x-0 top-0 z-[500] w-full  bg-[#0C0C0C]/90 backdrop-blur-md'>
         <nav
            aria-label='Main navigation'
            className='mx-auto flex min-h-[76px] w-full max-w-[100rem] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16'
         >
            {/* Logo */}
            <a href='#showreel' onClick={closeMenu} aria-label='Abhishek home' className='relative z-10 shrink-0'>
               <img src={logo} alt='Abhishek Logo' className='h-auto w-28 object-contain sm:w-32' />
            </a>

            {/* Desktop Navigation */}
            <ul className='hidden items-center gap-7 md:flex lg:gap-9 xl:gap-12'>
               {navLinks.map((link) => (
                  <li key={link.label}>
                     <a
                        href={link.href}
                        onClick={() => setActiveMenu(link.label)}
                        className={`group relative inline-block py-2 font-mono text-xs tracking-wider transition-colors duration-300 lg:text-sm ${
                           activeMenu === link.label ? "text-[#E7C15F]" : "text-[#F0EDE6] hover:text-[#E7C15F]"
                        }`}
                     >
                        {link.label}

                        <span
                           className={`absolute -bottom-0.5 left-0 h-px bg-[#E7C15F] transition-[width] duration-500 ease-out ${
                              activeMenu === link.label ? "w-full" : "w-0 group-hover:w-full"
                           }`}
                        />
                     </a>
                  </li>
               ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
               type='button'
               onClick={() => setIsMenuOpen((open) => !open)}
               className='relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-white/15 text-[#E7C15F] transition-colors duration-300 hover:border-[#E7C15F] md:hidden'
               aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={isMenuOpen}
               aria-controls='mobile-navigation'
            >
               <span
                  className={`h-px w-5 bg-current transition-transform duration-300 ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
               />
               <span
                  className={`h-px w-5 bg-current transition-transform duration-300 ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
               />
            </button>
         </nav>

         {/* Mobile Navigation */}
         <div
            id='mobile-navigation'
            className={`grid bg-[#0C0C0C] transition-[grid-template-rows,opacity] duration-300 md:hidden ${
               isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
            }`}
            aria-hidden={!isMenuOpen}
         >
            <div className='overflow-hidden'>
               <ul className=' px-5 pb-5 pt-2 sm:px-8'>
                  {navLinks.map((link) => {
                     const isActive = activeMenu === link.label;

                     return (
                        <li key={link.label}>
                           <a
                              href={link.href}
                              tabIndex={isMenuOpen ? 0 : -1}
                              onClick={() => handleNavClick(link.label)}
                              className={`flex items-center justify-between border-b border-white/[0.07] py-4 font-mono text-xs tracking-[0.16em] transition-colors duration-300 ${
                                 isActive ? "text-[#E7C15F]" : "text-[#F0EDE6] hover:text-[#E7C15F]"
                              }`}
                           >
                              <span>{link.label}</span>
                              <span aria-hidden='true' className='text-[#E7C15F]'>
                                 ↗
                              </span>
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
