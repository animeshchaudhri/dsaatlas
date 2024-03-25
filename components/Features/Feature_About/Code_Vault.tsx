"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Placehold from "../../../public/lc1.png";
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
      <div className=" showcase overflow-hidden container  image-container  transform rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-500 p-2 ">
        <Image src={Placehold} priority={true} alt="somthing" />
      </div>
    </motion.div>
  );
}

export default Code_Vault;
