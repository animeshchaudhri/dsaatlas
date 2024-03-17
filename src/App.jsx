import Background from "./components/Background/Background.jsx";
import { Spotlight } from "./components/Background/Spotilight.tsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar classname="w-full" />
      <Spotlight />
      {/* <Background/> */}
    </>
  );
}

export default App;
