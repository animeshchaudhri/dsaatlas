import { Button } from "../Buttons/Button";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchBar({
  setOpen,
}: {
  setOpen: (v: boolean) => void;
}) {
  const cmdOrCtrl = "Ctrl ";
  return (
    <>
      {/* Mobile Bar */}
      <button
        aria-label="mobile search icon"
        className="rounded-lg p-2 focus:outline-none focus-visible:ring-2 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      {/* Desktop Bar */}
      <Button
        variant="outline"
        className="text-muted-foreground hidden w-64 justify-between gap-3 text-sm lg:inline-flex"
        onClick={() => setOpen(true)}
      >
        <SearchIcon />
        <span className="sm:hidden">Search</span>
        <span className="hidden w-20 truncate text-left sm:inline-block md:w-full">
          Search Challenges...
        </span>
        <span className="whitespace-nowrap text-xs">{cmdOrCtrl}K</span>
      </Button>
    </>
  );
}
