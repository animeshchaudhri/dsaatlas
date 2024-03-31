"use client";
import React from "react";

import Textgen from "./Textgen.tsx";
import { motion, useMotionValue, useTransform } from "framer-motion";
const words = ` // inital bootup of editor  🦄🦄  
 bogoSort(std::vector<int>& arr) {
  auto shuffle = [](std::vector<int>& arr) {
  unsigned seed = now().time_since_epoch().count();   
  shuffle(arr.begin(), arr.end(),default_random_engine(seed)); 
  };`;
function Editor() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event) => {
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
    <>
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
        <div className=" codeEditorWindow  mt-20 mb-20 h-[400px] overflow-hidden rounded-xl border border-gray-800 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition duration-500 lg:mt-0">
          <div className="flex justify-between bg-[#12151D]">
            <div className="flex h-8 flex-row items-center space-x-2 bg-[#12151D] px-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <a
              className=" mt-1 mr-1.5 flex-end z-20 rounded-md border border-gray-500 px-4 py-1 text-xs text-white transition duration-200 hover:bg-gray-900"
              href=""
            >
              Preview
            </a>
          </div>
          <div className="hide-scrollbar relative h-[370px] w-full overflow-auto rounded-sl bg-[#011627] xl:w-[100%]">
            <pre
              className="hide-scrollbar mb-10 px-4 pt-4 text-xs language-javascript"
              tabIndex="0"
            ></pre>
            <div className="ml-1">
              <Textgen
                words={words}
                className="{ dark:text-white text-black text-xl leading-snug tracking-wide overflow-hidden}"
              />
            </div>

            <div></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Editor;
