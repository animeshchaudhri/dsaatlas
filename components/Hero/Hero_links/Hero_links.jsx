"use client";
import React from "react";

function Hero_links() {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-semibold leading-10 text-white">
        Ace your next{" "}
        <span className="text-white xl:hidden">technical interview</span>
        <svg
          className="rough-annotation"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "visible",
            pointerEvents: "none",
            width: "100px",
            height: "100px",
          }}
        ></svg>
        <span style={{ position: "relative" }}>
          <span className="hidden text-white xl:inline-block">
            technical interview
          </span>
        </span>{" "}
        with confidence.
      </h1>

      <p className="mb-6 max-w-xl leading-7 text-gray-400">
        Practice your skills the way they are meant to be practiced - in a real
        interview setting. DSA Atlas is a FREE platform that provides the most
        popular Data Structures, Algorithms and Front-end technical questions
        asked in a Technical Interview Round.
      </p>
      <p className="mb-6 text-base text-gray-400">
        Explore{" "}
        <span>
          <a className="text-[#06b6d4]">Roadmap </a>
        </span>
        for Step by step guide to Crack MAANG.
      </p>
      <div className="mb-6 flex flex-row space-x-4">
        <a
          className="rounded-md border border-gray-500 px-4 py-2 text-white shadow-xl transition duration-200 hover:scale-95 hover:shadow-[#06b6d4]/20"
          href="/problems"
        >
          Dsa Roadmap
        </a>
        <a className="rounded-md border-2 border-[#06b6d4]/70 px-4 py-2 text-white shadow-xl transition duration-200 hover:scale-95 hover:shadow-[#06b6d4]/20">
          Explore
        </a>
      </div>
      <div className="mb-6 flex w-full flex-col text-xs text-white">
        Confused? Learn how to effectively use Dsa Atlas{" "}
      </div>
    </div>
  );
}

export default Hero_links;
