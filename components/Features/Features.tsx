"use client";
import Features_Main from "./Features_main/Features_Main";
import Feature_About from "./Feature_About/Feature_About";
import Parallax from "../Background/ParallaxScroll/Parallax";
import FeatureCards from "./Feature_Cards/FeatureCards";
function Features() {
  return (
    <>
      <Feature_About />
      <Features_Main />
      {/* <Parallax /> */}
      <FeatureCards />
    </>
  );
}

export default Features;
