import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Showreel from "./components/Showreel";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   return (
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
   );
}

export default App;
