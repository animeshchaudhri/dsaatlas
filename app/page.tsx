import { Spotlight } from "../components/Background/Spotilight";
import Navbar from "../components/ui/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import BackgroundBeams from "../components/Background/Background";
import Features from "../components/Features/Features";
import Footer from "../components/ui/Footer/Footer";
function App() {
  return (
    <>
      <div className="relative">
        <div className="relative z-10 ">
          <Navbar />
          <Spotlight className="absolute top-0 z-0" />
          <Hero />
        </div>
        <Features />

        {/* <BackgroundBeams className="absolute top-0 " /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
