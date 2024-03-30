"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import "./Lamp.css";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function Lamp() {
//   return (

//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//       ></motion.h1>

//   );
// }

export const Lamp = () => {
  type WrapperStyle = CSSProperties & {
    "--bottom": string;
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="lampcontainer -z-10 flex rotate-180 opacity-50 dark:opacity-100">
      <div
        className={clsx(
          { "scale-[3] md:scale-[2] 2xl:scale-[1.55]": inView },
          "lamp translate-z-0 translate-y-[-180px] rotate-180 scale-50 animate-none duration-1000"
        )}
        ref={ref}
        style={
          {
            "--bottom": "#4188e6",
          } as WrapperStyle
        }
      />
    </div>
  );
};
export default Lamp;
