import React from "react";
import CAARD from "../../ui/Cards/CAARD";
import Features_List from "./Features_List";
import Image from "next/image";
import Placeholdy from "@/public/interactive-terminal.png";
import Lamp from "../../Background/Lamp/Lamp";

function Features_Main() {
  const items = [
    { id: 1, name: "Strings" },
    { id: 2, name: "Data Types" },
    { id: 3, name: "Dynamic Programming" },
    { id: 4, name: "Backtracking" },
    { id: 5, name: "Sliding Window" },
    { id: 6, name: "Two Pointers" },
    { id: 7, name: "Trees" },
    { id: 8, name: "Graphs" },
    { id: 9, name: "Array" },
    { id: 10, name: "String" },
    { id: 11, name: "Hash Table" },
    { id: 12, name: "Dynamic Programming" },
    { id: 13, name: "Math" },
    { id: 14, name: "Sorting" },
    { id: 15, name: "Greedy" },
    { id: 16, name: "Depth-First Search" },
    { id: 17, name: "Database" },
    { id: 18, name: "Binary Search" },
    { id: 19, name: "Breadth-First Search" },
    { id: 20, name: "Tree" },
    { id: 21, name: "Matrix" },
    { id: 22, name: "Bit Manipulation" },
    { id: 23, name: "Two Pointers" },
    { id: 24, name: "Binary Tree" },
  ];
  return (
    <>
      <div>
        <div className="relative overflow-hidden bg-[#1E2028] px-4 py-20 lg:py-40 ">
          <div className=" mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2  ">
            <div className="flex flex-col  justify-center ">
              <h1 className="mb-6 text-left text-2xl font-semibold leading-snug text-white lg:text-4xl">
                Practice Algorithmic Questions
              </h1>
              <p className=" mb-6 max-w-lg text-left text-sm text-gray-400 lg:text-base">
                Algorithmic questions are everywhere and even we dont like it.
                But since companies are asking, we have a long list of questions
                that are popularly asked in tech interviews. Some of the
                concepts that are tested are:
              </p>
              <Features_List items={items} />
            </div>
            <div className="image-container mx-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:absolute lg:-right-20 lg:mx-0 lg:min-w-min xl:max-w-2xl">
              <Image
                src={Placeholdy}
                alt="somthing"
                priority={true}
                className="  mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
        {/* <Lamp /> */}
      </div>
    </>
  );
}

export default Features_Main;
