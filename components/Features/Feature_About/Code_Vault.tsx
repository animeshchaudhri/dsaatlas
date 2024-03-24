"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Placehold from "../../../public/lc1.png";
function Code_Vault() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

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
      <div className=" showcase overflow-hidden container ">
        <Image src={Placehold} alt="somthing" />
      </div>
    </motion.div>
  );
}

export default Code_Vault;
