import Features_Main from "./Features_main/Features_Main";
import Feature_About from "./Feature_About/Feature_About";
import Parallax from "../Background/ParallaxScroll/Parallax";
import FeatureCards from "./Feature_Cards/FeatureCards";

function Features() {
  return (
    <>
      <Feature_About />
      <Features_Main />
      <Parallax />
      <FeatureCards />

      <div className="relative rounded-hd mt-10 py-20 lg:py-40">
        <div className="gridSlate absolute  opacity-35 inset-0 border-b border-slate-100/5 bg-bottom bg-grid-slate-400/[0.05]"></div>
        <div className="relative">
          <h3 className="text-center text-lg font-semibold md:text-3xl">
            Ace your next front-end interview with DSA ATlas
          </h3>
          <h4 className="mx-auto mt-4 mb-6 max-w-lg text-center text-sm font-normal text-gray-400 md:text-base">
            With solutions of all the best questions asked, Practice the most
            popular front-end and algorithmic interview questions asked in Big
            Tech and Silicon Valley companies.
          </h4>
          <div className="my-4 flex flex-col justify-center space-y-4 px-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              className="rounded-md border border-gray-500 px-4 py-4 text-white shadow-xl transition duration-200 hover:scale-95 hover:shadow-[#06b6d4]/20"
              href="/problems"
            >
              RoadMap
            </a>
            <a
              className="rounded-md border-2 border-[#06b6d4]/70 px-4 py-4 font-bold text-white shadow-xl transition duration-200 hover:scale-95 hover:shadow-[#06b6d4]/20"
              href="/frontend"
            >
              Sheet
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
