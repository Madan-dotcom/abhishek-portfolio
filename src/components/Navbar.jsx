import { useEffect, useState } from "react";
import logo from "../assets/images/Abhishek.png";

const navLinks = [
   { label: "Home", href: "#showreel" },
   { label: "Work", href: "#work" },
   { label: "About", href: "#about" },
   { label: "Testimonials", href: "#testimonials" },
   { label: "Contact", href: "#contact" },
];

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeMenu, setActiveMenu] = useState("Home");
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 30);
      };

      window.addEventListener("scroll", handleScroll, {
         passive: true,
      });

      handleScroll();

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   useEffect(() => {
      const handleEscape = (event) => {
         if (event.key === "Escape") {
            setIsMenuOpen(false);
         }
      };

      window.addEventListener("keydown", handleEscape);

      return () => {
         window.removeEventListener("keydown", handleEscape);
      };
   }, []);

   const handleNavClick = (label) => {
      setActiveMenu(label);
      setIsMenuOpen(false);
   };

   return (
      <header
         className={`fixed inset-x-0 top-0 z-[500] w-full
        transition-all duration-300
        ${
           isScrolled
              ? "bg-[#080808]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px]"
        }`}
      >
         <nav
            aria-label='Main navigation'
            className='mx-auto flex min-h-[68px] w-full max-w-[100rem]
          items-center justify-between gap-4
          px-5 sm:px-8 lg:min-h-[68px] lg:px-12 xl:px-16'
         >
            {/* Logo */}
            <a href='#showreel' onClick={() => handleNavClick("Home")} aria-label='Abhishek home' className='relative z-10 shrink-0'>
               <img src={logo} alt='Abhishek Video Editor' className='h-auto w-[118px] object-contain sm:w-[145px]' />
            </a>

            {/* Desktop Navigation */}
            <ul
               className='hidden h-[68px] items-center gap-6
          md:flex lg:gap-8 xl:gap-11'
            >
               {navLinks.map((link) => (
                  <li key={link.label} className='h-full'>
                     <a
                        href={link.href}
                        onClick={() => handleNavClick(link.label)}
                        className={`group relative flex h-full items-center
                  font-sans text-[12px] font-medium
                  transition-colors duration-300 lg:text-[13px]
                  ${activeMenu === link.label ? "text-white" : "text-white/80 hover:text-white"}`}
                     >
                        {link.label}

                        <span
                           className={`absolute bottom-[15px] left-0 h-[2px]
                    bg-[#ff3939] transition-all duration-300
                    ${activeMenu === link.label ? "w-full" : "w-0 group-hover:w-full"}`}
                        />
                     </a>
                  </li>
               ))}
            </ul>

            {/* Contact CTA — Desktop */}
            <a
               href='#contact'
               onClick={() => handleNavClick("Contact")}
               className='hidden min-h-[40px] shrink-0 items-center
            justify-center gap-3 rounded-full border
            border-white/70 px-4 text-[11px] font-semibold
            text-white transition-all duration-300
            hover:border-white hover:bg-white hover:text-black
            sm:flex sm:px-5 lg:px-7 lg:text-xs'
            >
               Let's Work Together
               <span
                  aria-hidden='true'
                  className='text-base transition-transform duration-300
              group-hover:translate-x-1'
               >
                  →
               </span>
            </a>

            {/* Mobile Menu Button */}
            <button
               type='button'
               onClick={() => setIsMenuOpen((open) => !open)}
               aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={isMenuOpen}
               aria-controls='mobile-navigation'
               className='relative z-10 flex h-10 w-10 shrink-0
            flex-col items-center justify-center gap-[6px]
            rounded-full border border-white/25 text-white
            transition-colors duration-300
            hover:border-[#ff3939] md:hidden'
            >
               <span
                  className={`h-px w-5 bg-current transition-transform duration-300
              ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
               />
               <span
                  className={`h-px w-5 bg-current transition-transform duration-300
              ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
               />
            </button>
         </nav>

         {/* Mobile Navigation */}
         <div
            id='mobile-navigation'
            aria-hidden={!isMenuOpen}
            className={`grid overflow-hidden bg-[#080808]/98
          transition-all duration-300 md:hidden
          ${isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}
         >
            <div className='min-h-0 overflow-hidden'>
               <ul className='px-5 pb-5 pt-2 sm:px-8'>
                  {navLinks.map((link) => (
                     <li key={link.label}>
                        <a
                           href={link.href}
                           tabIndex={isMenuOpen ? 0 : -1}
                           onClick={() => handleNavClick(link.label)}
                           className={`flex items-center justify-between
                    border-b border-white/[0.08] py-4
                    font-mono text-xs tracking-[0.16em]
                    transition-colors duration-300
                    ${activeMenu === link.label ? "text-[#ff3939]" : "text-white/85 hover:text-[#ff3939]"}`}
                        >
                           {link.label}
                           <span aria-hidden='true'>↗</span>
                        </a>
                     </li>
                  ))}

                  <li className='pt-5'>
                     <a
                        href='#contact'
                        tabIndex={isMenuOpen ? 0 : -1}
                        onClick={() => handleNavClick("Contact")}
                        className='flex min-h-11 items-center justify-between
                  rounded-full border border-white/60 px-5
                  text-sm text-white transition-colors
                  hover:bg-white hover:text-black'
                     >
                        Let's Work Together
                        <span aria-hidden='true'>→</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
