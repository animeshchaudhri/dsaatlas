import Navlinks from "./Navlinks";
import SearchBar from "./Search";
import { Suspense } from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { UserButton, auth } from "@clerk/nextjs";

function Navbar() {
  const { userId }: { userId: string | null } = auth();
  console.log(userId);
  return (
    <>
      <div className=" w-full flex justify-center items-centre mx-auto pl-6 pr-6">
        <div
          className="flex w-full items-center justify-between h-14 text-sm font-medium mx-auto pl-6 pr-6 container"
          style={{ maxWidth: "950px" }}
        >
          <div className="relative flex items-center gap-3">
            <Link href="/">
              <h1>Dsa Atlas</h1>
            </Link>
            <Navlinks />
          </div>

          <div className="flex items-center justify-end gap-2">
            <div>
              <Suspense>
                <SearchBar setOpen={false} />
              </Suspense>
            </div>
            {userId ? (
              <div className="pl-7">
                <UserButton />
              </div>
            ) : (
              <Link href={"sign-in"}>
                <div className="flex items-center space-x-2 focus:bg-accent w-20 rounded-xl bg-transparent p-2 text-black duration-300 hover:bg-gray-200 focus:outline-none dark:text-white hover:dark:bg-gray-800 cursor-pointer">
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
