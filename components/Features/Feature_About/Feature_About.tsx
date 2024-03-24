import Code_Vault from "./Code_Vault";
function Feature_About() {
  return (
    <div className="flex flex-col items-center mt-10  overflow-hidden ">
      <h1 className="mb-6 text-left text-2xl font-semibold lg:text-4xl">
        Real world questions for Technical Interviews
      </h1>
      <p className="mx-auto mb-6 max-w-2xl px-2 text-center text-sm leading-7 text-gray-400 lg:text-base">
        There are a handful of machine coding questions that can be asked in a
        Technical Interview. Dsa atlas provides a comprehensive list of
        front-end and algorithmic questions with solutions so that you are
        prepared, always.
      </p>

      <Code_Vault />
    </div>
  );
}

export default Feature_About;
