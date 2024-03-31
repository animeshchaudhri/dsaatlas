import React from "react";
import { ImageCard } from "./Cards";
import clsx from "clsx";
import Dark1 from "@/public/feature_card_challenge_dark1.png";
import Dark2 from "@/public/feature_card_challenge_dark2.png";

function CAARD() {
  return (
    <>
      <div className="w-full">
        <div className="relative z-10 grid w-full gap-2  lg:gap-8 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block">
          <ImageCard
            imgClass1={clsx(
              "pointer-events-none transition-transform duration-500 bg-neutral-50/30 dark:bg-neutral-800/30",
              "scale-[150%] sm:scale-100 md:scale-100 max-md:rounded-sm rounded-xl top-[69%] left-[69px] md:top-auto w-[42%] sm:top-[50%] md:-bottom-[1%] xl:-bottom-[11%] sm:left-[40px] md:w-[69%]",
              "md:group-hover:translate-x-2 md:group-hover:scale-95"
            )}
            imgClass2={clsx(
              "pointer-events-none transition-transform duration-500 bg-neutral-50/50 dark:bg-zinc-800/60 backdrop-blur-sm translate-x-0",
              "scale-[190%] sm:scale-[120%] md:scale-100 rounded-2xl max-md:rounded-md left-[50%] sm:top-[49%] top-[69%] md:top-auto w-[50%] sm:left-[39%] md:-bottom-[2%] xl:-bottom-[12%] md:w-[77%]",
              "md:group-hover:scale-105 md:group-hover:-translate-x-2"
            )}
            description={
              "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
            }
            bgClass="md:bg-gradient-to-br"
            image={{
              dark1: Dark1,
              dark2: Dark2,

              alt: "Something",
            }}
            title={"Two Sum 🦄"}
          />
        </div>
      </div>
    </>
  );
}

export default CAARD;
