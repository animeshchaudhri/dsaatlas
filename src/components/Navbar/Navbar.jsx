import { LogIn } from "lucide-react";
import Navlinks from "./Navlinks";
import SearchBar from "./Search";
import { Suspense } from "react";
function Navbar() {
  return (
    <>
      <div
        className="flex w-full items-center justify-between h-14 text-sm font-medium mx-auto i"
        style={{ maxWidth: "1400px" }}
      >
        <div className="relative flex items-center gap-3">
          <h1>Dsa Atlas</h1>
          <Navlinks />
        </div>

        <div className="flex items-center justify-end gap-2">
          <div>
            <Suspense>
              <SearchBar />
            </Suspense>
          </div>
          <div className="flex items-center space-x-2">
            <LogIn className="h-5 w-5" />
            <span className="focus:bg-accent hidden rounded-lg p-2 duration-300 focus:outline-none focus-visible:ring-2 md:block">
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
