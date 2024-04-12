// "use client";
// import React, { useRef } from "react";
// import {
//   useScroll,
//   useTransform,
//   motion,
//   MotionValue,
//   easeIn,
// } from "framer-motion";
// import SmoothScroll from "./Smooth.jsx";
// import { Sidebar } from "@/components/ui/Navbar/Sidebar";
// export type Playlist = (typeof playlists)[number];
// export const playlists = [
//   "Arrays 101",
//   "Linked Lists",
//   "Stacks ",
//   "Queues",
//   "Graph ",
//   "Sorting",
//   "Searching ",
//   "Greedy",
//   "Hashing",
//   "Heap",
// ];

// export const ContainerScroll = ({
//   titleComponent,
//   children,
// }: {
//   titleComponent: string | React.ReactNode;
//   children: React.ReactNode;
// }) => {
//   const containerRef = useRef<any>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//   });
//   const [isMobile, setIsMobile] = React.useState(false);

//   React.useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => {
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   const scaleDimensions = () => {
//     return isMobile ? [0.7, 0.9] : [1.05, 1];
//   };

//   const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
//   const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
//   const translate = useTransform(scrollYProgress, [0, 1], [0, -60]);
//   const translate2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   return (
//     <div
//       className=" flex items-center justify-center relative  "
//       ref={containerRef}
//     >
//       <div
//         className=" w-full relative"
//         style={{
//           perspective: "1000px",
//         }}
//       >
//         <Header translate={translate} titleComponent={titleComponent} />
//         <Card rotate={rotate} translate={translate2} scale={scale}>
//           {children}
//         </Card>
//       </div>
//     </div>
//   );
// };

// export const Header = ({ translate, titleComponent }: any) => {
//   return (
//     <motion.div
//       style={{
//         translateY: translate,
//       }}
//       className="div max-w-5xl mx-auto text-center"
//     >
//       {titleComponent}
//     </motion.div>
//   );
// };

// export const Card = ({
//   rotate,
//   translate,
//   scale,
//   children,
// }: {
//   rotate: MotionValue<number>;
//   scale: MotionValue<number>;
//   translate: MotionValue<number>;
//   children: React.ReactNode;
// }) => {
//   return (
//     <>
//       <motion.div
//         style={{
//           rotateX: rotate,

//           scale,
//           boxShadow:
//             "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
//         }}
//         className="max-w-5xl   mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
//       >
//         <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
//           <div className="grid lg:grid-cols-5 ">
//             <Sidebar playlists={playlists} className="hidden lg:block " />

//             <motion.div
//               style={{ translateY: translate }}
//               className="col-span-3 lg:col-span-4 h-full"
//             >
//               {children}
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Placehold from "@/public/lc1.png";
function Code_Vault() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  const handleMouseMove = (event: any) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      key="card"
      style={{
        perspective: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" showcase overflow-hidden container  mx-10 max-w-4xl image-container  transform rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-500 p-2 ">
        <Image src={Placehold} priority={true} alt="somthing" />
      </div>
    </motion.div>
  );
}

export default Code_Vault;
