import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Tools from "./components/Tools";

function App() {
   return (
      <div>
         <Navbar />
         <main>
            <Hero />
            <Stats />
            <Tools />
         </main>
      </div>
   );
}

export default App;
