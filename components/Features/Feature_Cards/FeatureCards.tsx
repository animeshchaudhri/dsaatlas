import CAARD from "@/components/ui/Cards/CAARD";
import Lamp from "../../Background/Lamp/Lamp";

function DSAAtlasFeatures() {
  return (
    <>
      <section
        className="container mx-auto pt-36 overflow-hidden bg-cover "
        id="About"
        style={{
          backgroundImage: `url('/beams.jpg')`,
          height: "972px",
        }}
      >
        <div className="mb-20">
          <section
            className="text-center text-balance 2xl:text-[3.625rem] mx-auto z-50"
            style={{ fontSize: "42px" }}
          >
            <h2 className="mb-6 leading-snug">
              <span className="inline-block">Discover&nbsp;</span>

              <span className="inline-block">the&nbsp;</span>
              <span className="inline-block  bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3">
                ultimate
              </span>
              <span className="inline-block  bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3">
                destination
              </span>
              <span className="inline-block  bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3">
                for&nbsp;
              </span>
              <span className="inline-block  bg-clip-text text-transparent bg-gradient-to-r from-[#F0C78E] to-[#E98F81] mr-2.5 xl:mr-3">
                DSA
              </span>
              <span className="inline-block">preparation</span>
            </h2>
            <p className="text-[#54565B] 2xl:text-[#fff] font-light text-lg max-w-[344px] mb-5 mx-auto">
              Elevate your DSA skills with DSA Atlas by your side!
            </p>
          </section>
        </div>
        <div className="w-full   flex flex-col lg:flex-row items-center justify-center ">
          <div className="relative max-w-154 flex items-center justify-center overflow-hidden rounded-[20px] md:rounded-[30px] border border-transparent">
            <div className="w-[40rem] flex items-center justify-center">
              <div className="w-[32rem] max-md:w-[20rem]	">
                <CAARD />
              </div>
            </div>
          </div>
          <div className="w-15 h-24"></div>
          <div className="max-w-105">
            <div className="relative flex group cursor-pointer mb-8 last:mb-0">
              <div>
                <h3 className="text-lg md:text-[1.375rem] group-hover:font-bold mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#F0C78E] to-[#E98F81] transition-all duration-500">
                  Strategic
                </h3>
                <p className="font-light text-[#54565B] md:text-lg text-base max-w-[344px]">
                  Strategize your DSA preparation with targeted resources.
                </p>
              </div>
              <div className=" absolute top-0 right-0 flec items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 ">
                <p className="absolute top-2.5 right-3 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                  5%
                </p>
              </div>
            </div>
            <div className="relative flex group cursor-pointer mb-8 last:mb-0">
              <div>
                <h3 className="text-lg md:text-[1.375rem] group-hover:font-bold mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#F0C78E] to-[#E98F81] transition-all duration-500">
                  Tailored
                </h3>
                <p className="font-light text-[#54565B] md:text-lg text-base max-w-[344px]">
                  Customize your learning experience with tailor-made DSA
                  content.
                </p>
              </div>
              <div className=" absolute top-0 right-0 flec items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 ">
                <p className="absolute top-2.5 right-3 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                  10%
                </p>
              </div>
            </div>
            <div className="relative flex group cursor-pointer mb-8 last:mb-0">
              <div>
                <h3 className="text-lg md:text-[1.375rem] group-hover:font-bold mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#F0C78E] to-[#E98F81] transition-all duration-500">
                  Empowering
                </h3>
                <p className="font-light text-[#54565B] md:text-lg text-base max-w-[344px]">
                  Empower yourself with the knowledge and skills to excel in DSA
                  interviews.
                </p>
              </div>
              <div className=" absolute top-0 right-0 flec items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 ">
                <p className="absolute top-2.5 right-3 bg-clip-text text-transparent bg-gradient-to-t from-white to-white/40">
                  55%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DSAAtlasFeatures;
