import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Showreel from "./components/Showreel";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import AllWork from "./components/AllWork";
import FullExperience from "./components/FullExperience";
import { useEffect } from "react";

function App() {
   const location = useLocation();

   useEffect(() => {
      if (location.hash) {
         const timer = setTimeout(() => {
            const section = document.getElementById(location.hash.slice(1));

            section?.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });
         }, 300);

         return () => clearTimeout(timer);
      } else {
         window.scrollTo(0, 0);
      }
   }, [location.pathname, location.hash]);

   return (
      <Routes>
         <Route
            path='/'
            element={
               <div>
                  <Navbar />
                  <main>
                     <Hero />
                     <Stats />
                     <Tools />
                     <Showreel />
                     <Work />
                     <About />
                     <Contact />
                  </main>
                  <Footer />
               </div>
            }
         />

         <Route path='/all-work' element={<AllWork />} />

         <Route path='/about' element={<FullExperience />} />
      </Routes>
   );
}

export default App;
