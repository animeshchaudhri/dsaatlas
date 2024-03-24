import React from "react";
import CAARD from "../../Cards/CAARD";
import Features_List from "./Features_List";

function Features_Main() {
  const items = [
    { name: "Strings" },
    { name: "Data Types" },
    { name: "Dynamic Programming" },
    { name: "Backtracking" },
    { name: "Sliding Window" },
    { name: "Two Pointers" },
    { name: "Trees" },
    { name: "Graphs" },
    // Add more items as needed
  ];
  return (
    <>
      <div>
        <div className="w-full h-full bg-[#1E2028] p-4 overflow-hidden">
          <div className=" mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 mt-10 ">
            <div className="flex flex-col justify-center ">
              <h1 className="mb-6 text-left text-2xl font-semibold lg:text-4xl">
                Practice Algorithmic Questions
              </h1>
              <p className=" mb-6 max-w-lg text-left text-sm text-gray-400 lg:text-base">
                Algorithmic questions are everywhere and even we don't like it.
                But since companies are asking, we have a long list of questions
                that are popularly asked in tech interviews. Some of the
                concepts that are tested are:
              </p>
              <Features_List items={items} />
            </div>
            <div className="container">
              <CAARD />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features_Main;
