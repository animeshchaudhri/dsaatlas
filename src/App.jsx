import { Spotlight } from "./components/Background/Spotilight.tsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Spotlight className="fixed top-0" />
      <Hero />
     
    </>
  );
}

export default App;
