import { Spotlight } from "./components/Background/Spotilight.tsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import BackgroundBeams from "./components/Background/Background.tsx";
function App() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Navbar />
        <Spotlight className="fixed top-0" />
        <Hero />
      </div>

      <BackgroundBeams className="absolute top-0 " />
    </div>
  );
}

export default App;
