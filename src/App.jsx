import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Showreel from "./components/Showreel";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AllWork from "./components/AllWork";
import FullExperience from "./components/FullExperience";

function App() {
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
                     <Footer />
                  </main>
               </div>
            }
         />

         <Route path='/all-work' element={<AllWork />} />

         <Route path='/about' element={<FullExperience />} />
      </Routes>
   );
}

export default App;
