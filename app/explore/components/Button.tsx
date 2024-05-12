import React from "react";

export const BUTTON_BY_TAGS = {
  POPULAR:
    "bg-neutral-500/10 text-neutral-700 hover:text-neutral-700 dark:text-neutral-300 dark:bg-neutral-300/10 hover:bg-neutral-500/20 dark:hover:bg-neutral-300/20",
  NEWEST:
    "bg-neutral-500/10 text-neutral-700 hover:text-neutral-700 dark:text-neutral-300 dark:bg-neutral-300/10 hover:bg-neutral-500/20 dark:hover:bg-neutral-300/20",
  BEGINNER:
    "bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20",
  EASY: "bg-green-500/10 text-green-700 hover:text-green-700 dark:text-green-300 dark:bg-green-300/10 hover:bg-green-500/20 dark:hover:bg-green-300/20",
  MEDIUM:
    "bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20",
  HARD: "bg-red-500/10 text-red-700 hover:text-red-700 dark:text-red-300 dark:bg-red-300/10 hover:bg-red-500/20 dark:hover:bg-red-300/20",
  EXTREME:
    "bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20",
  // this will never actually be used
  EVENT:
    "bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20",
} as const;

interface ViewMoreButtonProps {
  redirectRoute: string;
  tag: keyof typeof BUTTON_BY_TAGS;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  redirectRoute,
  tag,
}) => {
  const buttonClassName = `inline-flex justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background h-10 px-4 group items-center whitespace-nowrap rounded-full py-2 pl-4 pr-3 backdrop-blur-sm ${BUTTON_BY_TAGS[tag]}`;

  return (
    <a href={redirectRoute} className={buttonClassName}>
      view more
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 h-4 w-4 stroke-[3] duration-300 group-hover:translate-x-1"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </a>
  );
};

export default ViewMoreButton;
