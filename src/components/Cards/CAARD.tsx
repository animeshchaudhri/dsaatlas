"use client";
import React from "react";
import FeatureCard from "./Cards";
import clsx from "clsx";
import Image from "next/image";
import { useTheme } from 'next-themes';

function CAARD() {
  return (
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
      description={"hello"}
      bgClass="md:bg-gradient-to-br"
      image={{
        dark1: './feature_card_challenge_dark1.png',
        dark2: './feature_card_challenge_dark1.png',
        light1: './feature_card_challenge_dark1.png', // Using the same image for light theme for now
        light2: './feature_card_challenge_dark1.png', // Using the same image for light theme for now
        alt: "Something",
      }}
      title={"hello"}
    />
  );
}

export default CAARD;

export function ImageCard({
  image,
  imgClass1,
  imgClass2,
  ...props
}) {
  const { resolvedTheme } = useTheme();
  return (
    <FeatureCard title={props.title} description={props.description} {...props}>
      <>
        {resolvedTheme === "dark" && (
          <>
            <Image
              alt={image.alt}
              className={imgClass1}
              src={image.dark1}
              style={{
                position: "absolute",
                userSelect: "none",
                maxWidth: "unset",
              }}
            />
            <Image
              alt={image.alt}
              className={imgClass2}
              src={image.dark2}
              style={{
                position: "absolute",
                userSelect: "none",
                maxWidth: "unset",
              }}
            />
          </>
        )}
      </>
    </FeatureCard>
  );
}
