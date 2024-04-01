import Sheet from "@/components/Sheet/Sheet";
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import SmoothScroll from "@/components/Features/Feature_About/Smooth.jsx";
function page() {
  return (
    <div>
      <SmoothScroll>
        <Navbar />
        <Sheet />
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default page;
