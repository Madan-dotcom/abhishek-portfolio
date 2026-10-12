import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Showreel from "./components/Showreel";
import Work from "./components/Work";

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
         </main>
      </div>
   );
}

export default App;
