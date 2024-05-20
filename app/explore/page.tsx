import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import Explore from "./components/Explore";
import { auth } from "@clerk/nextjs";

function page() {
  
  return (
    <>
      <Navbar />
      <Explore  />
      <Footer />
    </>
  );
}

export default page;
