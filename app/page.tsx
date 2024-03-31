import { Spotlight } from "../components/Background/Spotilight";
import Navbar from "../components/ui/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/ui/Footer/Footer";
function App() {
  return (
    <>
      <div>
        <div className="relative w-full z-10 ">
          <div className="w-full h-[50rem] absolute top-0 z-0 opacity-35 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"></div>
          <Navbar />
          <Spotlight className="absolute top-0 z-0" />
          <Hero />
        </div>
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default App;
