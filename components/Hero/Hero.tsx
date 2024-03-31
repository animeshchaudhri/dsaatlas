import Editor from "./Editor/Editor.jsx";
import Hero_links from "./Hero_links/Hero_links.jsx";

function Hero() {
  return (
    <>
      <div className="flex relative items-center  justify-center mt-20 gap-1 perspectiveCustom">
        <div className="mx-auto  grid h-full w-full max-w-7xl grid-cols-1 items-center px-4  xl:h-96 xl:grid-cols-2 xl:gap-10 xl:px-0">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:items-start">
            <Hero_links />
          </div>
          <Editor />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Hero;
