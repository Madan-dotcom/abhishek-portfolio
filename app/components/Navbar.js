"use client";

import { useState } from "react";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
   subsets: ["latin"],
   weight: "400",
});

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <nav className='w-full bg-black/80 backdrop-blur-md text-white fixed top-8 left-0 z-50'>
         <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
            {/* Logo */}
            <Link href='/' className={`${greatVibes.className} text-4xl md:text-5xl text-amber-300 leading-none`}>
               Abhishek <br />
               <span className='pl-12'>Edits</span>
            </Link>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-8 text-lg'>
               <Link href='/work'>Work</Link>
               <Link href='/about'>About</Link>
               <Link href='/contact' className='bg-amber-300 text-black px-4 py-2 rounded'>
                  Contact
               </Link>
            </div>

            {/* Hamburger / Cross Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden relative w-8 h-8 flex flex-col justify-center items-center'>
               <span
                  className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"}`}
               ></span>

               <span className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>

               <span
                  className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"}`}
               ></span>
            </button>
         </div>

         {/* Mobile Menu with Smooth Animation */}
         <div
            className={`md:hidden bg-black/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
               menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
         >
            <div className='flex flex-col items-center px-6 py-6 space-y-5 text-lg'>
               <Link href='/work' onClick={() => setMenuOpen(false)}>
                  Work
               </Link>

               <Link href='/about' onClick={() => setMenuOpen(false)}>
                  About
               </Link>

               <Link href='/contact' className='bg-amber-300 text-black px-4 py-2 rounded w-fit' onClick={() => setMenuOpen(false)}>
                  Contact
               </Link>
            </div>
         </div>
      </nav>
   );
}
