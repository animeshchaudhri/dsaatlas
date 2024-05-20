import Sheet from "@/components/Sheet/Sheet";
import Navbar from "../../components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
import SmoothScroll from "@/components/Features/Feature_About/Smooth.jsx";
import { auth } from "@clerk/nextjs";
function page() {
  const { userId }: { userId: string | null } = auth();
  return (
    <div>
      {/* <SmoothScroll> */}
      <Navbar />
      <Sheet user_id={userId}/>
      <Footer />
      {/* </SmoothScroll> */}
    </div>
  );
}

export default page;
