"use client";
import Editor from "./Editor/Editor.jsx";
import Hero_links from "./Hero_links/Hero_links.jsx";

function Hero() {
  return (
    <>
      <div className="flex relative items-center justify-center mt-20 gap-1 perspectiveCustom">
        <div className="container w-8/12 relative grid min-h-screen items-center justify-center py-24 lg:min-h-0 lg:grid-cols-2 lg:py-0 [&>*]:pointer-events-auto gap-10">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:items-start">
            <Hero_links />
          </div>
          <Editor />
        </div>
        <div>
          <div className="gridSlate absolute left-30 border-b border-slate-100/5 bg-bottom bg-grid-slate-400/[0.05]"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
