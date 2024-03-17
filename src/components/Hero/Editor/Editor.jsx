import React from "react";
import Textgen from "./Textgen.tsx";
const words = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries `;
function Editor() {
  return (
    <>
      <div className="codeEditorWindow mt-20 mb-20 h-[400px] overflow-hidden rounded-xl border border-gray-800 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] transition duration-500 lg:mt-0">
        <div className="flex justify-between bg-[#12151D]">
          <div className="flex h-8 flex-row items-center space-x-2 bg-[#12151D] px-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <a
            className=" mt-1 mr-1.5 flex-end z-20 rounded-md border border-gray-500 px-4 py-1 text-xs text-white transition duration-200 hover:bg-gray-900"
            href=""
          >
            Preview
          </a>
        </div>
        <div className="hide-scrollbar relative h-[370px] w-full overflow-auto rounded-sl bg-[#011627] xl:w-[100%]">
          <pre
            className="hide-scrollbar mb-10 px-4 pt-4 text-xs language-javascript"
            tabindex="0"
          ></pre>
          <div className="ml-1">
            <Textgen words={words} />
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default Editor;
