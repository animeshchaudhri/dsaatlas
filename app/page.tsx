"use client";
import { Spotlight } from "../components/Background/Spotilight";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
import BackgroundBeams from "../components/Background/Background";
import Features from "../components/Features/Features";
function App() {
  return (
    <div className="relative">
      <div className="relative z-10 mb-40">
        <Navbar />
        <Spotlight className="absolute top-0 z-0" />
        <Hero />
      </div>
      <Features />

      {/* <BackgroundBeams className="absolute top-0 " /> */}
    </div>
  );
}

export default App;
