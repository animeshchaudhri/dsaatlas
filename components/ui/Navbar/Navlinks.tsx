import Link from "next/link";
import React from "react";

function Navlinks() {
  return (
    <>
      <div>
        <ul className="flex items-center md:ml-4 md:flex md:gap-4 max-md:hidden">
          <Link
            href="/explore"
            className="hover:text-foreground text-foreground/80 transition-colors cursor-pointer"
          >
            Explore
          </Link>
          <Link
            href="/roadmap"
            className="hover:text-foreground text-foreground/80 transition-colors cursor-pointer"
          >
            Roadmap
          </Link>

          <Link
            href="/sheet"
            className="hover:text-foreground text-foreground/80 transition-colors cursor-pointer"
          >
            Sheet
          </Link>
          <div className="flex items-center gap-1 cursor-pointer">
            <Link
              href="/75dayshard"
              className="hover:text-foreground text-foreground/80 transition-colors cursor-pointer"
            >
              75 days hard
            </Link>
            <li className="inline-flex animate-shimmer items-center border rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 border-transparent text-primary-foreground py-0.5 text-xs h-4 bg-red-600 px-1.5">
              new
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navlinks;
