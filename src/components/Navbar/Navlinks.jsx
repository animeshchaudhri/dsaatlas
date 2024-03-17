import React from "react";

function Navlinks() {
  return (
    <>
      <div>
        <ul className="flex items-center md:ml-4 md:flex md:gap-4 ">
          <li>Explore</li>
          <li>Roadmap</li>
          <div className="flex items-center gap-1">
            <li>75 days hard</li>
            <li className="inline-flex items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent text-primary-foreground py-0.5 text-xs h-4 bg-red-600 px-1.5">
              new
            </li>
          </div>
          <li>Sheet</li>
        </ul>
      </div>
    </>
  );
}

export default Navlinks;
